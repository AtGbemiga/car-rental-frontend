"use client";

import Link from "next/link";
import { useState } from "react";
import signUpFunction from "@/lib/signUpUser";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    signUpEmail: "",
    signUpPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body: Auth = {
      email: formData.signUpEmail,
      password: formData.signUpPassword,
    };

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(formData.signUpEmail);

    if (!isValidEmail) {
      setEmailError(true);
      return;
    }

    try {
      await signUpFunction(body);
      router.push("/profile");
    } catch (error) {
      if (error instanceof Error && error.message.includes("Duplicate")) {
        setErrorMessage("Email already exists");
      } else if (error instanceof Error && error.message.includes("password")) {
        setPasswordError("Please provide password");
      } else {
        setErrorMessage("Failed");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="signUpEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="signUpEmail"
          aria-describedby="emailHelpText"
          name="signUpEmail"
          onChange={handleChange}
        />
        <div id="emailHelpText" className="form-text">
          {emailError && (
            <p className="error-message text-danger">
              Please provide a valid email address.
            </p>
          )}
          {errorMessage !== "" && (
            <p className="error-message text-danger">{errorMessage}</p>
          )}
        </div>
      </div>

      <label htmlFor="signUpPassword" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control mb-3"
        id="signUpPassword"
        aria-describedby="signUpPassword"
        name="signUpPassword"
        onChange={handleChange}
      />
      <div id="emailHelpText" className="form-text">
        {passwordError !== "" && (
          <p className="error-message text-danger">{passwordError}</p>
        )}
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
