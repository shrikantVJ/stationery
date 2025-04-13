import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/../models/user"; // double-check path for accuracy

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          await connectMongoDB();
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found");
          }

          if (user.provider && user.provider !== "credentials") {
            throw new Error(
              `This account was created using ${user.provider}. Please sign in with that method.`
            );
          }

          if (!user.password) {
            throw new Error("Password not set for this account.");
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!passwordMatch) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Authorize Error:", error);
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await connectMongoDB();
          const existingUser = await User.findOne({ email: profile.email });

          if (!existingUser) {
            await User.create({
              name: profile.name,
              email: profile.email,
              provider: "google",
            });
          }

          return true;
        } catch (error) {
          console.error("Google SignIn Error:", error);
          return false;
        }
      }
      return true;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login", // your custom sign-in route
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow only internal redirects
      if (url.startsWith(baseUrl)) return url;
      return baseUrl + "/home"; // Fallback if callbackUrl is missing
    },
  },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
