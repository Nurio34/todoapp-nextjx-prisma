import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="bumblebee">
            <body className={inter.className}>
                <div className="py-[2vh] px-[4vw]">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}