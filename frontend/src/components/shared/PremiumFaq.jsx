import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "../common/ui.jsx";
import { useStore } from "../../store/state.jsx";
import "../../assets/styles/premium-faq.css";

const QUESTIONS = [
  [
    "Who is SmritiCare for?",
    "For older adults and the people who love them—and anyone who enjoys gentle memory activities, family stories, and small daily routines.",
    "For everyone",
  ],
  [
    "Do I need to be good with technology?",
    "Not at all. Large buttons, simple words, adjustable text, and a gentle pace help you feel at home. Explore with a demo account and take your time.",
    "A gentle beginning",
  ],
  [
    "Is SmritiCare a medical or diagnostic tool?",
    "No. SmritiCare is designed for mental engagement and family connection. Games and progress are not medical assessments, and cannot diagnose or treat any condition.",
    "Good to know",
  ],
  [
    "How can my family take part?",
    "Choose the Family demo account to share memories, send messages, and create challenges. In this prototype, the Senior and Family accounts share data on this browser only.",
    "Together is better",
  ],
  [
    "Are my memories private?",
    "This is a frontend demo. Changes are stored in this browser, with no cloud storage or real authentication. Please use sample content, not sensitive personal information.",
    "Your comfort first",
  ],
  [
    "Can I try it without signing up?",
    "Absolutely. Choose Continue as Demo User, or open any game preview. There is no payment and no real account is created.",
    "Start with a look",
  ],
];

export default function PremiumFaq() {
  const { setModal } = useStore();
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const question = QUESTIONS[active];

  return (
    <section
      className="faq-premium"
      id="faq"
      aria-labelledby="faq-premium-title"
    >
      <span
        className="faq-premium__orb faq-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="faq-premium__orb faq-premium__orb--2"
        aria-hidden="true"
      />
      <div className="faq-premium__inner">
        <motion.div
          className="faq-premium__intro"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="faq-premium__eyebrow">
            <span /> A LITTLE CLARITY
          </p>
          <h2 id="faq-premium-title">
            Questions are welcome.
            <br />
            <span>There are no silly ones.</span>
          </h2>
          <p className="faq-premium__lede">
            Everything you need to feel comfortable before you begin.
          </p>
          <div className="faq-premium__contact">
            <span className="faq-premium__contact-icon">
              <Icon name="MessageCircle" size={21} />
            </span>
            <div>
              <strong>Still wondering?</strong>
              <span>We are happy to hear from you.</span>
            </div>
            <button
              type="button"
              aria-label="Open contact form"
              onClick={() =>
                setModal({
                  title: "We’re happy to hear from you",
                  content: <ContactPrompt />,
                })
              }
            >
              <Icon name="ArrowUpRight" size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="faq-premium__panel"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: 22 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div
            className="faq-premium__list"
            role="tablist"
            aria-label="Frequently asked questions"
          >
            {QUESTIONS.map(([q, , tag], index) => (
              <button
                type="button"
                role="tab"
                aria-selected={index === active}
                key={q}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span className="faq-premium__number">0{index + 1}</span>
                <span className="faq-premium__question">
                  {q}
                  <small>{tag}</small>
                </span>
                <span className="faq-premium__plus">
                  <Icon name="Plus" size={17} />
                </span>
              </button>
            ))}
          </div>
          <div className="faq-premium__answer" aria-live="polite">
            <span className="faq-premium__answer-mark" aria-hidden="true">
              ✦
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={question[0]}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="faq-premium__answer-label">{question[2]}</span>
                <h3>{question[0]}</h3>
                <p>{question[1]}</p>
              </motion.div>
            </AnimatePresence>
            <div className="faq-premium__answer-footer">
              <span>
                Question {active + 1} of {QUESTIONS.length}
              </span>
              <div>
                <span
                  style={{
                    width: `${((active + 1) / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactPrompt() {
  return (
    <div className="faq-premium__modal-copy">
      <p>We would love to help you find the right place to begin.</p>
      <p className="muted">
        This is an interactive demo, so no message will be sent—but the
        conversation starts here.
      </p>
    </div>
  );
}
