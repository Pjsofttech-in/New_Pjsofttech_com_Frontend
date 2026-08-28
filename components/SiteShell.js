"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar/Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer/Footer"), { ssr: false });
const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });
const ScrollToTopButton = dynamic(() => import("./ScrollToTopButton"), { ssr: false });

export default function SiteShell({ children }) {
	const pathname = usePathname();
	const hideChrome = pathname === "/login-page";

	useEffect(() => {
		const handleImageError = (event) => {
			const image = event.target;
			if (image instanceof HTMLImageElement && !image.src.endsWith("/images/bot.png")) {
				image.src = "/images/bot.png";
			}
		};

		document.addEventListener("error", handleImageError, true);
		return () => document.removeEventListener("error", handleImageError, true);
	}, []);

	return (
		<>
			<ScrollToTop />
			{!hideChrome && <Navbar />}
			<div style={{ minHeight: "calc(100vh - 100px)" }}>{children}</div>
			{!hideChrome && <Footer />}
			<ScrollToTopButton />
		</>
	);
}
