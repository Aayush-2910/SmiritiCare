import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../../assets/styles/premium-benefits.css";

/* ---------------------------------------------------------------
   Custom SVG illustrations — one per benefit.
   Hand-drawn, brand-tinted, no external assets needed.
---------------------------------------------------------------- */

function MindIllustration() {
  return (
    <svg viewBox="0 0 220 160" role="img" aria-label="A calm, active mind">
      <defs>
        <linearGradient id="pb-mind-1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b9d0c0" />
          <stop offset="100%" stopColor="#8fb59d" />
        </linearGradient>
        <linearGradient id="pb-mind-2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e9f0eb" />
        </linearGradient>
      </defs>

      {/* Head silhouette */}
      <path
        d="M110 24c-34 0-58 26-58 60 0 18 6 34 18 46l-6 20h92l-6-20c12-12 18-28 18-46 0-34-24-60-58-60Z"
        fill="url(#pb-mind-1)"
        opacity="0.9"
      />
      {/* Inner brain shape */}
      <path
        d="M90 60c-8 0-14 6-14 14 0 4 2 8 4 10-3 3-5 7-5 12 0 8 6 14 14 14 3 0 6-1 8-2 2 3 5 5 9 5s7-2 9-5c2 1 5 2 8 2 8 0 14-6 14-14 0-5-2-9-5-12 2-2 4-6 4-10 0-8-6-14-14-14-3 0-5 1-8 2-2-3-5-5-9-5s-7 2-9 5c-3-1-5-2-8-2Z"
        fill="url(#pb-mind-2)"
      />
      {/* Puzzle piece */}
      <path
        d="M104 78h10v6h6v10h-6v6h-10v-6h-6V84h6v-6Z"
        fill="#8fb59d"
        opacity="0.75"
      />

      {/* Sparkles */}
      <g fill="#f0b27a">
        <path d="M52 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
        <path d="M172 56l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" opacity="0.85" />
        <path d="M156 30l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z" opacity="0.7" />
      </g>
    </svg>
  );
}

function FamilyIllustration() {
  return (
    <svg viewBox="0 0 220 160" role="img" aria-label="Staying close together">
      <defs>
        <linearGradient id="pb-fam-1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6c9a4" />
          <stop offset="100%" stopColor="#e89a5a" />
        </linearGradient>
        <linearGradient id="pb-fam-2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe7d1" />
          <stop offset="100%" stopColor="#f0b27a" />
        </linearGradient>
      </defs>

      {/* Two overlapping hearts */}
      <path
        d="M78 82c0-14 12-24 26-24s26 10 26 24c0 20-26 40-26 40S78 102 78 82Z"
        fill="url(#pb-fam-1)"
      />
      <path
        d="M118 92c0-12 10-20 22-20s22 8 22 20c0 17-22 34-22 34s-22-17-22-34Z"
        fill="url(#pb-fam-2)"
        opacity="0.95"
      />

      {/* Connection curve */}
      <path
        d="M30 108c40 20 120 20 160 0"
        stroke="#8fb59d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 8"
        fill="none"
      />

      {/* Connection dots */}
      <g fill="#2f6b4f">
        <circle cx="30" cy="108" r="4" />
        <circle cx="190" cy="108" r="4" />
        <circle cx="110" cy="118" r="5" />
      </g>

      {/* Sparkles */}
      <g fill="#e89a5a" opacity="0.75">
        <path d="M50 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
        <path d="M176 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
      </g>
    </svg>
  );
}

function MemoriesIllustration() {
  return (
    <svg viewBox="0 0 220 160" role="img" aria-label="Photos with a home">
      <defs>
        <linearGradient id="pb-mem-1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe2b8" />
          <stop offset="100%" stopColor="#e7b96a" />
        </linearGradient>
        <linearGradient id="pb-mem-2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff9ee" />
          <stop offset="100%" stopColor="#f5e7cd" />
        </linearGradient>
      </defs>

      {/* Back polaroid */}
      <g transform="rotate(-8 110 90)">
        <rect
          x="58"
          y="46"
          width="88"
          height="104"
          rx="8"
          fill="url(#pb-mem-2)"
        />
        <rect
          x="66"
          y="54"
          width="72"
          height="72"
          rx="4"
          fill="url(#pb-mem-1)"
          opacity="0.55"
        />
      </g>

      {/* Front polaroid */}
      <g transform="rotate(7 110 90)">
        <rect x="80" y="38" width="90" height="108" rx="8" fill="#ffffff" />
        <rect
          x="88"
          y="46"
          width="74"
          height="76"
          rx="4"
          fill="url(#pb-mem-1)"
        />
        {/* Tiny scene inside */}
        <circle cx="118" cy="74" r="9" fill="#fff6e5" opacity="0.9" />
        <path
          d="M96 116l14-20 12 14 10-12 22 24H96Z"
          fill="#8fb59d"
          opacity="0.55"
        />
        {/* Little heart */}
        <path
          d="M148 122c0-3 3-5 5-5 1 0 3 1 3 3 0 3-4 5-8 8-4-3-8-5-8-8 0-2 2-3 3-3 2 0 5 2 5 5Z"
          fill="#e89a5a"
        />
      </g>

      {/* Sparkle */}
      <g fill="#e89a5a" opacity="0.85">
        <path d="M52 32l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
      </g>
    </svg>
  );
}

