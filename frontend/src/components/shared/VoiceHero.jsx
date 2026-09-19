import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../common/ui.jsx';

export function VoiceHero({ isScrolled = false, scrollProgress = 0, onToggleListening = () => {} }) {
  const [listening, setListening] = useState(false);
  
  const handleClick = () => {
    setListening(!listening);
    onToggleListening(!listening);
  };

  return (
    <motion.div
      className="voice-hero"
      layout
    >
      <div className="voice-hero-container">
        <div className="voice-hero-background">
          {/* Animated gradient background */}
          <motion.div
            className="voice-hero-glow"
            animate={listening ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: listening ? Infinity : 0 }}
          />
        </div>

        {/* Main hero image with lazy loading */}
        <div className="voice-hero-image-wrapper" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img
            src="https://res.cloudinary.com/sh4idspn/image/upload/v1789834993/hi.png"
            alt="Voice Assistant"
            className="voice-hero-image"
            loading="lazy"
            decoding="async"
            onLoad={(e) => e.target.classList.add('loaded')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Audio waves animation when listening */}
        <AnimatePresence>
          {listening && (
            <motion.div
              className="voice-waves-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="voice-wave"
                  animate={{
                    scale: [1, 1.8],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive button */}
        <motion.button
          className={`voice-hero-button ${listening ? 'active' : ''}`}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={listening ? 'Stop listening' : 'Start voice assistant'}
        >
          <motion.div
            className="button-pulse"
            animate={listening ? { scale: [1, 1.2] } : { scale: 1 }}
            transition={{ duration: 0.6, repeat: listening ? Infinity : 0 }}
          />
          <Icon name={listening ? 'Pause' : 'Mic'} size={24} />
        </motion.button>

        {/* Status text */}
        <motion.div
          className="voice-hero-status"
          animate={{ opacity: listening ? 1 : 0.7 }}
        >
          {listening ? (
            <>
              <p className="voice-listening">Listening...</p>
              <small>Say a command or just chat</small>
            </>
          ) : (
            <>
              <p className="voice-prompt">Ready to chat?</p>
              <small>Click to activate voice assistant</small>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function VoiceFloating({ isVisible = true, onToggleListening = () => {} }) {
  const [listening, setListening] = useState(false);

  const handleClick = () => {
    setListening(!listening);
    onToggleListening(!listening);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="voice-floating"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          {/* Simple floating button only - no background circle */}
          <motion.button
            className={`voice-floating-button ${listening ? 'active' : ''}`}
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={listening ? 'Stop listening' : 'Start voice assistant'}
          >
            <motion.div
              className="voice-floating-pulse"
              animate={listening ? { scale: [1, 1.2] } : { scale: 1 }}
              transition={{ duration: 0.6, repeat: listening ? Infinity : 0 }}
            />
            <Icon name={listening ? 'Pause' : 'Mic'} size={20} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
