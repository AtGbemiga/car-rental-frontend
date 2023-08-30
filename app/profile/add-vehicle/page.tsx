"use client";
import { Form } from "./components/Form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function AddVehicle() {
  const router = useRouter();
  const cookie = Cookies.get("token");
  useEffect(() => {
    if (!cookie) {
      router.push("/login");
      return;
    }
  }, [cookie, router]);
  return (
    <div className="container pb-5">
      <h2 className="mt-5">Add Vehicle</h2>
      <Form />
    </div>
  );
}
