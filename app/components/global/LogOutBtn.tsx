"use client";

import Button from "react-bootstrap/esm/Button";
import logOutFunction from "@/lib/logOutUser";
import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  const router = useRouter();
  async function handleClick() {
    await logOutFunction();
    router.push("/");
  }
  return (
    <Button
      onClick={handleClick}
      className="btn me-3 text-dark"
      style={{
        backgroundColor: "transparent",
        border: "1px solid transparent",
      }}
    >
      Logout
    </Button>
  );
};
