import { Transition, Variants } from "framer-motion";

/* =========================================================
   Global Transitions
========================================================= */

export const transitions = {
  instant: {
    duration: 0.1,
    ease: "easeOut",
  } satisfies Transition,

  fast: {
    duration: 0.15,
    ease: "easeOut",
  } satisfies Transition,

  normal: {
    duration: 0.25,
    ease: "easeOut",
  } satisfies Transition,

  slow: {
    duration: 0.4,
    ease: "easeOut",
  } satisfies Transition,

  spring: {
    type: "spring",
    stiffness: 320,
    damping: 22,
    mass: 0.8,
  } satisfies Transition,
};

/* =========================================================
   Default Viewport
========================================================= */

export const viewport = {
  once: true,
  amount: 0.2,
};

/* =========================================================
   Card Hover
========================================================= */

export const cardHover = {
  whileHover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 24px 50px rgba(0,0,0,.35)",
  },

  whileTap: {
    scale: 0.99,
  },

  transition: transitions.fast,
};

/* =========================================================
   Button Hover
========================================================= */

export const buttonHover = {
  whileHover: {
    scale: 1.02,
  },

  whileTap: {
    scale: 0.97,
  },

  transition: transitions.fast,
};

/* =========================================================
   CTA Button Hover
========================================================= */

export const ctaHover = {
  whileHover: {
    y: -2,
    scale: 1.03,
  },

  whileTap: {
    scale: 0.98,
  },

  transition: transitions.fast,
};

/* =========================================================
   Image Hover
========================================================= */

export const imageHover = {
  whileHover: {
    scale: 1.06,
  },

  transition: transitions.fast,
};

/* =========================================================
   Icon Hover
========================================================= */

export const iconHover = {
  whileHover: {
    rotate: 8,
    scale: 1.08,
  },

  transition: transitions.fast,
};

/* =========================================================
   Floating
========================================================= */

export const floating = {
  animate: {
    y: [0, -6, 0],
  },

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,
};

/* =========================================================
   Pulse
========================================================= */

export const pulse = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [1, 0.9, 1],
  },

  transition: {
    duration: 1.6,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,
};

/* =========================================================
   Glow
========================================================= */

export const glow = {
  animate: {
    opacity: [0.2, 0.5, 0.2],
  },

  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,
};

/* =========================================================
   Live Dot
========================================================= */

export const liveDot = {
  animate: {
    scale: [1, 1.6, 1],
    opacity: [1, 0.4, 1],
  },

  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  } satisfies Transition,
};

/* =========================================================
   Fade In
========================================================= */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: transitions.normal,
  },
};

/* =========================================================
   Fade Up
========================================================= */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: transitions.normal,
  },
};

/* =========================================================
   Fade Down
========================================================= */

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: transitions.normal,
  },
};

/* =========================================================
   Fade Left
========================================================= */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: transitions.normal,
  },
};

/* =========================================================
   Fade Right
========================================================= */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: transitions.normal,
  },
};

/* =========================================================
   Scale In
========================================================= */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: transitions.spring,
  },
};

/* =========================================================
   Stagger Container
========================================================= */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   Stagger Item
========================================================= */

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: transitions.fast,
  },
};