# Motion Card Navigation Guide

This guide covers the key concepts and patterns for building your card-based navigation with Motion (the new standalone animation library from Framer) and Next.js App Router.

> **Note:** This project uses the new `motion` package instead of the legacy `framer-motion`. All imports use `motion/react`.

## 🎯 Core Concepts

### 1. 3D Transforms with Perspective

For 3D card effects, you need two key CSS properties:

```css
/* Parent container */
.container {
  perspective: 1000px; /* Sets viewing distance (lower = more dramatic) */
}

/* Child elements */
.card {
  transform-style: preserve-3d; /* Enables 3D space for children */
}
```

**In Motion:**
```tsx
<motion.div
  style={{
    transformStyle: "preserve-3d"
  }}
  animate={{
    rotateY: 180,  // Rotate around Y axis
    rotateX: 45,   // Rotate around X axis
    rotateZ: 30,   // Rotate around Z axis
  }}
/>
```

---

### 2. Animation States

Framer Motion provides several states for interactive animations:

```tsx
<motion.div
  // Initial state (on mount)
  initial={{ opacity: 0, y: 100 }}

  // Normal state
  animate={{ opacity: 1, y: 0 }}

  // On hover
  whileHover={{ scale: 1.1, y: -20 }}

  // While clicking/tapping
  whileTap={{ scale: 0.95 }}

  // On unmount (requires AnimatePresence)
  exit={{ opacity: 0, y: -100 }}
/>
```

---

### 3. Spring Physics

Spring animations feel more natural than linear/easing:

```tsx
transition={{
  type: "spring",
  stiffness: 300,  // Higher = faster/snappier
  damping: 20,     // Higher = less bounce
  mass: 1,         // Higher = slower/heavier
}}
```

**Quick reference:**
- **Snappy UI elements**: stiffness: 400, damping: 30
- **Natural movement**: stiffness: 300, damping: 25
- **Bouncy/playful**: stiffness: 200, damping: 15

---

### 4. Route Transitions with Next.js App Router

**The Challenge:**
- Next.js App Router doesn't provide built-in page transitions
- You need to coordinate animations with route changes

**The Solution:**
1. Use `AnimatePresence` to enable exit animations
2. Use `usePathname()` to detect route changes
3. Use pathname as `key` to trigger re-animation

```tsx
"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // CRITICAL: triggers animation on route change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 🎴 Card Navigation Implementation Strategy

### Phase 1: Build the Card Component
1. Create a single card with front/back faces
2. Add 3D flip animation on click
3. Style with CSS Modules or Tailwind
4. Test hover and click interactions

### Phase 2: Build the Card Fan Layout
1. Create array of cards (navigation items)
2. Position cards in a fan spread using rotation
3. Add stagger animation when fan opens
4. Implement hover effect (card pops out)

### Phase 3: Connect to Routing
1. Add click handler to each card
2. Trigger card "play" animation
3. Navigate to route using `useRouter()`
4. Coordinate with page transition

### Phase 4: Polish & Performance
1. Add loading states
2. Optimize with `layoutId` for shared element transitions
3. Add gesture controls (swipe, drag)
4. Ensure mobile responsiveness

---

## 🔑 Key Patterns for Your Project

### Card Fan Spread
```tsx
const cards = ["About", "Work", "Skills", "Contact"];

{cards.map((card, index) => (
  <motion.div
    key={card}
    animate={{
      rotate: (index - cards.length / 2) * 15,  // Fan spread
      x: (index - cards.length / 2) * 30,
    }}
    whileHover={{
      y: -40,  // Card lifts when hovered
      scale: 1.1,
      zIndex: 10,
    }}
    style={{
      transformOrigin: "bottom center",  // Rotate from bottom
    }}
  >
    {card}
  </motion.div>
))}
```

### Coordinated Card → Route Animation
```tsx
const [playingCard, setPlayingCard] = useState<string | null>(null);
const router = useRouter();

const handleCardClick = async (route: string) => {
  // 1. Start card animation
  setPlayingCard(route);

  // 2. Wait for animation to reach midpoint
  await new Promise(resolve => setTimeout(resolve, 400));

  // 3. Navigate (triggers page transition)
  router.push(route);

  // 4. Reset after navigation
  setTimeout(() => setPlayingCard(null), 600);
};
```

### Stagger Children Animation
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Delay between each child
    },
  },
};

const cardVariants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
  {cards.map(card => (
    <motion.div key={card} variants={cardVariants}>
      {card}
    </motion.div>
  ))}
</motion.div>
```

---

## 📚 Resources

- [Motion Docs](https://motion.dev/) - Official Motion documentation
- [Motion for React](https://motion.dev/docs/react-quick-start) - React-specific guide
- [Animation Variants](https://motion.dev/docs/react-variants) - Using variants pattern
- [Gestures](https://motion.dev/docs/react-gestures) - Interactive animations
- [AnimatePresence](https://motion.dev/docs/react-animate-presence) - Exit animations

---

## 🚀 Next Steps

1. **Explore the examples** - Run `pnpm dev` and interact with the card examples
2. **Experiment** - Modify the transition values and see what feels best
3. **Build your card component** - Start with a single card, get it working perfectly
4. **Expand to navigation** - Add multiple cards and routing logic
5. **Polish** - Add mobile responsiveness and edge case handling

Good luck! Remember: start simple, get it working, then make it beautiful.
