import { dmSans, jetbrainsMono } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Hostmadeup - Premium Web Hosting & Infrastructure",
        template: "%s | Hostmadeup",
    },
    description:
        "Enterprise-grade web hosting, VPS, cloud servers, and domain registration. Built for developers who demand performance.",
    keywords: [
        "web hosting",
        "vps hosting",
        "cloud hosting",
        "domain registration",
        "wordpress hosting",
        "node.js hosting",
    ],
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
