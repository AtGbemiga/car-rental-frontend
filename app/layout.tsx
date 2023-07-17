import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Made by Gbemiga",
  icons: {
    icon: "/favicon.png",
  },
  creator: "Gbemiga",
  keywords: ["Next.js", "React", "JavaScript", "Bootstrap"],
  applicationName: "Car-rental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
