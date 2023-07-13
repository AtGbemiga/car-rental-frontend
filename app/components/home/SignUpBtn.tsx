import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const SignUpBtn = () => {
  return (
    <Button>
      <Link
        className="bg-transparent text-white text-decoration-none"
        href="/sign-up"
      >
        Sign up
      </Link>
    </Button>
  );
};
