import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import AvatarRenderer3D from "./AvatarRenderer3D";
import "../../assets/styles/landing-ai-companion.css";

/* ------------------------------------------------------------------
   Bob — the SmritiCare AI companion.
   Works fully offline with local command logic. Architecture is ready
   to swap `respond` for a real backend/AI API later.
------------------------------------------------------------------- */

const INITIAL_MESSAGES = [
  {
    id: "welcome-1",
    role: "assistant",
    text: "Hello, I am Bob. How can I help you today?",
  },
];

const QUICK_COMMANDS = [
  { label: "Play a game", command: "play a game" },
  { label: "My memory garden", command: "show my garden" },
  { label: "How it works", command: "how does it work" },
  { label: "For families", command: "family" },
  { label: "Get started", command: "get started" },
];

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}

/* ------------------------------------------------------------------
   LOCAL AI RESPONSE ENGINE
   Replace this with a fetch() to a backend for real AI later.
   Signature stays: respond(text) -> { reply, navigateTo? }
------------------------------------------------------------------- */
function createLocalResponseEngine() {
  return function respond(input) {
    const text = normalizeText(input);

    /* --- Safety & control --- */
    if (/\b(stop talking|stop speaking|be quiet|silence|quiet)\b/.test(text)) {
      return {
        reply: "Okay, I'll stop speaking. I'm still here whenever you need me.",
      };
    }

    /* --- Greetings --- */
    if (
      /\b(hello|hi|hey|good morning|good afternoon|good evening|namaste)\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "Hello! Lovely to see you. I'm Bob, your SmritiCare companion. What would you like to do today?",
      };
    }

    /* --- Identity --- */
    if (
      /\b(who are you|what are you|your name|introduce yourself)\b/.test(text)
    ) {
      return {
        reply:
          "I'm Bob, a gentle companion for SmritiCare. I can help you explore games, family connection, your memory garden, and ways to get started.",
      };
    }

    /* --- Capabilities --- */
    if (
      /\b(what can you do|help me|how can you help|what do you do|capabilities)\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "I can open games for you, take you to your memory garden, show family connection, explain how SmritiCare works, or help you get started. Just ask, or tap a button below.",
      };
    }

    /* --- Wellbeing / feelings --- */
    if (
      /\b(i am (sad|lonely|tired|bored|unwell)|feeling (sad|lonely|tired|low))\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "I'm sorry to hear that. It's okay to feel that way. Would you like to try a gentle game, or look at some family memories with me? Sometimes a small moment helps.",
      };
    }

    if (
      /\b(i am (happy|great|good|fine|well)|feeling (happy|great|good))\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "That's wonderful to hear! Would you like to play something or visit your memory garden?",
      };
    }

    if (/\b(thank you|thanks|thankyou|thank u)\b/.test(text)) {
      return {
        reply: "You're most welcome. I'm always happy to help.",
      };
    }

    /* --- Memory / cognition support --- */
    if (
      /\b(what day is it|what is today|today s date|what time)\b/.test(text)
    ) {
      const now = new Date();
      const day = now.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
      const time = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
      return {
        reply: `Today is ${day}. It's about ${time} right now.`,
      };
    }

    if (/\b(i forgot|i can t remember|memory|remember)\b/.test(text)) {
      return {
        reply:
          "That's alright. Memory can be a little shy sometimes. Would you like to look at your memory garden together, or try a gentle remembering game?",
      };
    }

    /* --- Navigation intents --- */
    if (
      /\b(open games|show games|play a game|games|let s play|let us play)\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "I'll open the games area for you. Take your time and choose what feels enjoyable.",
        navigateTo: "/app/games",
      };
    }

    if (
      /\b(open memory garden|show my garden|memory garden|my garden|garden)\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "I'll take you to your memory garden. It's a calm place to revisit meaningful moments.",
        navigateTo: "/memory-garden",
      };
    }

    if (
      /\b(how does it work|how it works|how does this work|tell me more)\b/.test(
        text,
      )
    ) {
      return {
        reply: "I'll show you how SmritiCare works, step by step.",
        navigateTo: "/how-it-works",
      };
    }

    if (
      /\b(family|show family|family connection|for families|my family)\b/.test(
        text,
      )
    ) {
      return {
        reply:
          "I'll open the family connection area. Staying close to loved ones matters.",
        navigateTo: "/family-connection",
      };
    }

    if (
      /\b(get started|start|sign up|signup|login|log in|register)\b/.test(text)
    ) {
      return {
        reply: "Let's get started. I'll open the sign-in page for you.",
        navigateTo: "/login",
      };
    }

    if (/\b(about|our story|who made this|company)\b/.test(text)) {
      return {
        reply:
          "I'll take you to the About page so you can learn more about us.",
        navigateTo: "/about",
      };
    }

    if (/\b(accessibility|comfort|settings)\b/.test(text)) {
      return {
        reply: "I'll open the accessibility section for you.",
        navigateTo: "/accessibility",
      };
    }

    /* --- Small talk --- */
    if (/\b(how are you|how do you do|how s it going)\b/.test(text)) {
      return {
        reply:
          "I'm doing well, thank you for asking. More importantly, how are you feeling today?",
      };
    }

    if (/\b(tell me a (joke|story)|funny)\b/.test(text)) {
      return {
        reply:
          "Here's a gentle one: Why did the flower take a nap? Because it needed to recharge its petals. I hope that brought a small smile.",
      };
    }

    /* --- Fallback --- */
    return {
      reply:
        "I'm still learning that one. You can ask me to open games, visit your memory garden, show family connection, explain how SmritiCare works, or help you get started.",
    };
  };
}

