import Link from "next/link";
export const Nav = () => {
  return (
    <div className=" sm-vh-20 vh-100 sticky-top d-flex flex-column align-items-center pt-5">
      <Link href="/profile" className="text-decoration-none">
        Dashboard
      </Link>
      <br />
      <Link href="/profile/add-vehicle" className="text-decoration-none">
        Add Vehicle
      </Link>
      <br />
      <Link href="/profile/hires" className="text-decoration-none">
        Hires
      </Link>
    </div>
  );
};
