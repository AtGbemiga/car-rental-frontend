import Image from "next/image";
import styles from "./style.module.css";
import {
  CreditCard,
  Facebook,
  LinkedIn,
  NewsletterArrow,
  Paypal,
  Twitter,
} from "./FooterIconsSvg";
import FooterYear from "../date-fns/FooterYear";

export default function Footer() {
  return (
    <footer className={`position-relative ${styles.footer}`}>
      <div className={`container ${styles.footerBackground}`}>
        <div className={`row ${styles.footerBackground}`}>
          <div
            className={`col-lg-3 pe-lg-5 col-sm-6 ${styles.footerBackground}`}
          >
            <div
              className={`${styles.singlebox}, ${styles.footerBackground}, text-white position-relative`}
            >
              <Image
                src="/footercarImg.png"
                width={100}
                height={100}
                alt="footer image"
                style={{ width: "100%" }}
              />
              <p className={`m-0 py-4 ${styles.footerBackground}`}>
                Car Rental is the answer to a lot of questions we’ve asked
                ourselves: what do we want our cities to look like in the
                future?
              </p>
              <h5 className={`m-0 pb-2 ${styles.footerBackground}`}>
                We Accept
              </h5>
              <div
                className={`d-flex gap-3 card-area ${styles.footerBackground}`}
              >
                <CreditCard />
                <Paypal />
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 ${styles.footerBackground}`}>
            <div className={`${styles.singlebox} ${styles.footerBackground}`}>
              <h2 className={styles.footerBackground}>Company</h2>
              <ul className={styles.footerBackground}>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Careers
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Team & Culture
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 ${styles.footerBackground}`}>
            <div className={`${styles.singlebox} ${styles.footerBackground}`}>
              <h2 className={`${styles.footerBackground}`}>Resources</h2>
              <ul className={styles.footerBackground}>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Become a Driver Partner
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Referrals
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Partner with Us
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    For iOS
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    For Android
                  </a>
                </li>
                <li className={styles.footerBackground}>
                  <a className={styles.footerBackground} href="#">
                    Desktop App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-3 col-sm-6 ${styles.footerBackground}`}>
            <div className={`${styles.singlebox} ${styles.footerBackground}`}>
              <h2 className={styles.footerBackground}>Newsletter</h2>
              <p className={styles.footerBackground}>
                Stay up-to-date with the latest news, exclusive offers, and
                exciting updates by subscribing to our newsletter. Don't miss
                out!
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email"
                  aria-label="Enter your Email ..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text icon-link icon-link-hover"
                  id="basic-addon2"
                  style={{ cursor: "pointer" }}
                >
                  <NewsletterArrow />
                </span>
              </div>
              <h2 className={`text-center ${styles.footerBackground}`}>
                Follow us on
              </h2>
              <p className={`d-flex gap-3  ${styles.footerBackground}`}>
                <Facebook />
                <Twitter />
                <LinkedIn />
              </p>
            </div>
          </div>
        </div>
      </div>
      <small
        className={`position-absolute bottom-0 start-50 translate-middle ${styles.footerBackground} text-white`}
        style={{ backgroundColor: "#101010" }}
      >
        © <FooterYear /> Car Rental. Made by Gbemiga Atolagbe
      </small>
    </footer>
  );
}
