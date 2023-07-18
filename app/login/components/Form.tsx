"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import loginFunction from "@/lib/loginUser";

export const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
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
      email: formData.loginEmail,
      password: formData.loginPassword,
    };

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegex.test(formData.loginEmail);

    if (!isValidEmail) {
      setEmailError(true);
      return; // Stop form submission
    }

    try {
      await loginFunction(body);
      // Registration successful, redirect to profile page
      router.push("/profile");
    } catch (error) {
      if (error instanceof Error && error.message.includes("401")) {
        // Handle duplicate account error
        setErrorMessage("Invalid Credentials.");
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
        <label htmlFor="loginEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="loginEmail"
          name="loginEmail"
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          {emailError && (
            <p className="error-message text-danger">
              Please provide a valid email address.
            </p>
          )}
        </div>
      </div>
      <label htmlFor="loginPassword" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control mb-3"
        id="loginPassword"
        aria-describedby="loginPassword"
        name="loginPassword"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-primary mb-5 link-decoration-none"
      >
        Login
      </button>
      {errorMessage && (
        <p className="error-message text-danger">{errorMessage}</p>
      )}
      <article>
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-decoration-none">
          Sign Up
        </Link>
      </article>
    </form>
  );
};
