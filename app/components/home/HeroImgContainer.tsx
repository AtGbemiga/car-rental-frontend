"use client";

import Image from "next/image";
import NavbarBox from "../global/Navbar";

export default function HeroImgContainer() {
  return (
    <section
      className="position-relative"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <NavbarBox />
      <div className="position-relative">
        <Image
          src="/heroImg.png"
          alt="Hero image"
          fill={true}
          priority={true}
          style={{ objectFit: "contain" }}
          className="d-none d-sm-block"
        />
        <div
          className="d-flex align-items-center ps-lg-5 ps-md-5 ps-sm-3 ps-xs-2"
          style={{ height: "70vh" }}
        >
          <div className="bg-transparent text-dark position-relative text-start col-lg-6 col-md-6 col-sm-6 ps-sm-4">
            <h1 className="col-lg-12 col-md-12 bg-transparent">
              Rental Cars On Demand Delivered To Your Door.
            </h1>
            <h5 className="col-lg-12 bg-transparent text-bold">
              No lines, no paperwork, no refueling on return.
              <br />
              Fully flexible.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
