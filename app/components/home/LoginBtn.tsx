import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const LoginBtn = () => {
  return (
    <Button
      className="btn me-3"
      style={{
        backgroundColor: "transparent",
        border: "1px solid transparent",
      }}
    >
      <Link className="text-dark text-decoration-none" href="/login">
        Login
      </Link>
    </Button>
  );
};
