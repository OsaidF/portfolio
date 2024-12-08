import React from "react";
import styles from "./contact.module.css";
import email from "../../public/images/contact/email.svg";
import whatsapp from "../../public/images/contact/whatsapp.svg";
import phone from "../../public/images/contact/phone.svg";
import linked from "../../public/images/contact/linkedin.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.left}>
          <div className={styles.topText}>
            <h3 className={styles.subHeading}>Contact Me</h3>
            <h1 className={styles.heading}>Get In Touch</h1>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className={styles.links}>
            <a href="tel:+923485012697">
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image
                    src={phone}
                    alt="Telephone Icon"
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>Phone</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>

            <a target="_blank" href="https://wa.me/03485012697">
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image
                    src={whatsapp}
                    alt="Whatsapp Icon"
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>Whatsapp</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>

            <a target="_blank" href="mailto:osaidfarooqui@outlook.com">
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image src={email} alt="Email Icon" className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>Email</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/osaid-farooqui-9006262b8/"
            >
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image
                    src={linked}
                    alt="LinkedIn Icon"
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>LinkedIn</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/osaid-farooqui-9006262b8/"
            >
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image
                    src={phone}
                    alt="Telephone Icon"
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>Phone</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/osaid-farooqui-9006262b8/"
            >
              <div className={styles.link}>
                <div className={styles.iconContainer}>
                  <Image
                    src={whatsapp}
                    alt="Whatsapp Icon"
                    className={styles.icon}
                  />
                </div>
                <div>
                  <h3 className={styles.linkHeading}>Whatsapp</h3>
                  <p className={styles.linkSubHeading}>Click to open</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>

            <div>
            <label htmlFor="name" className={styles.formLabel}>Name</label><br />
            <input className={styles.formInput} id="name" placeholder="John Doe"></input>
            </div>

            <div>
            <label htmlFor="email" className={styles.formLabel}>Email</label><br />
            <input className={styles.formInput} id="email" placeholder="example@email.com"></input>
            </div>

            <div>
            <label htmlFor="message" className={styles.formLabel}>Message</label><br />
            <textarea className={styles.formTextarea} id="message" placeholder="Write me a message..."></textarea>
            </div>
            <button className={styles.formButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
