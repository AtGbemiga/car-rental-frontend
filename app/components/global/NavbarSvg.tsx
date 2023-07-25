import Button from "react-bootstrap/esm/Button";
import Link from "next/link";

export const ProfileIcon = () => {
  return (
    <Button
      className="btn me-3"
      style={{
        backgroundColor: "transparent",
        border: "1px solid transparent",
      }}
    >
      <Link className="text-dark text-decoration-none" href="/profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </Link>
    </Button>
  );
};
