import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith@gmail.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'password',
				},
			},
			async authorize(credentials, req) {
				const res = await fetch('http://localhost:3000/api/auth/login', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { 'Content-Type': 'application/json' },
				});
				const user = await res.json();
				if (res.ok && user) {
					return user;
				}
				if (!res.ok && !user) {
					throw new Error('user not found');
				}
			},
		}),
	],
	pages: {
		signIn: '/signin',
		signUp: '/signup',
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			session.user = token.user;

			//delete password if it exist
			delete session?.user?.password;
			return session;
		},
	},
	session: {
		strategy: 'jwt',
	},
};
export default NextAuth(authOptions);