export default function LandingAICompanion() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const [avatarState, setAvatarState] = useState("idle");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micError, setMicError] = useState("");
  const [speechError, setSpeechError] = useState("");

  /*
    greetingDismissed tracks ONLY explicit user engagement (clicked a
    greeting button). Bubble visibility itself is derived from
    `!isFloating && !greetingDismissed`, so scrolling back to the top
    brings the greeting back until the user actually interacts.
  */
  const [greetingDismissed, setGreetingDismissed] = useState(false);

  const recognitionRef = useRef(null);
  const timersRef = useRef([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const boyVoiceRef = useRef(null);

  const respond = useMemo(() => createLocalResponseEngine(), []);

  /* -------- Scroll transforms -------- */
  const heroScale = useTransform(scrollY, [0, 320], [1, 0.72]);
  const heroY = useTransform(scrollY, [0, 320], [0, -20]);
  const heroOpacity = useTransform(scrollY, [0, 260], [1, 0]);

  /* Robust scroll tracking — plain window listener instead of
   framer-motion's scrollY.on(), which can miss events in some
   browsers after route changes. This guarantees isFloating always
   reflects the real scroll position, so scrolling back to the top
   always brings Bob's greeting bubble back. */
useEffect(() => {
  if (typeof window === "undefined") return undefined;

  const handleScroll = () => {
    setIsFloating(window.scrollY > 260);
  };

  handleScroll(); // sync on mount
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const addMessage = useCallback((role, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        role,
        text,
      },
    ]);
  }, []);

  /* -------- Speech output -------- */
  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setAvatarState("idle");
  }, []);

  /* ---------------------------------------------------------------
     Voice picker — always resolves to ONE consistent boy / young
     voice so Bob never switches between male and female mid-speech.
     Priority:
       1. Explicit boy / child names
       2. Known young male voices across platforms
       3. Any English male voice
       4. Any English voice (last resort)
     The chosen voice is cached in boyVoiceRef for the whole session.
  ---------------------------------------------------------------- */
  const pickBoyVoice = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return null;
    }

    if (boyVoiceRef.current) return boyVoiceRef.current;

    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const englishVoices = voices.filter(
      (v) => v.lang && v.lang.toLowerCase().startsWith("en"),
    );

    /* 1. Explicit boy / child names */
    const explicitBoy = englishVoices.find((v) =>
      /\b(boy|child|kid|junior|oliver|thomas|alex|liam|noah|ethan|leo|ryan|jack|tom|harry|james)\b/i.test(
        v.name,
      ),
    );
    if (explicitBoy) {
      boyVoiceRef.current = explicitBoy;
      return explicitBoy;
    }

    /* 2. Known young male voices across platforms */
    const knownYoungMale = englishVoices.find((v) =>
      /(Google UK English Male|Microsoft Ryan|Microsoft Guy|Microsoft George|Microsoft Thomas|Microsoft Oliver|Daniel|Alex|Fred|Junior|Rishi|Arthur)/i.test(
        v.name,
      ),
    );
    if (knownYoungMale) {
      boyVoiceRef.current = knownYoungMale;
      return knownYoungMale;
    }

    /* 3. Anything marked male */
    const maleVoice = englishVoices.find((v) => /\bmale\b/i.test(v.name));
    if (maleVoice) {
      boyVoiceRef.current = maleVoice;
      return maleVoice;
    }

    /* 4. Fallback — still locked so no mid-speech switching */
    const fallback = englishVoices[0] || voices[0] || null;
    boyVoiceRef.current = fallback;
    return fallback;
  }, []);

  const speak = useCallback(
    (text) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        setSpeechError(
          "Speech is not available in this browser. You can still read and type.",
        );
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      /* Boy-ish delivery: slightly higher pitch + gentle slower rate */
      utterance.rate = 0.92;
      utterance.pitch = 1.5;
      utterance.volume = 1;

      const voice = pickBoyVoice();
      if (voice) utterance.voice = voice;
      /* Pin the language so the browser can't swap the voice mid-utterance */
      utterance.lang = voice?.lang || "en-US";

      utterance.onstart = () => {
        setSpeechError("");
        setIsSpeaking(true);
        setAvatarState("talking");
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
        setSpeechError(
          "I could not speak just now. You can still read the message.",
        );
      };

      window.speechSynthesis.speak(utterance);
    },
    [pickBoyVoice],
  );

  /* -------- Warm up the voice list once on mount -------- */
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return undefined;
    }

    const loadVoices = () => {
      pickBoyVoice();
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, [pickBoyVoice]);

  /* -------- Text/voice handler -------- */
  const handleUserMessage = useCallback(
    (raw) => {
      const text = String(raw || "").trim();
      if (!text) return;

      /* Auto-open the chat when the user speaks from the hero */
      if (!chatOpen) setChatOpen(true);

      /* Dismiss the greeting bubble permanently once the user engages */
      setGreetingDismissed(true);

      if (
        /\b(stop talking|stop speaking|be quiet|silence|quiet)\b/i.test(text)
      ) {
        stopSpeaking();
        addMessage("user", text);
        addMessage(
          "assistant",
          "Okay, I'll stop speaking. I'm still here whenever you need me.",
        );
        return;
      }

      addMessage("user", text);
      setAvatarState("thinking");

      const timer = window.setTimeout(() => {
        const result = respond(text);
        addMessage("assistant", result.reply);

        if (voiceEnabled && result.reply) {
          speak(result.reply);
        } else {
          setAvatarState("idle");
        }

        if (result.navigateTo) {
          const navTimer = window.setTimeout(
            () => navigate(result.navigateTo),
            voiceEnabled ? 900 : 250,
          );
          timersRef.current.push(navTimer);
        }
      }, 320);

      timersRef.current.push(timer);
    },
    [
      addMessage,
      chatOpen,
      navigate,
      respond,
      speak,
      stopSpeaking,
      voiceEnabled,
    ],
  );

  /* -------- Voice input -------- */
  const startListening = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMicError(
        "Voice input is not available in this browser. You can type instead.",
      );
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    setMicError("");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      setAvatarState("listening");
    };

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript?.trim();
      if (transcript) handleUserMessage(transcript);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      setAvatarState("idle");

      if (event.error === "not-allowed") {
        setMicError(
          "Microphone permission was blocked. You can still type your message.",
        );
      } else if (event.error !== "aborted") {
        setMicError(
          "I could not hear that. Please try again or type your message.",
        );
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      setAvatarState("idle");
    };

    recognitionRef.current = recognition;

    try {
      recognition.start();
    } catch {
      setMicError("Voice input is already active.");
    }
  }, [handleUserMessage, isListening]);

  const closeChat = useCallback(() => {
    setChatOpen(false);
    if (isListening) recognitionRef.current?.stop();
  }, [isListening]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");
    handleUserMessage(value);
  };

  /* -------- "Talk with me" — user-initiated, never autoplay -------- */
  const handleTalkWithMe = () => {
    setGreetingDismissed(true);
    setChatOpen(true);
    if (voiceEnabled) {
      speak("Hello, I am Bob. How can I help you today?");
    }
  };

  const handleTypeInstead = () => {
    setGreetingDismissed(true);
    setChatOpen(true);
  };

  /* -------- Esc closes chat -------- */
  useEffect(() => {
    if (!chatOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeChat();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [chatOpen, closeChat]);

  /* -------- Body scroll lock while chat is open -------- */
  useEffect(() => {
    if (!chatOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [chatOpen]);

  /* -------- Auto-scroll messages -------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [messages, chatOpen, shouldReduceMotion]);

  /* -------- Cleanup -------- */
  useEffect(
    () => () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      stopSpeaking();
      recognitionRef.current?.abort?.();
    },
    [stopSpeaking],
  );

  const avatarMotionStyle = shouldReduceMotion
    ? undefined
    : {
        scale: heroScale,
        y: heroY,
        opacity: heroOpacity,
      };

  /* Greeting bubble is visible whenever the user is at the top of the
     page AND hasn't interacted yet. Scrolling up always brings it back. */
  const greetingVisible = !isFloating && !greetingDismissed;

  return (
    <>
      <section className="landing-ai-shell" aria-labelledby="landing-ai-title">
        <h1 id="landing-ai-title" className="landing-ai-sr-only">
          Meet Bob, your SmritiCare companion.
        </h1>

        <div className="landing-ai-hero">
          {/* ------- Robot + greeting bubble side by side ------- */}
          <div className="landing-ai-hero__stage">
            <motion.div
              className="landing-ai-hero__avatar"
              style={avatarMotionStyle}
              aria-hidden={isFloating}
            >
              <AvatarRenderer3D
                state={avatarState}
                speaking={isSpeaking}
                listening={isListening}
              />
            </motion.div>

            {!greetingDismissed && (
              <motion.div
                className="landing-ai-greeting-bubble"
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{
                  opacity: isFloating ? 0 : 1,
                  x: isFloating ? -20 : 0,
                  scale: isFloating ? 0.95 : 1,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 220, damping: 22 }
                }
                style={{
                  pointerEvents: isFloating ? "none" : "auto",
                  visibility: isFloating ? "hidden" : "visible",
                }}
                role="status"
                aria-live="polite"
                aria-hidden={isFloating}
              >
                <p className="landing-ai-greeting-line">Hello, I am Bob.</p>
                <p className="landing-ai-greeting-sub">
                  How can I help you today?
                </p>

                <div className="landing-ai-greeting-actions">
                  <button
                    className="landing-ai-control landing-ai-control--primary"
                    onClick={handleTalkWithMe}
                    type="button"
                  >
                    Talk with me
                  </button>
                  <button
                    className="landing-ai-control landing-ai-control--ghost"
                    onClick={handleTypeInstead}
                    type="button"
                  >
                    Type instead
                  </button>
                </div>

                {(micError || speechError) && (
                  <p className="landing-ai-error" role="alert">
                    {micError || speechError}
                  </p>
                )}

                <span className="landing-ai-greeting-tail" aria-hidden="true" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ------- Floating button ------- */}
      <AnimatePresence>
        {isFloating && !chatOpen && (
          <motion.button
            key="landing-ai-floating"
            className="landing-ai-floating"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 260, damping: 24 }
            }
            onClick={() => setChatOpen(true)}
            aria-label="Open Bob, your SmritiCare companion"
            type="button"
          >
            <AvatarRenderer3D
              state={avatarState}
              speaking={isSpeaking}
              listening={isListening}
              compact
            />
            <span className="landing-ai-floating__label">Ask Bob</span>
            <span className="landing-ai-floating__status" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ------- Full-screen chat ------- */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="landing-ai-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }
            }
          >
            <div
              className="landing-ai-overlay__backdrop"
              onClick={closeChat}
              role="presentation"
            />

            <motion.section
              className="landing-ai-chat"
              role="dialog"
              aria-modal="true"
              aria-labelledby="landing-ai-chat-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 26 }
              }
            >
              <header className="landing-ai-chat__header">
                <div className="landing-ai-chat__identity">
                  <AvatarRenderer3D
                    state={avatarState}
                    speaking={isSpeaking}
                    listening={isListening}
                    compact
                  />

                  <div>
                    <h2
                      id="landing-ai-chat-title"
                      className="landing-ai-chat__title"
                    >
                      Bob
                    </h2>
                    <p className="landing-ai-chat__subtitle">
                      {isListening
                        ? "Listening..."
                        : isSpeaking
                          ? "Speaking..."
                          : "Your SmritiCare companion"}
                    </p>
                  </div>
                </div>

                <div className="landing-ai-chat__header-actions">
                  <button
                    className="landing-ai-control landing-ai-control--icon"
                    onClick={() => setVoiceEnabled((value) => !value)}
                    aria-label={
                      voiceEnabled ? "Turn voice off" : "Turn voice on"
                    }
                    type="button"
                  >
                    {voiceEnabled ? "Voice on" : "Voice off"}
                  </button>

                  {isSpeaking && (
                    <button
                      className="landing-ai-control landing-ai-control--icon"
                      onClick={stopSpeaking}
                      type="button"
                    >
                      Stop speaking
                    </button>
                  )}

                  <button
                    className="landing-ai-control landing-ai-control--icon"
                    onClick={closeChat}
                    aria-label="Close companion"
                    type="button"
                  >
                    Close
                  </button>
                </div>
              </header>

              <div className="landing-ai-chat__body">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`landing-ai-message landing-ai-message--${message.role}`}
                  >
                    <span className="landing-ai-message__bubble">
                      {message.text}
                    </span>
                  </div>
                ))}

                {isListening && (
                  <div className="landing-ai-listening">
                    <span className="landing-ai-wave" aria-hidden="true" />
                    Listening...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div
                className="landing-ai-chat__quick"
                aria-label="Quick commands"
              >
                {QUICK_COMMANDS.map((command) => (
                  <button
                    key={command.label}
                    className="landing-ai-command"
                    onClick={() => handleUserMessage(command.command)}
                    type="button"
                  >
                    {command.label}
                  </button>
                ))}
              </div>

              <form
                className="landing-ai-chat__composer"
                onSubmit={handleSubmit}
              >
                <label
                  className="landing-ai-sr-only"
                  htmlFor="landing-ai-input"
                >
                  Type your message
                </label>

                <input
                  id="landing-ai-input"
                  ref={inputRef}
                  className="landing-ai-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type a message or say hello..."
                  autoComplete="off"
                />

                <button
                  className={`landing-ai-control landing-ai-control--icon ${
                    isListening ? "is-active" : ""
                  }`}
                  type="button"
                  onClick={startListening}
                  aria-label={
                    isListening ? "Stop listening" : "Start voice input"
                  }
                >
                  {isListening ? "Stop mic" : "Mic"}
                </button>

                <button
                  className="landing-ai-control landing-ai-control--primary"
                  type="submit"
                  disabled={!input.trim()}
                >
                  Send
                </button>
              </form>

              {(micError || speechError) && (
                <p className="landing-ai-error" role="alert">
                  {micError || speechError}
                </p>
              )}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
