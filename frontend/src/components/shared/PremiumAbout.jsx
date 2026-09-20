import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "../common/ui.jsx";
import { images } from "../../data/images.js";
import "../../assets/styles/premium-about.css";

/* ------------------------------------------------------------------
   Premium "About" — orbiting feature diagram: left copy column,
   central image, and four floating cards (Memory · Reminders ·
   Stories · Daily Routine) connected by animated hairlines.
   Keeps the #about anchor id used by the nav.
------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const FEATURES = [
  {
    id: "memory",
    icon: "Brain",
    title: "Memory",
    text: "Recall, match, and reconnect with your past.",
    area: "pa-card--tl",
    iconClass: "pa-card__icon--peach",
  },
  {
    id: "reminders",
    icon: "Bell",
    title: "Reminders",
    text: "Never miss what matters.",
    area: "pa-card--tr",
    iconClass: "pa-card__icon--sage",
  },
  {
    id: "stories",
    icon: "BookOpen",
    title: "Stories",
    text: "Share your life, keep it alive.",
    area: "pa-card--bl",
    iconClass: "pa-card__icon--lav",
  },
  {
    id: "routine",
    icon: "CalendarDays",
    title: "Daily Routine",
    text: "Build healthy habits, step by step.",
    area: "pa-card--br",
    iconClass: "pa-card__icon--sage",
  },
];

export default function PremiumAbout() {
  const shouldReduceMotion = useReducedMotion();

  const cardMotion = (i) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26, scale: 0.96 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.75, delay: 0.35 + i * 0.14, ease: EASE },
        };

  return (
    <section className="pa" id="about" aria-labelledby="pa-title">
      <span className="pa-orb pa-orb--1" aria-hidden="true" />
      <span className="pa-orb pa-orb--2" aria-hidden="true" />

      <div className="pa-inner">
        {/* ---------- Left copy column ---------- */}
        <div className="pa-copy">
          <motion.p className="pa-eyebrow" {...fadeUp(0)}>
            <span className="pa-eyebrow-dot" aria-hidden="true" />
            How it helps
          </motion.p>

          <motion.h2 id="pa-title" className="pa-title" {...fadeUp(0.08)}>
            Small Activities.
            <br />
            <span className="pa-title-accent">Big Differences.</span>
          </motion.h2>

          <motion.p className="pa-lede" {...fadeUp(0.16)}>
            SmritiCare uses proven cognitive activities and gentle routines to
            support memory, focus and emotional well-being.
          </motion.p>

          <motion.div {...fadeUp(0.24)}>
            <a className="pa-link" href="#/how-it-works">
              Learn more
              <motion.span
                className="pa-link-arrow"
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon name="ArrowRight" size={16} />
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* ---------- Right: central visual + orbiting cards ---------- */}
        <div className="pa-visual">
          {/* Central image */}
          <motion.div
            className="pa-center"
            initial={
              shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }
            }
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div className="pa-center-halo" aria-hidden="true" />
            <motion.img
              src={images.hero}
              alt="A family sharing a joyful moment together"
              loading="lazy"
              decoding="async"
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Decorative leaves */}
          <span className="pa-leaf pa-leaf--1" aria-hidden="true">
            🌿
          </span>
          <span className="pa-leaf pa-leaf--2" aria-hidden="true">
            🍃
          </span>

          {/* Animated connector lines */}
          <svg
            className="pa-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="pa-line pa-line--tl"
              d="M30 22 C 38 34, 42 40, 46 46"
            />
            <path
              className="pa-line pa-line--tr"
              d="M70 22 C 62 34, 58 40, 54 46"
            />
            <path
              className="pa-line pa-line--bl"
              d="M30 78 C 38 66, 42 60, 46 54"
            />
            <path
              className="pa-line pa-line--br"
              d="M70 78 C 62 66, 58 60, 54 54"
            />
          </svg>

          {/* Floating feature cards */}
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.id}
              className={`pa-card ${f.area}`}
              {...cardMotion(i)}
            >
              <span className={`pa-card__icon ${f.iconClass}`}>
                <Icon name={f.icon} size={20} />
              </span>
              <span className="pa-card__body">
                <strong className="pa-card__title">{f.title}</strong>
                <span className="pa-card__text">{f.text}</span>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
