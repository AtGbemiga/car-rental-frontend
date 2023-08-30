"use client";
import { DashboardDetails } from "./dashboard/components/DashboardDetails";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const cookie = Cookies.get("token");
  const router = useRouter();
  useEffect(() => {
    if (!cookie) {
      router.push("/login");
      return;
    }
  }, [cookie, router]);
  return (
    <>
      <DashboardDetails />
    </>
  );
}
