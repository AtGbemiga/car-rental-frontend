import Link from "next/link";
import styles from "../styles.module.css";
export const Nav = () => {
  return (
    <div className={`pt-5 sticky-top ${styles.profile_nav_css} `}>
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
