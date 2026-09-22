import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon, Photo, Avatar } from "../common/ui.jsx";
import { images } from "../../data/images.js";
import "../../assets/styles/premium-progress-showcase.css";

const SLIDES = [
  {
    id: "progress",
    kicker: "YOUR MEMORY GARDEN",
    title: "Watch your progress grow",
    description:
      "Every completed activity helps your memory garden bloom. It’s a beautiful way to see your progress and stay motivated.",
    progress: 60,
    progressLabel: "24 / 40",
    image: images.garden,
    stat: "24 activities",
    statLabel: "this week",
    accent: "sage",
  },
  {
    id: "connection",
    kicker: "FOR FAMILIES & CAREGIVERS",
    title: "Stay connected, feel reassured",
    description:
      "A clear view of the moments, reminders, and gentle routines that help someone you love feel supported.",
    progress: 72,
    progressLabel: "All is well",
    image: images.family,
    stat: "Happy",
    statLabel: "mood check-in",
    accent: "peach",
  },
  {
    id: "rhythm",
    kicker: "A LITTLE RHYTHM, EVERY DAY",
    title: "Small steps become lovely habits",
    description:
      "A calm daily rhythm makes room for memory games, family moments, and the simple wins worth celebrating.",
    progress: 48,
    progressLabel: "Growing gently",
    image: images.tea,
    stat: "3 moments",
    statLabel: "planned today",
    accent: "lavender",
  },
];

function MiniDashboard({ slide }) {
  return (
    <div
      className="progress-showcase__dashboard"
      aria-label="Illustrative dashboard preview"
    >
      <div className="progress-showcase__dash-head">
        <span>Family dashboard</span>
        <span className="progress-showcase__live">
          <i /> Live
        </span>
      </div>
      <div className="progress-showcase__profile">
        <Avatar src={images.sunita} name="Grandma" />
        <span>
          <strong>Grandma</strong>
          <small>Active · Living room</small>
        </span>
        <Icon name="MoreHorizontal" size={18} />
      </div>
      <div className="progress-showcase__metrics">
        <div>
          <span>Today’s activities</span>
          <strong>
            3 / 5 <small>completed</small>
          </strong>
          <b>
            <i style={{ width: `${slide.progress}%` }} />
          </b>
        </div>
        <div>
          <span>Mood check-in</span>
          <strong className="happy">
            <Icon name="Smile" size={16} /> Happy
          </strong>
          <small>Good mood today!</small>
        </div>
      </div>
      <div className="progress-showcase__dash-bottom">
        <div>
          <span>Upcoming reminders</span>
          <small>
            <Icon name="Clock3" size={13} /> Medicine <b>10:00 AM</b>
          </small>
          <small>
            <Icon name="Droplets" size={13} /> Water <b>12:00 PM</b>
          </small>
        </div>
        <div>
          <span>Gentle insight</span>
          <p>
            <Icon name="Sprout" size={17} /> Your loved one is more engaged in
            the morning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PremiumProgressShowcase() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const slide = SLIDES[active];

  useEffect(() => {
    // The story rotation remains useful even when decorative motion is reduced;
    // reduced-motion only removes the transition effects around each slide.
    const timer = setInterval(
      () => setActive((current) => (current + 1) % SLIDES.length),
      6200,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="progress-showcase"
      id="progress-showcase"
      aria-labelledby="progress-showcase-title"
    >
      <span
        className="progress-showcase__orb progress-showcase__orb--one"
        aria-hidden="true"
      />
      <span
        className="progress-showcase__orb progress-showcase__orb--two"
        aria-hidden="true"
      />
      <div className="progress-showcase__inner">
        <div className="progress-showcase__hero">
          <div className="progress-showcase__image-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className={`progress-showcase__cutout progress-showcase__cutout--${slide.accent}`}
                initial={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, scale: 1.06, x: 18 }
                }
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, scale: 1, x: 0 }
                }
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, scale: 0.98, x: -12 }
                }
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Photo src={slide.image} alt="A warm SmritiCare moment" />
              </motion.div>
            </AnimatePresence>
            <span
              className="progress-showcase__image-wash"
              aria-hidden="true"
            />
            <span className="progress-showcase__path" aria-hidden="true" />
            <div className="progress-showcase__stat-card">
              <span className="progress-showcase__stat-icon">
                <Icon
                  name={slide.id === "connection" ? "Heart" : "Sprout"}
                  size={19}
                />
              </span>
              <span>
                <strong>{slide.stat}</strong>
                <small>{slide.statLabel}</small>
              </span>
            </div>
            <span className="progress-showcase__scribble" aria-hidden="true">
              Small steps
              <br />
              grow big
              <br />
              memories <em>♡</em>
            </span>
          </div>

          <div className="progress-showcase__copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className="progress-showcase__eyebrow">
                  <span /> {slide.kicker}
                </p>
                <h2 id="progress-showcase-title">{slide.title}</h2>
                <p className="progress-showcase__description">
                  {slide.description}
                </p>
                <div className="progress-showcase__progress-label">
                  <span>
                    <Icon name="Leaf" size={18} /> Progress
                  </span>
                  <strong>{slide.progressLabel}</strong>
                </div>
                <div className="progress-showcase__progress">
                  <span style={{ width: `${slide.progress}%` }} />
                </div>
                <Link
                  className="progress-showcase__link"
                  to={
                    slide.id === "connection" ? "/family-connection" : "/login"
                  }
                >
                  {slide.id === "connection"
                    ? "Explore family dashboard"
                    : "View your garden"}{" "}
                  <Icon name="ArrowRight" size={17} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="progress-showcase__lower">
          <div className="progress-showcase__lower-copy">
            <p className="progress-showcase__eyebrow">
              <span /> ONE PLACE, FULL OF CARE
            </p>
            <h3>
              See the whole picture.
              <br />
              <em>Feel a little closer.</em>
            </h3>
            <p>
              SmritiCare turns daily progress into a gentle, reassuring story
              for the whole family.
            </p>
            <div className="progress-showcase__checks">
              <span>
                <Icon name="Check" size={14} /> Activity progress
              </span>
              <span>
                <Icon name="Check" size={14} /> Mood check-ins
              </span>
              <span>
                <Icon name="Check" size={14} /> Gentle reminders
              </span>
              <span>
                <Icon name="Check" size={14} /> Family insights
              </span>
            </div>
          </div>
          <div className="progress-showcase__dashboard-wrap">
            <MiniDashboard slide={slide} />
            <span
              className="progress-showcase__dashboard-glow"
              aria-hidden="true"
            />
          </div>
          <div className="progress-showcase__family-image">
            <Photo src={images.family} alt="Family sharing a warm moment" />
            <span>
              “Together
              <br />
              we make a<br />
              difference.” <em>♡</em>
            </span>
          </div>
        </div>

        <div
          className="progress-showcase__controls"
          aria-label="Showcase slides"
        >
          <span>How SmritiCare helps</span>
          <div className="progress-showcase__dots" role="tablist">
            {SLIDES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-label={`Show ${item.title}`}
                aria-selected={index === active}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span />
              </button>
            ))}
          </div>
          <span>
            0{active + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
