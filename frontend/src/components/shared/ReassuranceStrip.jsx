import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "../common/ui.jsx";
import "../../assets/styles/reassurance-strip.css";

const ITEMS = [
  {
    icon: "HeartHandshake",
    title: "Designed with care,",
    subtitle: "for every age",
    accent: "sage",
  },
  {
    icon: "Sprout",
    title: "No pressure.",
    subtitle: "Just little moments of joy.",
    accent: "peach",
  },
  {
    icon: "ShieldCheck",
    title: "Your pace.",
    subtitle: "Your space.",
    accent: "lavender",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export default function ReassuranceStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="reassurance-premium" aria-label="Our promises to you">
      {/* Soft floating background orbs */}
      <span
        className="reassurance-premium__orb reassurance-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="reassurance-premium__orb reassurance-premium__orb--2"
        aria-hidden="true"
      />
      <span
        className="reassurance-premium__orb reassurance-premium__orb--3"
        aria-hidden="true"
      />

      <motion.div
        className="reassurance-premium__container"
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.3 }}
      >
        {ITEMS.map((item, index) => (
          <React.Fragment key={item.title}>
            <motion.article
              className={`reassurance-premium__card reassurance-premium__card--${item.accent}`}
              variants={shouldReduceMotion ? undefined : itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            >
              <span className="reassurance-premium__icon-wrap">
                <span
                  className="reassurance-premium__icon-halo"
                  aria-hidden="true"
                />
                <motion.span
                  className="reassurance-premium__icon"
                  animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon name={item.icon} size={22} />
                </motion.span>
              </span>

              <div className="reassurance-premium__copy">
                <p className="reassurance-premium__title">{item.title}</p>
                <p className="reassurance-premium__subtitle">{item.subtitle}</p>
              </div>

              <span className="reassurance-premium__sparkle" aria-hidden="true">
                ✦
              </span>
            </motion.article>

            {index < ITEMS.length - 1 && (
              <span
                className="reassurance-premium__divider"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
