import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../common/ui.jsx";
import "../../assets/styles/premium-how-it-works.css";

/* ----------------------------------------------------------------
   Custom illustrations for each step — small, thematic, brand-tinted
---------------------------------------------------------------- */

function RememberIllustration() {
  return (
    <svg viewBox="0 0 140 120" role="img" aria-label="A familiar memory">
      <defs>
        <linearGradient id="hiw-rem-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#f0e2c6" />
        </linearGradient>
        <linearGradient id="hiw-rem-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b9d0c0" />
          <stop offset="100%" stopColor="#8fb59d" />
        </linearGradient>
      </defs>
      {/* Photo card */}
      <rect
        x="22"
        y="18"
        width="96"
        height="84"
        rx="10"
        fill="url(#hiw-rem-a)"
        stroke="#e3d3b3"
      />
      {/* Inner frame */}
      <rect
        x="30"
        y="26"
        width="80"
        height="60"
        rx="6"
        fill="url(#hiw-rem-b)"
        opacity="0.5"
      />
      {/* Little face */}
      <circle cx="70" cy="52" r="12" fill="#f7dcc0" />
      <circle cx="65" cy="50" r="1.4" fill="#3f2d24" />
      <circle cx="75" cy="50" r="1.4" fill="#3f2d24" />
      <path
        d="M65 58c3 3 7 3 10 0"
        stroke="#a35d4a"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* caption line */}
      <rect x="42" y="96" width="56" height="3" rx="1.5" fill="#e3d3b3" />
      {/* sparkle */}
      <path
        d="M116 22l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4 1.4-3.6Z"
        fill="#f0b27a"
      />
    </svg>
  );
}

function PlayIllustration() {
  return (
    <svg viewBox="0 0 140 120" role="img" aria-label="A playful puzzle piece">
      <defs>
        <linearGradient id="hiw-play-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe7d1" />
          <stop offset="100%" stopColor="#f0b27a" />
        </linearGradient>
        <linearGradient id="hiw-play-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fbe6c9" />
          <stop offset="100%" stopColor="#e89a5a" />
        </linearGradient>
      </defs>
      {/* Two overlapping puzzle pieces */}
      <path
        d="M28 42h22v-8c0-6 8-6 8 0v8h22v22h8c6 0 6 8 0 8h-8v22H58v-8c0-6-8-6-8 0v8H28V72h8c6 0 6-8 0-8h-8V42Z"
        fill="url(#hiw-play-a)"
        stroke="#e89a5a"
        strokeWidth="0.5"
      />
      <path
        d="M62 54h18v-6c0-5 6-5 6 0v6h18v18h6c5 0 5 6 0 6h-6v18H86v-6c0-5-6-5-6 0v6H62V78h6c5 0 5-6 0-6h-6V54Z"
        fill="url(#hiw-play-b)"
        opacity="0.85"
      />
      {/* sparkles */}
      <g fill="#e89a5a" opacity="0.8">
        <path d="M22 22l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" />
        <path d="M118 96l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" />
      </g>
    </svg>
  );
}

function ConnectIllustration() {
  return (
    <svg
      viewBox="0 0 140 120"
      role="img"
      aria-label="Talking with someone you love"
    >
      <defs>
        <linearGradient id="hiw-con-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e6dcf5" />
          <stop offset="100%" stopColor="#c4b5e0" />
        </linearGradient>
        <linearGradient id="hiw-con-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#d1e3d6" />
          <stop offset="100%" stopColor="#8fb59d" />
        </linearGradient>
      </defs>
      {/* Speech bubble 1 */}
      <path
        d="M20 30h60c5 0 8 3 8 8v26c0 5-3 8-8 8H46l-14 12V72H20c-5 0-8-3-8-8V38c0-5 3-8 8-8Z"
        fill="url(#hiw-con-a)"
      />
      {/* Speech bubble 2 */}
      <path
        d="M74 54h50c5 0 8 3 8 8v22c0 5-3 8-8 8h-14v12l-14-12H74c-5 0-8-3-8-8V62c0-5 3-8 8-8Z"
        fill="url(#hiw-con-b)"
        opacity="0.92"
      />
      {/* Hearts inside bubbles */}
      <path
        d="M46 48c0-3 3-5 5-5 1 0 3 1 3 3 0 3-4 6-8 9-4-3-8-6-8-9 0-2 2-3 3-3 2 0 5 2 5 5Z"
        fill="#fff"
        opacity="0.9"
      />
      <path
        d="M100 78c0-2.5 2.5-4 4-4 1 0 2.5 1 2.5 2.5 0 2.5-3 4.5-6.5 7-3.5-2.5-6.5-4.5-6.5-7 0-1.5 1.5-2.5 2.5-2.5 1.5 0 4 1.5 4 4Z"
        fill="#fff"
        opacity="0.85"
      />
      {/* sparkle */}
      <g fill="#f0b27a" opacity="0.85">
        <path d="M126 30l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" />
      </g>
    </svg>
  );
}

