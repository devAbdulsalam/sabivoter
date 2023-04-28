import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
	function middleware(req) {
		if (
			req.nextUrl.pathname.startsWith('/admin') &&
			req?.token === 'authenticated' &&
			req?.token?.role !== 'admin'
		) {
			// console.log("request", req.nextUrl.pathname);
			// console.log(req.cookies);
			return NextResponse.rewrite(
				new URL('/signin?message=You are not Authorize!', req.url)
			);
		}

		if (req.nextUrl.pathname.match('/me') && req?.token !== 'authenticated') {
			// console.log("request", req.nextUrl.pathname);
			console.log(req?.token);
			return NextResponse.rewrite(
				new URL('/signin?message=You are not Authorize!', req.url)
			);
		}
	},
	{
		callbacks: {
			authorized(token) {
				return token?.role === 'admin';
			},
		},
	}
);

export const config = {
	matcher: ['/admin/:path*'],
	// matcher: ['/me'],
};
