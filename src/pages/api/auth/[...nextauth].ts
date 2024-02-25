import NextAuth,{NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client";

type ClientType = {
  clientId:string;
  clientSecret:string;
}

const prisma = new PrismaClient();

const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType)
  ],
  session:{
    strategy:"jwt"
  },
  secret:'secret',
}

export default NextAuth(authOptions)