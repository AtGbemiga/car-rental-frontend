import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarBox from "../components/global/Navbar";
import { Nav } from "./components/Nav";

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

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarBox />
      <main className={`${inter.className} container-fluid`}>
        <div className="row">
          <section className="col-lg-3 col-md-3">
            <Nav />
          </section>
          <section className="col-lg-8 col-md-8">{children}</section>
        </div>
      </main>
    </>
  );
}
