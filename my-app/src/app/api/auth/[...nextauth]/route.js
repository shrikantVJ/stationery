import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { User } from "../../../../../models/user";
import { connectToDB } from "../../../../../utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
        return session;
    },

    async signIn({ account,profile, user, email, credentials }) {
      try {
        await connectToDB();
        const checkEmail = await User.find({ email: user.email })
        
        if (checkEmail.length == 0) {
            await user.insertMany({
                name: user.name,
                email: user.email,
            })
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
})
