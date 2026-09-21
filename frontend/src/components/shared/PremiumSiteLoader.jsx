import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "../../assets/styles/premium-site-loader.css";

/* ------------------------------------------------------------------
   Premium site loader — a seed sprouting into a leaf while the
   wordmark reveals letter by letter, with a soft progress line.
   ~2.6s total, then a graceful curtain-lift exit. Reduced-motion
   aware: shows a simple fade instead of the choreography.
------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];
const WORD = "SmritiCare".split("");
const CARE = "Care".split("");

function Sprout({ reduce }) {
  return (
    <svg
      className="psl-sprout"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {/* Pot / soil */}
      <motion.path
        className="psl-sprout-soil"
        d="M38 96 H82"
        strokeLinecap="round"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={reduce ? undefined : { pathLength: 1, opacity: 0.55 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      />
      {/* Stem grows upward */}
      <motion.path
        className="psl-sprout-stem"
        d="M60 96 C60 78 60 62 60 40"
        strokeLinecap="round"
        initial={reduce ? undefined : { pathLength: 0 }}
        animate={reduce ? undefined : { pathLength: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: EASE }}
      />
      {/* Leaves unfurl */}
      <motion.path
        className="psl-sprout-leaf"
        d="M60 62 C48 58 40 48 42 36 C54 38 62 48 60 62 Z"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
      />
      <motion.path
        className="psl-sprout-leaf psl-sprout-leaf--right"
        d="M60 52 C72 48 80 38 78 26 C66 28 58 38 60 52 Z"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
      />
      {/* A little sparkle when it finishes blooming */}
      <motion.span
        className="psl-sprout-bloom"
        initial={reduce ? undefined : { scale: 0, opacity: 0 }}
        animate={
          reduce ? undefined : { scale: [0, 1.25, 1], opacity: [0, 1, 0.9] }
        }
        transition={{ duration: 0.7, delay: 1.75, ease: EASE }}
      />
    </svg>
  );
}

export default function PremiumSiteLoader({ show = true, onSkip }) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="psl"
          role="status"
          aria-label="Loading SmritiCare"
          initial={reduce ? { opacity: 0 } : { opacity: 1 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1 }}
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.4 } }
              : {
                  clipPath: "inset(0 0 100% 0)",
                  opacity: 0.9,
                  transition: { duration: 0.9, ease: EASE, delay: 0.1 },
                }
          }
          onClick={onSkip}
        >
          <span className="psl-orb psl-orb--one" aria-hidden="true" />
          <span className="psl-orb psl-orb--two" aria-hidden="true" />

          <div className="psl-inner">
            <Sprout reduce={reduce} />

            <h2 className="psl-word" aria-label="SmritiCare">
              {WORD.map((letter, i) => (
                <motion.span
                  key={i}
                  className={i >= 6 ? "psl-word-accent" : undefined}
                  initial={reduce ? undefined : { y: "110%", opacity: 0 }}
                  animate={reduce ? undefined : { y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.055,
                    ease: EASE,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h2>

            <motion.p
              className="psl-tagline"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
            >
              Good things start small.
            </motion.p>

            {/* Progress line that fills as the loader completes */}
            <div className="psl-progress" aria-hidden="true">
              <motion.span
                className="psl-progress-fill"
                initial={reduce ? { width: "100%" } : { scaleX: 0 }}
                animate={reduce ? undefined : { scaleX: 1 }}
                transition={{ duration: 2.2, delay: 0.2, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Radial rings breathing behind the mark */}
          <motion.span
            className="psl-ring"
            aria-hidden="true"
            initial={reduce ? undefined : { scale: 0.7, opacity: 0 }}
            animate={reduce ? undefined : { scale: 1, opacity: [0, 0.6, 0.25] }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