function GrowIllustration() {
  return (
    <svg
      viewBox="0 0 140 120"
      role="img"
      aria-label="Watching your garden bloom"
    >
      <defs>
        <linearGradient id="hiw-grow-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b9d0c0" />
          <stop offset="100%" stopColor="#6fa079" />
        </linearGradient>
        <linearGradient id="hiw-grow-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fbe1e9" />
          <stop offset="100%" stopColor="#e9a7b8" />
        </linearGradient>
      </defs>
      {/* Sun */}
      <circle cx="112" cy="26" r="10" fill="#f0b27a" opacity="0.9" />
      <g stroke="#f0b27a" strokeWidth="1.8" strokeLinecap="round" opacity="0.7">
        <path d="M112 10v5M112 42v-5M128 26h-5M101 26h5M123 15l-3.5 3.5M104 34l-3.5 3.5M123 37l-3.5-3.5M104 18l-3.5-3.5" />
      </g>
      {/* Soil */}
      <path
        d="M28 96h84l-4 14c-1 3-3 4-6 4H38c-3 0-5-1-6-4l-4-14Z"
        fill="#8fb59d"
        opacity="0.85"
      />
      {/* Stem */}
      <path
        d="M70 96V58"
        stroke="url(#hiw-grow-a)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaves */}
      <path
        d="M70 78c-10-4-20 0-22 10 10 2 20-2 22-10Z"
        fill="url(#hiw-grow-a)"
      />
      <path
        d="M70 68c10-4 20 0 22 10-10 2-20-2-22-10Z"
        fill="url(#hiw-grow-a)"
        opacity="0.85"
      />
      {/* Flower */}
      <g>
        <circle cx="70" cy="52" r="5" fill="url(#hiw-grow-b)" />
        <circle cx="70" cy="45" r="5" fill="url(#hiw-grow-b)" />
        <circle cx="77" cy="52" r="5" fill="url(#hiw-grow-b)" />
        <circle cx="63" cy="52" r="5" fill="url(#hiw-grow-b)" />
        <circle cx="70" cy="59" r="5" fill="url(#hiw-grow-b)" />
        <circle cx="70" cy="52" r="3" fill="#fff" opacity="0.9" />
      </g>
      {/* sparkle */}
      <g fill="#e9a7b8" opacity="0.85">
        <path d="M28 26l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3Z" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Steps
---------------------------------------------------------------- */

const STEPS = [
  {
    id: "remember",
    number: "01",
    title: "Remember",
    text: "Revisit a familiar face or a favorite story.",
    accent: "sage",
    Illustration: RememberIllustration,
    align: "top",
  },
  {
    id: "play",
    number: "02",
    title: "Play",
    text: "Enjoy a little activity at your own pace.",
    accent: "peach",
    Illustration: PlayIllustration,
    align: "bottom",
  },
  {
    id: "connect",
    number: "03",
    title: "Connect",
    text: "Share a smile with someone you love.",
    accent: "lavender",
    Illustration: ConnectIllustration,
    align: "top",
  },
  {
    id: "grow",
    number: "04",
    title: "Grow",
    text: "Watch your little memory garden bloom.",
    accent: "sage",
    Illustration: GrowIllustration,
    align: "bottom",
  },
];

/* ----------------------------------------------------------------
   Component
---------------------------------------------------------------- */

export default function PremiumHowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="how-premium"
      id="how-it-works"
      aria-labelledby="how-premium-title"
    >
      {/* Ambient background orbs */}
      <span
        className="how-premium__orb how-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="how-premium__orb how-premium__orb--2"
        aria-hidden="true"
      />
      <span
        className="how-premium__orb how-premium__orb--3"
        aria-hidden="true"
      />

      <div className="how-premium__inner">
        {/* ---------------- Heading ---------------- */}
        <motion.div
          className="how-premium__heading"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="how-premium__eyebrow">
            <span className="how-premium__eyebrow-dot" aria-hidden="true" />
            SIMPLE BY NATURE
          </p>

          <h2 id="how-premium-title" className="how-premium__title">
            A few happy minutes.
            <br />
            <span className="how-premium__accent">A world of difference.</span>
          </h2>

          <p className="how-premium__lede">
            No complicated steps. Just a gentle rhythm that feels like you.
          </p>
        </motion.div>

        {/* ---------------- The Journey (path + cards) ---------------- */}
        <div className="how-premium__journey">
          {/* Dashed winding path — draws itself in on scroll */}
          <svg
            className="how-premium__path"
            viewBox="0 0 1000 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="how-path-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8fb59d" />
                <stop offset="50%" stopColor="#c4b5e0" />
                <stop offset="100%" stopColor="#f0b27a" />
              </linearGradient>
            </defs>

            {/* The faint trail underneath */}
            <motion.path
              d="M500 60 C 200 180, 800 260, 500 380 C 200 500, 800 580, 500 700 C 320 780, 500 830, 500 870"
              fill="none"
              stroke="#e7ded0"
              strokeWidth="3"
              strokeLinecap="round"
              initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
              whileInView={shouldReduceMotion ? undefined : { pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* The lively colored trail that draws over the faint one */}
            <motion.path
              d="M500 60 C 200 180, 800 260, 500 380 C 200 500, 800 580, 500 700 C 320 780, 500 830, 500 870"
              fill="none"
              stroke="url(#how-path-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="3 9"
              initial={
                shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                pathLength: { duration: 2.2, ease: "easeInOut", delay: 0.1 },
                opacity: { duration: 0.4 },
              }}
            />
          </svg>

          {/* Step cards */}
          <ol className="how-premium__steps">
            {STEPS.map((step, index) => {
              const { Illustration } = step;
              const fromLeft = index % 2 === 0;

              return (
                <motion.li
                  key={step.id}
                  className={`how-premium__step how-premium__step--${step.accent} how-premium__step--${
                    fromLeft ? "left" : "right"
                  }`}
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          x: fromLeft ? -40 : 40,
                          y: 20,
                        }
                  }
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 22,
                    delay: index * 0.12,
                  }}
                >
                  {/* Node badge on the path */}
                  <span className="how-premium__node" aria-hidden="true">
                    <span className="how-premium__node-pulse" />
                    <span className="how-premium__node-dot" />
                  </span>

                  <article className="how-premium__card">
                    <div className="how-premium__visual">
                      <span
                        className="how-premium__visual-glow"
                        aria-hidden="true"
                      />
                      <motion.div
                        className="how-premium__illustration"
                        animate={
                          shouldReduceMotion ? undefined : { y: [0, -5, 0] }
                        }
                        transition={{
                          duration: 4.5 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Illustration />
                      </motion.div>
                    </div>

                    <div className="how-premium__body">
                      <span className="how-premium__number">{step.number}</span>
                      <h3 className="how-premium__card-title">{step.title}</h3>
                      <p className="how-premium__card-text">{step.text}</p>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* ---------------- CTA ---------------- */}
        <motion.div
          className="how-premium__cta"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/login" className="how-premium__cta-btn">
            <span>Find your little rhythm</span>
            <Icon name="ArrowRight" size={18} />
          </Link>
          <span className="how-premium__cta-note">
            At your pace. With a little care.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
