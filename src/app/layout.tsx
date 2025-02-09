import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";

const newsreader = Newsreader({
	style: ["italic", "normal"],
	subsets: ["latin"],
	variable: "--font-newsreader",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const fonts = [geistSans, newsreader];

export const metadata: Metadata = {
	title: "Marco Condrache",
	creator: "Marco Condrache",
	publisher: "Marco Condrache",
	description: "Personal website, blog, and portfolio.",
	authors: [{ name: "Marco Condrache", url: "https://marcocondrache.com" }],
	category: "technology",
	metadataBase: new URL("https://marcocondrache.com"),
	openGraph: {
		title: "Marco Condrache",
		description: "Personal website, blog, and portfolio.",
		url: "https://marcocondrache.com",
		siteName: "Marco Condrache",
		locale: "en-US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Marco Mihai Condrache",
		description: "Personal website, blog, and portfolio.",
		siteId: "marcocondrache",
		creator: "@marcocondrache",
		creatorId: "marcocondrache",
	},
	icons: {
		icon: "/icons/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(fonts.map((f) => f.variable))}>
				<Providers>
					<main className="container min-h-screen max-w-6xl mx-auto">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
