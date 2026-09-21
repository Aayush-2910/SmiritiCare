import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "../common/ui.jsx";
import { useStore } from "../../store/state.jsx";
import "../../assets/styles/premium-pricing.css";

/* ----------------------------------------------------------------
   Plan illustrations — same hand-drawn, brand-tinted SVG language
   used across the other premium sections (sage / peach / amber /
   lavender tints, no external assets).
---------------------------------------------------------------- */

function BlossomIllustration() {
  return (
    <svg viewBox="0 0 220 160" role="img" aria-label="A single sprout in bloom">
      <defs>
        <linearGradient id="pp-blossom-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b9d0c0" />
          <stop offset="100%" stopColor="#7ba58a" />
        </linearGradient>
        <linearGradient id="pp-blossom-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fbe1e9" />
          <stop offset="100%" stopColor="#e9a7b8" />
        </linearGradient>
      </defs>

      {/* Soil mound */}
      <path
        d="M46 122h128c0 14-14 22-32 22H78c-18 0-32-8-32-22Z"
        fill="#e7ded0"
        opacity="0.85"
      />

      {/* Stem */}
      <path
        d="M110 122V78"
        stroke="url(#pp-blossom-a)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Leaves */}
      <path
        d="M110 104c-16-7-32 0-35 15 16 4 32-2 35-15Z"
        fill="url(#pp-blossom-a)"
      />
      <path
        d="M110 90c16-7 32 0 35 15-16 4-32-2-35-15Z"
        fill="url(#pp-blossom-a)"
        opacity="0.82"
      />

      {/* Blossom */}
      <g>
        <circle cx="110" cy="62" r="8" fill="url(#pp-blossom-b)" />
        <circle cx="110" cy="48" r="8" fill="url(#pp-blossom-b)" />
        <circle cx="124" cy="62" r="8" fill="url(#pp-blossom-b)" />
        <circle cx="96" cy="62" r="8" fill="url(#pp-blossom-b)" />
        <circle cx="110" cy="76" r="8" fill="url(#pp-blossom-b)" />
        <circle cx="110" cy="62" r="4.5" fill="#fff" opacity="0.9" />
      </g>

      {/* Sparkles */}
      <g fill="#f0b27a" opacity="0.85">
        <path d="M52 38l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
        <path d="M172 60l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6 1.6-4Z" />
      </g>
    </svg>
  );
}

function FamilyTreeIllustration() {
  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="A family growing together"
    >
      <defs>
        <linearGradient id="pp-fam-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6c9a4" />
          <stop offset="100%" stopColor="#e08a44" />
        </linearGradient>
        <linearGradient id="pp-fam-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff9ee" />
          <stop offset="100%" stopColor="#f2e2c4" />
        </linearGradient>
      </defs>

      {/* Glow ring */}
      <circle
        cx="110"
        cy="76"
        r="58"
        fill="none"
        stroke="#f0b27a"
        strokeWidth="2"
        strokeDasharray="3 9"
        opacity="0.7"
      />

      {/* Two portraits */}
      <g transform="rotate(-7 92 74)">
        <rect
          x="56"
          y="36"
          width="74"
          height="84"
          rx="10"
          fill="url(#pp-fam-b)"
        />
        <circle cx="93" cy="66" r="14" fill="#f7dcc0" />
        <path
          d="M76 112c3-14 12-20 17-20s14 6 17 20H76Z"
          fill="url(#pp-fam-a)"
        />
      </g>

      <g transform="rotate(7 130 74)">
        <rect x="94" y="34" width="74" height="84" rx="10" fill="#ffffff" />
        <circle cx="131" cy="64" r="14" fill="#f3d3b4" />
        <path
          d="M114 110c3-14 12-20 17-20s14 6 17 20h-34Z"
          fill="url(#pp-fam-a)"
          opacity="0.88"
        />
      </g>

      {/* Little heart between them */}
      <path
        d="M110 96c0-4 4-6 6-6 2 0 5 2 5 4 0 4-6 8-11 12-5-4-11-8-11-12 0-2 3-4 5-4 2 0 6 2 6 6Z"
        fill="#e08a44"
      />

      {/* Sparkles */}
      <g fill="#2f6b4f" opacity="0.4">
        <circle cx="42" cy="42" r="4" />
        <circle cx="186" cy="102" r="4" />
        <circle cx="52" cy="118" r="3" />
      </g>
    </svg>
  );
}

