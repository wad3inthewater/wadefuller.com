"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * Route Transition Pattern for Next.js App Router
 *
 * IMPORTANT CONCEPTS:
 * 1. AnimatePresence - Required for exit animations
 * 2. usePathname() - Hook to detect route changes
 * 3. key prop - Must change when route changes to trigger animation
 * 4. mode="wait" - Wait for exit animation before entering new route
 *
 * HOW TO USE IN YOUR LAYOUT:
 * Wrap your {children} with this component in app/layout.tsx
 */

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Key must be pathname so animation triggers on route change */}
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Page Transition Variants
 * These define the animation states for route changes
 */
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.05,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/**
 * CARD-SPECIFIC TRANSITION PATTERN
 *
 * For your card navigation, you'll want a custom transition
 * that coordinates with the card animation. Here's the pattern:
 */

export function CardPageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={cardPageVariants}
        transition={cardPageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Card-Based Transition Variants
 * Simulates a card "flying in" and settling into place
 */
const cardPageVariants = {
  initial: {
    // Start from bottom center (where card hand would be)
    y: "100vh",
    rotateX: 45,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    // Fly up to center and flatten
    y: 0,
    rotateX: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    // Fade out and slide slightly
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
};

const cardPageTransition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
};

/**
 * ADVANCED PATTERN: Coordinated Card + Route Animation
 *
 * For your use case, you'll want:
 * 1. Card click triggers animation state
 * 2. Card animates to center/top
 * 3. THEN navigate to new route
 * 4. New content fades in as card settles
 *
 * Example pattern:
 *
 * const handleCardClick = async (route: string) => {
 *   // 1. Trigger card animation state
 *   setAnimatingCard(route);
 *
 *   // 2. Wait for card to reach destination
 *   await new Promise(resolve => setTimeout(resolve, 600));
 *
 *   // 3. Navigate (this triggers PageTransition)
 *   router.push(route);
 *
 *   // 4. Reset card state
 *   setAnimatingCard(null);
 * };
 */
