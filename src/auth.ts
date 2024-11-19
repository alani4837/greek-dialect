import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import type { NextAuthConfig } from 'next-auth'

export const { handlers, auth } = NextAuth({
    providers: [Github],
    debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig)