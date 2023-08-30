"use client";
import { Form } from "./components/Form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function CreateProfile() {
  const router = useRouter();
  const cookie = Cookies.get("token");
  useEffect(() => {
    if (!cookie) {
      router.push("/login");
      return;
    }
  }, [cookie, router]);
  return (
    <div className="pt-5">
      <Form />
    </div>
  );
}
