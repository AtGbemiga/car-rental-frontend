import Link from "next/link";

export const SignUpForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="signUpEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="signUpEmail"
          aria-describedby="signUpEmail"
          name="signUpEmail"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <label htmlFor="signUpPassword" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="signUpPassword"
        aria-describedby="signUpPassword"
        name="signUpPassword"
      />
      <div id="emailHelp" className="form-text mb-3">
        We'll never share your email with anyone else.
      </div>

      <button
        type="submit"
        className="btn btn-primary mb-5 link-decoration-none"
      >
        Submit
      </button>
      <article>
        Already have an account?{" "}
        <Link href="/login" className="text-decoration-none">
          Login
        </Link>
      </article>
    </form>
  );
};
