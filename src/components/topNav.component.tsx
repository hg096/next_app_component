"use client";
import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';

export const TOPNAV = ({ title, url = null }) => {
	// const { data: session, status } = useSession();
	// const user = session?.user;

	const router = useRouter();

	function returnBack() {
		if (url) {
			router.push(url);
		} else {
			router.back();
		}
	}

	return (
		<div>
			<div className="fixed top-0 z-20 w-full">
				<div className="flex w-full h-full  max-w-[480px] items-center bg-white">
					<div className="flex w-full items-center justify-center p-3">
						<div className="absolute left-0 top-4 px-4" onClick={returnBack}>
							<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.0855825 6.44927C0.0855825 6.31593 0.110686 6.18693 0.160892 6.06227C0.211099 5.93693 0.27804 5.8326 0.361717 5.74927L4.98069 1.14927C5.16478 0.965934 5.39908 0.874268 5.68358 0.874268C5.96808 0.874268 6.20237 0.965934 6.38646 1.14927C6.57055 1.3326 6.6626 1.56593 6.6626 1.84927C6.6626 2.1326 6.57055 2.36593 6.38646 2.54927L2.47038 6.44927L6.38646 10.3493C6.57055 10.5326 6.6626 10.7659 6.6626 11.0493C6.6626 11.3326 6.57055 11.5659 6.38646 11.7493C6.20237 11.9326 5.96808 12.0243 5.68358 12.0243C5.39907 12.0243 5.16478 11.9326 4.98069 11.7493L0.361717 7.14927C0.261305 7.04927 0.190346 6.94093 0.148843 6.82427C0.10667 6.7076 0.0855825 6.5826 0.0855825 6.44927Z"
									fill="#383838"
								/>
							</svg>
						</div>
						<div className="px-4 text-h-4 ">
							<p>{title}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-[48px] bg-green-300"></div>
		</div>
	);
};
