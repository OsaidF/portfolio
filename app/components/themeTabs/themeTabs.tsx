"use client";
import AppThemeProvider from "@/app/theme/theme";
import { useTheme } from "next-themes";
import styles from "./theme.module.css";
import sun from "@/app/public/images/theme/sun.svg";
import moon from "@/app/public/images/theme/moon2.svg";
import { motion } from 'framer-motion'
import Image from "next/image";

function Tab() {
  const { setTheme, theme } = useTheme();

  const changeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
        <motion.div
        className={styles.front}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: theme === "light" ? 0 : 180 }}
        >
        <Image src={sun} alt="sun icon" className={styles.icons} />
        </motion.div>
        <motion.div
        className={styles.back}
        transition={{ duration: 0.7 }}
        animate={{ rotateY: theme === "dark" ? 0 : 180 }}
        >
          
        <Image src={moon} alt="moon icon" className={styles.icons} />
        </motion.div>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            id="checkbox"
            defaultChecked={theme === 'dark'}
            onChange={changeHandler}
            className={styles.input}
          />
          <div className={styles.div}></div>
        </label>
        
      </div>
    </>
  );
}

function ThemeTabs() {
  return (
    <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Tab />
    </AppThemeProvider>
  );
}

export default ThemeTabs;
