import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
};

// Export GET and POST handlers directly
const nextAuthHandler = NextAuth(authOptions);

export const GET = nextAuthHandler;
export const POST = nextAuthHandler;