import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button, Icon } from "../common/ui.jsx";
import "../../assets/styles/premium-final-cta.css";

const VIDEO_SOURCE =
  "https://res.cloudinary.com/davsexxnb/video/upload/v1789918188/Elderly_man_holding_child_walking_20260920155039_yxocmr.mp4";

export default function PremiumFinalCta() {
  const cardRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 18,
  });

  function handlePointerMove(event) {
    if (reducedMotion || !cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      className="final-premium"
      id="start-together"
      aria-labelledby="final-premium-title"
    >
      <video
        className="final-premium__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
        aria-hidden="true"
      >
        <source src={VIDEO_SOURCE} type="video/mp4" />
      </video>
      <div className="final-premium__veil" aria-hidden="true" />
      <div className="final-premium__grain" aria-hidden="true" />
      <span
        className="final-premium__orb final-premium__orb--one"
        aria-hidden="true"
      />
      <span
        className="final-premium__orb final-premium__orb--two"
        aria-hidden="true"
      />

      <div className="final-premium__inner">
        <motion.div
          className="final-premium__eyebrow"
          initial={reducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="final-premium__eyebrow-dot" />
          YOUR NEXT CHAPTER STARTS SMALL
        </motion.div>

        <motion.div
          ref={cardRef}
          className="final-premium__card-wrap"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          style={reducedMotion ? undefined : { rotateX, rotateY }}
          initial={
            reducedMotion ? undefined : { opacity: 0, y: 26, scale: 0.97 }
          }
          whileInView={
            reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="final-premium__card">
            <span className="final-premium__card-glow" aria-hidden="true" />
            <span
              className="final-premium__floating final-premium__floating--one"
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="final-premium__floating final-premium__floating--two"
              aria-hidden="true"
            >
              ♥
            </span>
            <span className="final-premium__leaf" aria-hidden="true">
              🌿
            </span>
            <div className="final-premium__copy">
              <p className="final-premium__micro">
                A LITTLE SPACE FOR WHAT MATTERS
              </p>
              <h2 id="final-premium-title">
                Let’s grow
                <br />
                <em>together.</em>
              </h2>
              <p className="final-premium__description">
                A familiar face. A little game. A moment just for you. Your
                memory garden is ready whenever you are.
              </p>
              <div className="final-premium__actions">
                <Button to="/login" className="final-premium__button">
                  Let’s begin, together <Icon name="ArrowRight" size={18} />
                </Button>
                <span className="final-premium__hint">
                  <Icon name="Sparkles" size={15} /> At your pace. With a little
                  care.
                </span>
              </div>
            </div>
            <div className="final-premium__badge" aria-hidden="true">
              <span className="final-premium__badge-ring" />
              <Icon name="HeartHandshake" size={28} />
              <span>
                made
                <br />
                with care
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="final-premium__proof"
          initial={reducedMotion ? undefined : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span>
            <Icon name="Check" size={15} /> Gentle by design
          </span>
          <span>
            <Icon name="Check" size={15} /> Family at the heart
          </span>
          <span>
            <Icon name="Check" size={15} /> Always at your pace
          </span>
        </motion.div>
      </div>
    </section>
  );
}