function DataTableIllustration() {
  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="A private home for memories"
    >
      <defs>
        <linearGradient id="pp-web-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#a894d4" />
          <stop offset="100%" stopColor="#7b66ab" />
        </linearGradient>
        <linearGradient id="pp-web-b" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1ecfa" />
        </linearGradient>
      </defs>

      {/* Stacked plates = many accounts */}
      <ellipse
        cx="110"
        cy="122"
        rx="62"
        ry="16"
        fill="url(#pp-web-a)"
        opacity="0.35"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="62"
        ry="16"
        fill="url(#pp-web-a)"
        opacity="0.55"
      />
      <ellipse
        cx="110"
        cy="98"
        rx="62"
        ry="16"
        fill="url(#pp-web-a)"
        opacity="0.8"
      />

      {/* Browser / dashboard card */}
      <rect
        x="44"
        y="24"
        width="132"
        height="72"
        rx="12"
        fill="url(#pp-web-b)"
      />
      <rect x="44" y="24" width="132" height="20" rx="12" fill="#ded4f2" />
      <circle cx="58" cy="34" r="3.4" fill="#b7a5dc" />
      <circle cx="69" cy="34" r="3.4" fill="#c9bbe6" />
      <circle cx="80" cy="34" r="3.4" fill="#dcd2f0" />

      {/* Small bar chart */}
      <rect x="60" y="66" width="14" height="18" rx="4" fill="#c4b5e0" />
      <rect x="80" y="56" width="14" height="28" rx="4" fill="#a894d4" />
      <rect x="100" y="62" width="14" height="22" rx="4" fill="#c4b5e0" />
      <rect x="120" y="50" width="14" height="34" rx="4" fill="#8f7bc4" />

      {/* People dots (accounts) */}
      <g fill="#2f6b4f" opacity="0.55">
        <circle cx="152" cy="70" r="6" />
        <circle cx="152" cy="84" r="6" />
      </g>

      {/* Sparkle */}
      <g fill="#f0b27a" opacity="0.85">
        <path d="M186 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Plans
---------------------------------------------------------------- */

const PLANS = [
  {
    id: "blossom",
    accent: "sage",
    name: "Blossom",
    tagline: "For one special person",
    monthly: 0,
    yearly: 0,
    priceNote: "always free",
    features: [
      "Every memory game, unlocked",
      "Your personal Memory Garden",
      "A gentle daily dashboard",
      "Voice-friendly navigation",
      "Comfort settings for reading and pace",
    ],
    cta: "Start free",
    to: "/signup",
    Illustration: BlossomIllustration,
    icon: "Sprout",
  },
  {
    id: "evergreen",
    accent: "peach",
    name: "Evergreen",
    tagline: "For one person and the family who loves them",
    monthly: 399,
    yearly: 3290,
    yearlyMonthly: 274,
    priceNote: "billed yearly",
    badge: "Most loved",
    features: [
      "Everything in Blossom",
      "Family album with shared photos",
      "Voice notes and little hellos",
      "Family memory challenges",
      "Up to 6 family members invited",
      "Daily care summary for the family",
    ],
    cta: "Choose Evergreen",
    to: "/signup?plan=evergreen",
    Illustration: FamilyTreeIllustration,
    icon: "HeartHandshake",
    featured: true,
  },
  {
    id: "banayan",
    accent: "lavender",
    name: "Banyan",
    tagline: "For care homes and family circles",
    monthly: 1499,
    yearly: 11990,
    yearlyMonthly: 999,
    priceNote: "billed yearly",
    features: [
      "Everything in Evergreen",
      "Up to 5 senior profiles",
      "Unlimited family accounts",
      "Caregiver dashboard and notes",
      "Guided onboarding for staff",
      "Priority, patient support",
    ],
    cta: "Choose Banyan",
    to: "/signup?plan=banyan",
    Illustration: DataTableIllustration,
    icon: "Users",
  },
];

/* Small shared feature-comparison table */
const COMPARISON = [
  ["Every game and activity", true, true, true],
  ["Memory Garden", true, true, true],
  ["Family album & messages", false, true, true],
  ["Invited family members", "—", "Up to 6", "Unlimited"],
  ["Senior profiles", "1", "1", "Up to 5"],
  ["Caregiver dashboard", false, false, true],
  ["Priority support", false, "By email", "Priority"],
];

const REASSURANCES = [
  [
    "ShieldCheck",
    "No card needed to begin",
    "Try everything with a demo account first.",
  ],
  [
    "Users",
    "Family invited in one step",
    "Send a simple link. No app store, no setup.",
  ],
  [
    "MessageCircleQuestion",
    "Change or leave anytime",
    "Plans are monthly or yearly, never locked in.",
  ],
  [
    "Heart",
    "Made for comfort",
    "Large text, calm pace, and gentle words throughout.",
  ],
];

export default function PremiumPricing() {
  const shouldReduceMotion = useReducedMotion();
  const { notify } = useStore();
  const [billing, setBilling] = useState("monthly");
  const yearly = billing === "yearly";

  const fade = {
    initial: shouldReduceMotion ? undefined : { opacity: 0, y: 18 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
  };

  return (
    <section
      className="price-premium"
      id="pricing"
      aria-labelledby="price-premium-title"
    >
      {/* Ambient background orbs */}
      <span
        className="price-premium__orb price-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="price-premium__orb price-premium__orb--2"
        aria-hidden="true"
      />
      <span
        className="price-premium__orb price-premium__orb--3"
        aria-hidden="true"
      />

      <div className="price-premium__inner">
        {/* ---------------- Heading ---------------- */}
        <motion.div
          className="price-premium__heading"
          {...fade}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="price-premium__eyebrow">
            <span className="price-premium__eyebrow-dot" aria-hidden="true" />
            GROW AT YOUR OWN PACE
          </p>

          <h2 id="price-premium-title" className="price-premium__title">
            A plan as gentle
            <br />
            <span className="price-premium__accent">as your garden.</span>
          </h2>

          <span className="price-premium__divider" aria-hidden="true">
            <i />
            <em>✦</em>
            <i />
          </span>

          <p className="price-premium__lede">
            Start free. Add your family whenever the time feels right.
          </p>
        </motion.div>

        {/* ---------------- Billing toggle ---------------- */}
        <motion.div
          className="price-premium__toggle-wrap"
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="price-premium__toggle"
            role="group"
            aria-label="Choose a billing period"
          >
            <span
              className={`price-premium__toggle-thumb price-premium__toggle-thumb--${billing}`}
              aria-hidden="true"
            />
            <button
              type="button"
              className={!yearly ? "is-active" : ""}
              aria-pressed={!yearly}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={yearly ? "is-active" : ""}
              aria-pressed={yearly}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
          <span className="price-premium__save">
            <Icon name="Sparkles" size={15} />
            Two months on us with yearly
          </span>
        </motion.div>

        {/* ---------------- Plan cards ---------------- */}
        <div className="price-premium__grid">
          {PLANS.map((plan, index) => {
            const { Illustration } = plan;
            const amount = yearly
              ? (plan.yearlyMonthly ?? plan.yearly)
              : plan.monthly;
            const isFree = amount === 0;

            return (
              <motion.article
                key={plan.id}
                className={`price-premium__card price-premium__card--${plan.accent}${
                  plan.featured ? " is-featured" : ""
                }`}
                initial={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: 32, scale: 0.97 }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 165,
                  damping: 22,
                  delay: index * 0.1,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              >
                {plan.badge && (
                  <span className="price-premium__badge">
                    <Icon name="Heart" size={13} />
                    {plan.badge}
                  </span>
                )}

                {/* Illustration */}
                <div className="price-premium__visual">
                  <span
                    className="price-premium__visual-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="price-premium__visual-ring"
                    aria-hidden="true"
                  />
                  <motion.div
                    className="price-premium__illustration"
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{
                      duration: 5 + index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Illustration />
                  </motion.div>
                </div>

                {/* Header */}
                <div className="price-premium__card-head">
                  <span className="price-premium__plan-icon" aria-hidden="true">
                    <Icon name={plan.icon} size={19} />
                  </span>
                  <div>
                    <h3 className="price-premium__plan-name">{plan.name}</h3>
                    <p className="price-premium__plan-tagline">
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="price-premium__price">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={`${plan.id}-${billing}`}
                      className="price-premium__amount"
                      initial={
                        shouldReduceMotion ? undefined : { opacity: 0, y: 10 }
                      }
                      animate={
                        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                      }
                      exit={
                        shouldReduceMotion ? undefined : { opacity: 0, y: -10 }
                      }
                      transition={{ duration: 0.25 }}
                    >
                      {isFree ? (
                        <span className="price-premium__free">Free</span>
                      ) : (
                        <>
                          <small>₹</small>
                          {amount}
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                  {!isFree && (
                    <span className="price-premium__per">/ month</span>
                  )}
                </div>

                <p className="price-premium__price-note">
                  {isFree
                    ? "Forever. No card, no catch."
                    : yearly
                      ? `₹${plan.yearly.toLocaleString("en-IN")} ${plan.priceNote}`
                      : "Billed monthly. Cancel anytime."}
                </p>

                {/* Features */}
                <ul className="price-premium__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="price-premium__check" aria-hidden="true">
                        <Icon name="Check" size={14} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.featured ? (
                  <Link
                    to={plan.to}
                    className="price-premium__cta price-premium__cta--solid"
                  >
                    <span>{plan.cta}</span>
                    <Icon name="ArrowRight" size={18} />
                  </Link>
                ) : (
                  <Link to={plan.to} className="price-premium__cta">
                    <span>{plan.cta}</span>
                    <Icon name="ArrowRight" size={18} />
                  </Link>
                )}

                <span
                  className="price-premium__accent-line"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        {/* ---------------- Comparison (visually quiet, collapsible) ---------------- */}
        <motion.details
          className="price-premium__compare"
          {...fade}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <summary>
            <span>
              <Icon name="ListChecks" size={18} />
              See everything, side by side
            </span>
            <Icon name="Plus" size={18} />
          </summary>
          <div className="price-premium__table-wrap">
            <table className="price-premium__table">
              <caption className="price-premium__sr">
                Feature comparison across Blossom, Evergreen and Banyan plans
              </caption>
              <thead>
                <tr>
                  <th scope="col">What’s included</th>
                  {PLANS.map((plan) => (
                    <th key={plan.id} scope="col">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    {row.slice(1).map((cell, i) => (
                      <td key={`${row[0]}-${i}`}>
                        {cell === true ? (
                          <span
                            className="price-premium__yes"
                            aria-label="Included"
                          >
                            <Icon name="Check" size={15} />
                          </span>
                        ) : cell === false ? (
                          <span
                            className="price-premium__no"
                            aria-label="Not included"
                          >
                            —
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.details>

        {/* ---------------- Reassurance row ---------------- */}
        <motion.ul
          className="price-premium__reassure"
          {...fade}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {REASSURANCES.map(([icon, title, text]) => (
            <li key={title}>
              <span className="price-premium__reassure-icon" aria-hidden="true">
                <Icon name={icon} size={19} />
              </span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </motion.ul>

        {/* ---------------- Demo notice + closing CTA ---------------- */}
        <motion.div
          className="price-premium__foot"
          {...fade}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="price-premium__notice">
            <Icon name="Info" size={18} />
            <p>
              <strong>This is a frontend demo.</strong>
              <br />
              Prices are illustrative and no payment is ever taken. Choosing a
              plan just opens the demo experience.
            </p>
          </div>

          <div className="price-premium__cta-group">
            <Link
              to="/signup"
              className="price-premium__cta price-premium__cta--solid"
            >
              <span>Create your free account</span>
              <Icon name="ArrowRight" size={18} />
            </Link>
            <button
              type="button"
              className="price-premium__talk"
              onClick={() =>
                notify(
                  "We’d love to help you choose. This demo cannot send messages yet.",
                  "💬",
                )
              }
            >
              <Icon name="MessageCircleQuestion" size={17} />
              Talk it through with us
            </button>
          </div>

          <span className="price-premium__foot-note">
            Start small. Grow slowly. Nothing to rush.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
