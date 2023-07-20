import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBox from "../components/global/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarBox />
      <main className={inter.className}>{children}</main>
    </>
  );
}
