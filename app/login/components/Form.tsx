import Link from "next/link";

export const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="loginEmail"
          name="loginEmail"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <label htmlFor="loginPassword" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="loginPassword"
        aria-describedby="loginPassword"
        name="loginPassword"
      />
      <div id="emailHelp" className="form-text mb-3">
        We'll never share your email with anyone else.
      </div>

      <button
        type="submit"
        className="btn btn-primary mb-5 link-decoration-none"
      >
        Login
      </button>
      <article>
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-decoration-none">
          Sign Up
        </Link>
      </article>
    </form>
  );
};
