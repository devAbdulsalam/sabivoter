import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
	function middleware(req) {
		console.log('request', req.nextUrl.pathname);
		if (
			req.nextUrl.pathname.startsWith('/admin') &&
			req?.token === 'authenticated' &&
			req?.token?.role !== 'admin'
		) {
			console.log('request', req.nextUrl.pathname);
			// console.log(req.cookies);
			return NextResponse.rewrite(
				new URL('/unauthorized?message=You are not Authorize!', req.url)
			);
		}

		// if (req.nextUrl.pathname.match('/me') && req?.token !== 'authenticated') {
		// 	// console.log("request", req.nextUrl.pathname);
		// 	console.log(req?.token);
		// 	return NextResponse.rewrite(
		// 		new URL('/signin?message=You are not Authorize!', req.url)
		// 	);
		// }
		if (req.nextUrl.pathname.match('/dashboard')) {
			return NextResponse.rewrite(new URL(req.url));
		}
	},
	{
		callbacks: {
			authorized: (params) => {
				let { token } = params;
				// return token?.role === 'admin';
				return !!token;
			},
		},
	}
);

export const config = {
	matcher: ['/me', '/admin/:path*'],
};
