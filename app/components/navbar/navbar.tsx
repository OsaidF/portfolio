"use client";
import React from "react";
import styles from "./navbar.module.css";
import {
  AnimatePresence,
  anticipate,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import ThemeTabs from "../themeTabs/themeTabs";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { scrollY } = useScroll();
  const paddingTop = useTransform(scrollY, [0, 50], [50, 0]);
  const marginTop = useTransform(scrollY, [0, 50], [10, 20]);
  const width = useTransform(scrollY, [0, 50], ["90%", "100%"], {
    ease: anticipate,
  });
  const borderRadius = useTransform(scrollY, [0, 50], ["5px", "0px"]);
  return (
    <motion.div className={styles.container} style={{ paddingTop }}>
      <motion.div
        className={styles.navbarDesktop}
        style={{ width, borderRadius }}
      >
        <div className={styles.items}>
          <div className={styles.itemContainer}>
            <div className={styles.logo}>
              <h1>Osaid.Dev</h1>
            </div>
            <ul className={styles.links}>
              <Link href={"#"}>
                <li className={`${styles.link} ${styles.active}`}>Home</li>
              </Link>
              <Link href={"#"}>
                <li className={styles.link}>About</li>
              </Link>
              <Link href={"#"}>
                <li className={styles.link}>Services</li>
              </Link>
              <Link href={"#"}>
                <li className={styles.link}>Portfolio</li>
              </Link>
              <Link href={"#"}>
                <li className={styles.link}>Contact</li>
              </Link>
              <Link href={"#"}>
                <button className={styles.button}>Get Started</button>
              </Link>
              <ThemeTabs />
              <button className={styles.mobileNav} onClick={handleShowNavbar}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                  <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    variants={{
                      closed: { d: "M 2 2.5 L 20 2.5" },
                      open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    animate={showNavbar ? "open" : "closed"}
                  />
                  <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                    animate={showNavbar ? "open" : "closed"}
                  />
                  <motion.path
                    fill="transparent"
                    strokeWidth="3"
                    stroke="hsl(0, 0%, 18%)"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { d: "M 2 16.346 L 20 16.346" },
                      open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    animate={showNavbar ? "open" : "closed"}
                  />
                </svg>
              </button>
            </ul>
          </div>
        </div>
        <AnimatePresence mode="sync">
          {showNavbar && (
            <motion.div
              className={styles.navElements}
              style={{ marginTop }}
              variants={{
                hidden: {
                  y: -200,
                  zIndex: -30000,
                  transition: {
                    delay: 0.04,
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                },

                visible: {
                  y: 0,
                  transition: {
                    delay: 0.04,
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                },
                exit: {
                  y: -200,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              exit="exit"
              animate="visible"
            >
              <Link href={"#"}>
                <li>Home</li>
              </Link>
              <Link href={"#"}>
                <li>About</li>
              </Link>
              <Link href={"#"}>
                <li>Services</li>
              </Link>
              <Link href={"#"}>
                <li>Portfolio</li>
              </Link>
              <Link href={"#"}>
                <li>Contact</li>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