function GrowthIllustration() {
  return (
    <svg viewBox="0 0 220 160" role="img" aria-label="Small habits growing">
      <defs>
        <linearGradient id="pb-grow-1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#cfc3e8" />
          <stop offset="100%" stopColor="#a894d4" />
        </linearGradient>
        <linearGradient id="pb-grow-2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9dc3a8" />
          <stop offset="100%" stopColor="#6fa079" />
        </linearGradient>
      </defs>

      {/* Sun */}
      <circle cx="164" cy="40" r="14" fill="#f0b27a" opacity="0.9" />
      <g stroke="#f0b27a" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
        <path d="M164 18v6M164 56v6M142 40h6M180 40h6M149 25l4 4M179 55l-4-4M149 55l4-4M179 25l-4 4" />
      </g>

      {/* Soil / pot */}
      <path
        d="M70 118h80l-6 24c-1 4-4 6-8 6H84c-4 0-7-2-8-6l-6-24Z"
        fill="url(#pb-grow-1)"
      />

      {/* Stem */}
      <path
        d="M110 118V76"
        stroke="url(#pb-grow-2)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M110 96c-14-6-28 0-30 14 14 4 28-2 30-14Z"
        fill="url(#pb-grow-2)"
      />
      <path
        d="M110 84c14-6 28 0 30 14-14 4-28-2-30-14Z"
        fill="url(#pb-grow-2)"
        opacity="0.85"
      />

      {/* Top bud */}
      <circle cx="110" cy="72" r="7" fill="#a894d4" />
      <circle cx="110" cy="72" r="3" fill="#fff" opacity="0.75" />

      {/* Sparkle */}
      <g fill="#a894d4" opacity="0.8">
        <path d="M58 60l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Benefit definitions
---------------------------------------------------------------- */

const BENEFITS = [
  {
    id: "mind",
    accent: "sage",
    tag: "01 · Mind",
    title: "A gently active mind",
    text: "Enjoy thoughtful little games that make remembering and focusing feel like play.",
    Illustration: MindIllustration,
  },
  {
    id: "heart",
    accent: "peach",
    tag: "02 · Connection",
    title: "Closer, even from afar",
    text: "Keep your favorite people close through photos, messages, and shared moments.",
    Illustration: FamilyIllustration,
  },
  {
    id: "memories",
    accent: "amber",
    tag: "03 · Memories",
    title: "Memories with a home",
    text: "Turn your precious photographs and stories into an album full of life.",
    Illustration: MemoriesIllustration,
  },
  {
    id: "grow",
    accent: "lavender",
    tag: "04 · Growth",
    title: "Small habits. Real joy.",
    text: "Find your rhythm with gentle routines and a garden that grows along with you.",
    Illustration: GrowthIllustration,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 170, damping: 22 },
  },
};

export default function PremiumBenefits() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="benefit-premium"
      id="about"
      aria-labelledby="benefit-premium-title"
    >
      {/* Ambient background orbs */}
      <span
        className="benefit-premium__orb benefit-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="benefit-premium__orb benefit-premium__orb--2"
        aria-hidden="true"
      />
      <span
        className="benefit-premium__orb benefit-premium__orb--3"
        aria-hidden="true"
      />

      <div className="benefit-premium__inner">
        {/* ---------------- Heading ---------------- */}
        <motion.div
          className="benefit-premium__heading"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="benefit-premium__eyebrow">
            <span className="benefit-premium__eyebrow-dot" aria-hidden="true" />
            A LITTLE OF WHAT MATTERS MOST
          </p>

          <h2 id="benefit-premium-title" className="benefit-premium__title">
            More than an activity.
            <br />A little something to{" "}
            <span className="benefit-premium__accent">look forward to.</span>
          </h2>

          <span className="benefit-premium__divider" aria-hidden="true">
            <i />
            <em>✦</em>
            <i />
          </span>

          <p className="benefit-premium__lede">
            Life feels richer when we remember, connect, and keep growing.
          </p>
        </motion.div>

        {/* ---------------- Grid ---------------- */}
        <motion.div
          id="features"
          className="benefit-premium__grid"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? undefined : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
        >
          {BENEFITS.map((benefit) => {
            const { Illustration } = benefit;
            return (
              <motion.article
                key={benefit.id}
                className={`benefit-premium__card benefit-premium__card--${benefit.accent}`}
                variants={shouldReduceMotion ? undefined : cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              >
                {/* Visual */}
                <div className="benefit-premium__visual">
                  <span
                    className="benefit-premium__visual-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="benefit-premium__visual-ring"
                    aria-hidden="true"
                  />
                  <motion.div
                    className="benefit-premium__illustration"
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 5 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Illustration />
                  </motion.div>

                  <span
                    className="benefit-premium__dot benefit-premium__dot--1"
                    aria-hidden="true"
                  />
                  <span
                    className="benefit-premium__dot benefit-premium__dot--2"
                    aria-hidden="true"
                  />
                </div>

                {/* Body */}
                <div className="benefit-premium__body">
                  <span className="benefit-premium__tag">
                    <span
                      className="benefit-premium__tag-dot"
                      aria-hidden="true"
                    />
                    {benefit.tag}
                  </span>

                  <h3 className="benefit-premium__card-title">
                    {benefit.title}
                  </h3>

                  <p className="benefit-premium__card-text">{benefit.text}</p>
                </div>

                {/* Bottom accent line */}
                <span
                  className="benefit-premium__accent-line"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
