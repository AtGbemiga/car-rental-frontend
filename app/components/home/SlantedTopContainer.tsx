import {
  SlantedTopReviewOne,
  SlantedTopReviewThree,
  SlantedTopReviewTwo,
} from "./SlantedTopReviews";
import styles from "./style.module.css";

export const SlantedTopContainer = () => {
  return (
    <section
      className={`container-fluid ${styles.slanted_div} border-box d-flex justify-content-center align-items-center`}
    >
      <div
        className="inner_div row row-cols-2 row-cols-lg-3 g-3 g-lg-2 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#0275d8", width: "90%" }}
      >
        <SlantedTopReviewOne />
        <SlantedTopReviewTwo />
        <SlantedTopReviewThree />
      </div>
    </section>
  );
};
