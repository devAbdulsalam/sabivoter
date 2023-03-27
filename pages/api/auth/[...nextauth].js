import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "jsmith@gmail.com",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "password",
				},
			},
			async authorize(credentials, req) {
				const res = await fetch("https://vote-me.cyclic.app/api/v1/login", {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" },
				});
				const user = await res.json();
				if (res.ok && user) {
					console.log(user)
					return user;
				}
				if (!res.ok && !user) {
					// console.log("user not found")
					throw new Error("user not found");
				}
			},
		}),
	],
	pages: {
		signIn: "/signin",
		signUp: "/signup",
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token;
			return session;
		},
	},
	session: {
		strategy: "jwt",
	},
});
