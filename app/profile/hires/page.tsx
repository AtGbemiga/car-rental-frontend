"use client";
import { Content } from "./components/Content";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Hirelear() {
  const router = useRouter();
  const cookie = Cookies.get("token");
  useEffect(() => {
    if (!cookie) {
      router.push("/login");
      return;
    }
  }, [cookie, router]);
  return (
    <section className="pt-5">
      <Content />
    </section>
  );
}
