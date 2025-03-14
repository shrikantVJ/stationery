'use client'

// import { Divide } from 'lucide-react'
import {SessionProvider} from 'next-auth/react'

const AuthProvider = ({children,session}) => {
    return(
        <div>
            <SessionProvider session={session}>
                {children}
                </SessionProvider>
        </div>
    )

}

export default AuthProvider