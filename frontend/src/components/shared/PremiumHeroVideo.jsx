import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Icon } from "../common/ui.jsx";
import "../../assets/styles/premium-hero-video.css";

/* ------------------------------------------------------------------
   Premium hero — full-bleed autoplaying cinematic video.
   • No controls, no sound, seamless loop
   • Smooth crossfade from the fallback into the video
   • Word-by-word title reveal, gentle scroll parallax + fade
   • Reduced-motion aware
------------------------------------------------------------------- */

const VIDEO_SOURCES = [
  "https://res.cloudinary.com/davsexxnb/video/upload/v1789918188/Elderly_man_holding_child_walking_20260920155039_yxocmr.mp4",
];

const TITLE_LINES = [
  ["Good things", false],
  ["grow, together.", true],
];

function AnimatedTitle() {
  const shouldReduceMotion = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1 className="phv-title">
      {TITLE_LINES.map(([line, accent], lineIdx) => (
        <span className="phv-title-line" key={lineIdx}>
          {line.split(" ").map((word) => {
            const delay = 0.4 + wordIndex++ * 0.1;
            const accentClass = accent ? "phv-title-accent" : undefined;
            return (
              <span className="phv-word-mask" key={word}>
                {shouldReduceMotion ? (
                  <span className={accentClass}>{word}</span>
                ) : (
                  <motion.span
                    className={accentClass}
                    initial={{ y: "115%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                )}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function PremiumHeroVideo() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const videoRef = useRef(null);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    /* Try every source until one plays — silent, looping, no controls. */
    let index = 0;
    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      const attempt = video.play();
      if (attempt) {
        attempt
          .then(() => {
            if (!cancelled) setVideoReady(true);
          })
          .catch(() => {
            /* Autoplay blocked — some browsers need a muted reload nudge */
            video.muted = true;
            video.load();
            const retry = video.play();
            if (retry)
              retry.catch(() => {
                if (!cancelled) setVideoReady(true); /* poster stays visible */
              });
          });
      }
    };

    const handleSourceError = () => {
      index += 1;
      if (index < VIDEO_SOURCES.length && !cancelled) {
        video.src = VIDEO_SOURCES[index];
        video.load();
        tryPlay();
      } else if (!cancelled) {
        setVideoFailed(true);
        setVideoReady(true); /* keep the animated fallback visible */
      }
    };

    video.addEventListener("playing", tryPlay, { once: true });
    video.addEventListener("error", handleSourceError);
    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener("playing", tryPlay);
      video.removeEventListener("error", handleSourceError);
    };
  }, []);

  return (
    <section className="phv" aria-label="Welcome to SmritiCare">
      <motion.div
        className="phv-media"
        style={shouldReduceMotion ? undefined : { scale, opacity }}
      >
        {!videoFailed && (
          <video
            ref={videoRef}
            className={`phv-video${videoReady ? " is-ready" : ""}`}
            src={VIDEO_SOURCES[0]}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
          />
        )}

        {/* Premium animated fallback / poster layer */}
        <div className={`phv-fallback${videoReady ? " is-hidden" : ""}`}>
          <span className="phv-fallback__orb phv-fallback__orb--one" />
          <span className="phv-fallback__orb phv-fallback__orb--two" />
          <span className="phv-fallback__orb phv-fallback__orb--three" />
        </div>

        <div className="phv-veil" aria-hidden="true" />
        <div className="phv-grain" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="phv-content container"
        style={shouldReduceMotion ? undefined : { y: contentY }}
      >
        <motion.p
          className="phv-eyebrow"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          SmritiCare
        </motion.p>

        <AnimatedTitle />

        <motion.p
          className="phv-subtitle"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Gentle games, a blooming memory garden, and your family - always a
          little closer.
        </motion.p>

        <motion.div
          className="phv-actions"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="phv-btn phv-btn--primary" href="#/login">
            Let's begin <Icon name="ArrowRight" size={18} />
          </a>
          <a className="phv-btn phv-btn--ghost" href="#/how-it-works">
            How it works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="phv-scroll-hint"
        style={shouldReduceMotion ? undefined : { opacity }}
        aria-hidden="true"
      >
        <span className="phv-scroll-hint__line" />
      </motion.div>
    </section>
  );
}
