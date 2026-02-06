"use client";

import { motion } from "motion/react";
import { useState } from "react";
import styles from "./CardExample.module.css";

/**
 * Example Card Component showcasing Motion animation patterns for 3D card navigation
 *
 * Key Concepts Demonstrated:
 * 1. 3D transforms with perspective
 * 2. Hover animations
 * 3. Card flip (front/back)
 * 4. Gesture detection
 */

export default function CardExample() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.container}>
      {/* Example 1: Basic 3D Card with Hover */}
      {/* <motion.div
        className={styles.card}
        // Hover animation - card lifts and rotates slightly
        whileHover={{
          y: -20,
          rotateX: 5,
          scale: 1.05,
        }}
        // Tap animation - card presses down
        whileTap={{ scale: 0.95 }}
        // Smooth spring animation
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        // Enable 3D transforms
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <h3>Hover Me!</h3>
        <p>Basic 3D hover effect</p>
      </motion.div> */}

      {/* Example 2: Flip Card (Front/Back) */}
      {/* <motion.div
        className={styles.flipCard}
        onClick={() => setIsFlipped(!isFlipped)}
        // Rotate around Y axis for flip effect
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      > */}
        {/* Front Face */}
        {/* <div
          className={styles.cardFace}
          style={{
            // backfaceVisibility: "hidden",
            // transformOrigin: "bottom center",
          }}
        >
          <h3>Click to Flip</h3>
          <p>Front Side</p>
        </div> */}

        {/* Back Face */}
        {/* <div
          className={styles.cardFace}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <h3>Back Side</h3>
          <p>Content revealed!</p>
        </div>
      </motion.div> */}

      {/* Example 3: Card Fan Pattern (for navigation) */}
      <div className={styles.cardFan}>
        {["About", "Work", "Contact"].map((label, index) => (
          <motion.div
            key={label}
            className={styles.fanCard}
            // Initial stacked position
            initial={{
              rotate: 0,
              x: 0,
            }}
            // Animate to fan spread
            animate={{
              rotate: (index - 1) * 15, // -15deg, 0deg, 15deg
              x: (index - 1) * 30,
            }}
            // Individual hover - card "pops out"
            whileHover={{
              y: -30,
              rotate: (index - 1) * 15 - 5, // Slight tilt
              scale: 1.1,
              // zIndex: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            style={{
              transformOrigin: "bottom center",
            }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
