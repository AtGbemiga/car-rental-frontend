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
      return; // Stop form submission
    }

    try {
      await signUpFunction(body);
      // Registration successful, redirect to profile page
      router.push("/profile");
    } catch (error) {
      if (error instanceof Error && error.message.includes("400")) {
        // Handle duplicate account error
        setErrorMessage("This email is already registered. Login instead.");
      } else {
        // Handle other registration errors
        setErrorMessage("Registration failed. Please try again later.");
        console.error("Registration failed:", error);
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
