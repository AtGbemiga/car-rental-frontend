import { LoginForm } from "./components/Form";
import Image from "next/image";

export default function Login() {
  return (
    <main className="container-fluid min-vh-100">
      <section className="row min-vh-100">
        <div className="position-relative col-4 col-sm-0 d-none d-sm-block">
          <Image
            src="/loginFormImg.png"
            fill={true}
            alt="Login form image"
            className="d-none d-sm-block"
          />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center align-items-center">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
