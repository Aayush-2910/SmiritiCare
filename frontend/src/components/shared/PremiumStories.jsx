import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon, Avatar } from "../common/ui.jsx";
import { images } from "../../data/images.js";
import "../../assets/styles/premium-stories.css";

const STORIES = [
  {
    id: 1,
    quote:
      "It’s become my little morning ritual. A cup of tea, a memory game, and a peek at what the grandchildren have shared.",
    name: "Meera",
    detail: "Finding joy in the everyday",
    role: "SmritiCare member",
    photo: images.sunita,
    color: "sage",
  },
  {
    id: 2,
    quote:
      "We live in different cities, but sharing a photo from our old albums makes it feel like we’re back at the same table.",
    name: "Rahul",
    detail: "A little closer, even from afar",
    role: "Family member",
    photo: images.rahul,
    color: "peach",
  },
  {
    id: 3,
    quote:
      "Mum doesn’t call them activities. She says she’s going to visit her garden. That makes me smile every time.",
    name: "Anita",
    detail: "Growing together as a family",
    role: "Daughter & carer",
    photo: images.anita,
    color: "lavender",
  },
];

export default function PremiumStories() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const story = STORIES[active];

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % STORIES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <section
      className="stories-premium"
      id="testimonials"
      aria-labelledby="stories-premium-title"
    >
      <span
        className="stories-premium__orb stories-premium__orb--1"
        aria-hidden="true"
      />
      <span
        className="stories-premium__orb stories-premium__orb--2"
        aria-hidden="true"
      />
      <div className="stories-premium__inner">
        <motion.div
          className="stories-premium__intro"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="stories-premium__eyebrow">
            <span /> STORIES THAT BLOOM
          </p>
          <h2 id="stories-premium-title">
            The moments people
            <br />
            <span>carry with them.</span>
          </h2>
          <p className="stories-premium__lede">
            The best part of SmritiCare is not a score. It is the small feeling
            that stays after.
          </p>
          <div
            className="stories-premium__stats"
            aria-label="Community highlights"
          >
            <div>
              <strong>Every day</strong>
              <span>little moments matter</span>
            </div>
            <div>
              <strong>At your pace</strong>
              <span>always a gentle welcome</span>
            </div>
          </div>
        </motion.div>

        <div className="stories-premium__stage">
          <div
            className="stories-premium__orbit stories-premium__orbit--one"
            aria-hidden="true"
          >
            <span>✦</span>
          </div>
          <div
            className="stories-premium__orbit stories-premium__orbit--two"
            aria-hidden="true"
          >
            <span>✦</span>
          </div>
          <span
            className="stories-premium__leaf stories-premium__leaf--one"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="stories-premium__leaf stories-premium__leaf--two"
            aria-hidden="true"
          >
            ·
          </span>

          <AnimatePresence mode="wait">
            <motion.article
              key={story.id}
              className={`stories-premium__card stories-premium__card--${story.color}`}
              initial={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: 20, scale: 0.98 }
              }
              animate={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: -16, scale: 0.98 }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="stories-premium__card-top">
                <span
                  className="stories-premium__quote-icon"
                  aria-hidden="true"
                >
                  “
                </span>
                <span className="stories-premium__verified">
                  <Icon name="Heart" size={13} /> A little note from{" "}
                  {story.name}
                </span>
              </div>
              <blockquote>{story.quote}</blockquote>
              <div className="stories-premium__person">
                <Avatar src={story.photo} name={story.name} />
                <div>
                  <strong>{story.name}</strong>
                  <span>{story.detail}</span>
                  <small>{story.role}</small>
                </div>
                <span className="stories-premium__heart" aria-hidden="true">
                  ♥
                </span>
              </div>
            </motion.article>
          </AnimatePresence>

          <div
            className="stories-premium__controls"
            aria-label="Story controls"
          >
            <button
              type="button"
              className="stories-premium__arrow"
              aria-label="Previous story"
              onClick={() =>
                setActive((active - 1 + STORIES.length) % STORIES.length)
              }
            >
              <Icon name="ArrowLeft" size={17} />
            </button>
            <div
              className="stories-premium__dots"
              role="tablist"
              aria-label="Choose a story"
            >
              {STORIES.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show ${item.name}'s story`}
                  className={index === active ? "is-active" : ""}
                  onClick={() => setActive(index)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="stories-premium__arrow"
              aria-label="Next story"
              onClick={() => setActive((active + 1) % STORIES.length)}
            >
              <Icon name="ArrowRight" size={17} />
            </button>
          </div>
          <div className="stories-premium__progress" aria-hidden="true">
            <span
              style={{ transform: `scaleX(${(active + 1) / STORIES.length})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
