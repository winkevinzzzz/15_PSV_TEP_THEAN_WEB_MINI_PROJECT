import { loginService } from "@/app/service/auth.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    // login by email and password
    CredentialsProvider({
      // get email and password from login form
      async authorize(userInfo) {
        console.log("userInfo ", userInfo)
        // define object structure
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        console.log("newUserInfo",newUserInfo)
        //  call login services
        const login = await loginService(newUserInfo);
        console.log("login",login)
        if (login?.status === 400) {
          throw new Error(login?.detail);
        }
        return login;
             },
    }),
  ],
  // used to set token into cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  // calling secret key
  secret: process.env.NEXTAUTH_SECRET,
  // tell protected to used this segment for login
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
