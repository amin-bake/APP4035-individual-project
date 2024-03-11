import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        
        GoogleProvider({
            clientId: '1001781913232-ob9d5llcgjllo7s859ecsbjfip0dqqqd.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        GithubProvider({
            clientId: 'Iv1.27a1533ad27e3084',
            clientSecret: '44e6d9cbcf2674bc75cbf513a5d1603387c51ddc',
        })
    ],
}