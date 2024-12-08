"use client";
import React from "react";
import styles from "./portfolio.module.css";
import Image from "next/image";
import workData from "./works";
import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Close from "@/app/public/images/close.svg";

const Portfolio = () => {
  const [workId, setWorkId] = useState<null | any>(null);
  let works = useMemo(() => workData, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setWorkId(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.topbar}>
          <div className={styles.headings}>
            <h4 className={styles.subHeading}>Portfolio</h4>
            <h2 className={styles.heading}>Some of my projects</h2>
          </div>
          <hr className={styles.hr} />
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            nisi a eros fermentum ornare et sit amet lorem. Curabitur arcu
            ligula, pretium ac lobortis et, tempus at lorem.
          </p>
        </div>
        <LayoutGroup id="works">
          <div className={styles.works}>
            {works.map((i) => (
              <motion.div
                className={styles.work}
                key={i.id}
                layoutId={i.id}
                onClick={() => setWorkId(i.id)}
              >
                <motion.div layoutId={`image-${i.id}`}>
                  <Image
                    src={i.image}
                    className={styles.portfolioImage}
                    alt="Portfolio Image"
                  />
                </motion.div>
                <motion.h1 className={styles.workHeading}>{i.name}</motion.h1>
                <h4 className={styles.workSubHeading}>{i.smallDesc}</h4>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {workId && (
              <motion.div className={styles.modalContainer} key="modal">
                <motion.div
                  key="backdrop"
                  className={styles.backdrop}
                  onClick={() => setWorkId(null)}
                  variants={{
                    hidden: {
                      opacity: 0,
                      transition: {
                        duration: 0.16,
                      },
                    },
                    visible: {
                      opacity: 0.8,
                      transition: {
                        delay: 0.04,
                        duration: 0.2,
                      },
                    },
                  }}
                  initial="hidden"
                  exit="hidden"
                  animate="visible"
                ></motion.div>

                {/* MODAL */}
                <motion.div className={styles.modal} layoutId={workId}>
                  <motion.div layoutId={`image-${works[workId].id}`}>
                    <Image
                      src={works[workId].image}
                      alt="image"
                      className={styles.modalImage}
                    />
                  </motion.div>
                  <div>
                    <h1 className={styles.modalHeading}>
                      {works[workId].name}
                    </h1>
                    <h2 className={styles.modalSubHeading}>
                      {works[workId].largeDesc}
                    </h2>
                  </div>
                  {/* CLOSE BUTTON */}
                  <motion.button
                    className={styles.close}
                    onClick={() => setWorkId(null)}
                  >
                    <Image
                      src={Close}
                      alt="close button"
                      className={styles.closeImage}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default Portfolio;
