import React from "react";
import styles from "./header.module.css";
import headerImg from "../../public/images/header/header.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <h4 className={styles.headingTop}>Web developer</h4>
          <h1 className={styles.heading}>
            Title of the website lets make this a bit longer
          </h1>
          <h3 className={styles.subHeading}>
            Award winning subtitle, the <br />
            the best in the business.
          </h3>
          <div className={styles.buttons}>
            <button className={styles.button}>Get Started</button>
            <button className={styles.button2}>About Me</button>
          </div>
        </div>
        {/* IMAGE DIV */}
        <div className={styles.right}>
          <Image
            src={headerImg}
            className={styles.image}
            alt="Header Image"
            priority
          />
        </div>
      </div>
      <div className={styles.customShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
