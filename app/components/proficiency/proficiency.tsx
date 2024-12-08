"use client";
import React, { useCallback, useEffect } from "react";
import styles from "./proficiency.module.css";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import skillsData from "./skills";
import softwareData from "./softwares";
import Image from "next/image";
import Close from "@/app/public/images/close.svg";

const Proficiency = () => {
  const [skillsId, setSkillsId] = useState<null | any>(null);
  const [softwareId, setSoftwareId] = useState<null | any>(null);
  let skills = useMemo(() => skillsData, []);
  let softwares = useMemo(() => softwareData, []);

  const handleSkillClose = useCallback(() => {
    setSkillsId(null);
  }, []);

  const handleSoftwareClose = useCallback(() => {
    setSoftwareId(null);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleSkillClose;
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleSoftwareClose;
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <div className={styles.headings}>
          <h4 className={styles.headingTop}>Web developer</h4>
          <h1 className={styles.heading}>Title of the website</h1>
          <h3 className={styles.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Curabitur lacus enim, pulvinar at tortor sit amet, aliquam <br />
            fermentum ex. Suspendisse quis magna arcu. Nunc commodo felis <br />
            a nunc semper, ac dapibus sapien iaculis.
          </h3>
        </div>
        {/* MAP FOR SKILLS PILLS */}
        <div className={styles.technologies}>
          <h4>Technologies I am proficient at:</h4>
          <LayoutGroup id="skills">
            <div className={styles.pills}>
              {skills.map((i) => (
                <motion.div
                  className={styles.pill}
                  key={i.id}
                  layoutId={i.id}
                  onClick={() => skillsId === null && setSkillsId(i.id)}
                >
                  <motion.div className={styles.pillImageContainer}>
                    <motion.div
                      className={styles.pillImage}
                      layoutId={`image-${i.id}`}
                    >
                      <Image
                        src={i.imageW}
                        className={styles.image}
                        alt="react logo"
                      />
                      <Image
                        src={i.imageC}
                        className={styles.imageAlt}
                        alt="react logo"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div className={styles.text} layoutId={`text-${i.id}`}>
                    <h3 className={styles.pillSubheading}>{i.subheading}</h3>
                    <h2 className={styles.pillHeading}>{i.heading}</h2>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {skillsId && (
                <motion.div className={styles.modalContainer} key="modal">
                  {/* MODAL */}
                  <motion.div className={styles.modal} layoutId={skillsId}>
                    {/* IMAGE */}
                    <motion.div
                      className={styles.modalImageContainer}
                      layoutId={`image-${skillsId}`}
                    >
                      <Image
                        src={skills[skillsId].imageC}
                        className={styles.modalImage}
                        alt="react logo"
                      />
                    </motion.div>
                    {/* HEADING */}
                    <motion.div
                      className={styles.modalText}
                      layoutId={`text-${skillsId}`}
                    >
                      <h3 className={styles.modalSubheading}>
                        {skills[skillsId].subheading}
                      </h3>
                      <h2 className={styles.modalHeading}>
                        {skills[skillsId].heading}
                      </h2>
                      <p className={styles.modalParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur lacus enim, pulvinar at tortor sit amet,
                        aliquam fermentum ex. Suspendisse quis magna arcu. Nunc
                        commodo felis a nunc semper, ac dapibus sapien iaculis.
                      </p>
                      <h3 className={styles.modalExperience}>
                        Experience: 3 Years
                      </h3>
                    </motion.div>
                    {/* CLOSE BUTTON */}
                    <motion.button
                      className={styles.close}
                      onClick={handleSkillClose}
                    >
                      <Image
                        src={Close}
                        alt="close button"
                        className={styles.closeImage}
                      />
                    </motion.button>
                  </motion.div>
                  {/* BACKDROP */}
                  <motion.div
                    className={styles.backdrop}
                    onClick={handleSkillClose}
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
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {/* MAP FOR SOFTWARE PILLS */}

        <div className={styles.technologies}>
          <h4>Softwares I am proficient at:</h4>
          <LayoutGroup id="software">
            <div className={styles.pills}>
              {softwares.map((i) => (
                <motion.div
                  className={styles.pill}
                  key={i.id}
                  layoutId={i.id}
                  onClick={() => softwareId === null && setSoftwareId(i.id)}
                >
                  <motion.div className={styles.pillImageContainer}>
                    <motion.div
                      className={styles.pillImage}
                      layoutId={`image-${i.id}`}
                    >
                      <Image
                        src={i.imageW}
                        className={styles.image}
                        alt="react logo"
                      />
                      <Image
                        src={i.imageC}
                        className={styles.imageAlt}
                        alt="react logo"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div className={styles.text} layoutId={`text-${i.id}`}>
                    <h3 className={styles.pillSubheading}>{i.subheading}</h3>
                    <h2 className={styles.pillHeading}>{i.heading}</h2>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {softwareId && (
                <motion.div className={styles.modalContainer} key="modal">
                  {/* MODAL */}
                  <motion.div className={styles.modal} layoutId={softwareId}>
                    {/* IMAGE */}
                    <motion.div
                      className={styles.modalImageContainer}
                      layoutId={`image-${softwareId}`}
                    >
                      <Image
                        src={softwares[softwareId].imageC}
                        className={styles.modalImage}
                        alt="react logo"
                      />
                    </motion.div>
                    {/* HEADING */}
                    <motion.div
                      className={styles.modalText}
                      layoutId={`text-${softwareId}`}
                    >
                      <h3 className={styles.modalSubheading}>
                        {softwares[softwareId].subheading}
                      </h3>
                      <h2 className={styles.modalHeading}>
                        {softwares[softwareId].heading}
                      </h2>
                      <p className={styles.modalParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur lacus enim, pulvinar at tortor sit amet,
                        aliquam fermentum ex. Suspendisse quis magna arcu. Nunc
                        commodo felis a nunc semper, ac dapibus sapien iaculis.
                      </p>
                      <h3 className={styles.modalExperience}>
                        Experience: 3 Years
                      </h3>
                    </motion.div>
                    {/* CLOSE BUTTON */}
                    <motion.button
                      className={styles.close}
                      onClick={handleSoftwareClose}
                    >
                      <Image
                        src={Close}
                        alt="close button"
                        className={styles.closeImage}
                      />
                    </motion.button>
                  </motion.div>
                  <motion.div
                    key="backdrop"
                    className={styles.backdrop}
                    onClick={handleSoftwareClose}
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
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

export default Proficiency;
