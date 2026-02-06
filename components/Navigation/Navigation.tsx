"use client";

import styles from "./navigation.module.css";
import { motion } from "motion/react";

export default function Navigation() {
  const navItems = [
    {
      title: "about",
    },
    {
      title: "skills",
    },
    {
      title: "interests",
    },
  ];
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.nav}
        initial={{
          bottom: -250,
        }}
        animate={{
          bottom: 0,
        }}
      >
        {navItems.map((item, index) => {
          return (
            <motion.div
              className={`${styles.foo} bg-red-500`}
              initial={{
                rotate: 0,
                x: 0,
              }}
              animate={{
                // -15deg, 0deg, 15deg
                rotate: (index - 1) * 15,
                x: (index - 1) * 100,
              }}
              key={item.title}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
