import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Logo,
  Icon,
  Button,
  Photo,
  Avatar,
  AccessibilityButton,
  AccessibilityPanel,
  Carousel,
} from "../components/common/ui.jsx";
import GardenScene, { GameArt } from "../components/shared/GardenScene.jsx";
import { useStore } from "../store/state.jsx";
import { games } from "../data/games.js";
import { images } from "../data/images.js";
import PremiumHeroVideo from "../components/shared/PremiumHeroVideo";
import ReassuranceStrip from "../components/shared/ReassuranceStrip";
import PremiumAbout from "../components/shared/PremiumAbout";
import PremiumHowItWorks from "../components/shared/PremiumHowItWorks";
import PremiumPricing from "../components/shared/PremiumPricing";
import PremiumProgressShowcase from "../components/shared/PremiumProgressShowcase";
import PremiumStories from "../components/shared/PremiumStories";
import PremiumFaq from "../components/shared/PremiumFaq";
import PremiumFinalCta from "../components/shared/PremiumFinalCta";

const navItems = [
  ["About", "/about"],
  ["How it works", "/how-it-works"],
  ["Our games", "/games-preview"],
  ["For families", "/family-connection"],
  ["Pricing", "/pricing"],
];
function PublicNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={
        scrolled ? "public-header is-scrolled" : "public-header"
      }
    >
      <div className="container public-nav">
        <Logo />
        <nav
          className={open ? "public-links open" : "public-links"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
          <Link className="mobile-login" to="/login">
            Log in
          </Link>
        </nav>
        <div className="nav-actions">
          <AccessibilityButton compact />
          <Link className="login-link" to="/login">
            Log in
          </Link>
          <Button to="/login" className="small-btn">
            Get started <Icon name="ArrowUpRight" size={17} />
          </Button>
          <button
            className="icon-btn mobile-menu"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "X" : "Menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
const sectionRoutes = {
  "/about": "about",
  "/how-it-works": "how-it-works",
  "/features": "features",
  "/games-preview": "games-preview",
  "/family-connection": "family-connection",
  "/progress-showcase": "progress-showcase",
  "/pricing": "pricing",
  "/memory-garden": "memory-garden",
  "/accessibility": "accessibility",
  "/contact": "contact",
};
export function Landing() {
  const { setModal } = useStore();
  const location = useLocation();
  useEffect(() => {
    const id = sectionRoutes[location.pathname];
    if (id)
      setTimeout(
        () =>
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" }),
        100,
      );
    else window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="public-site">
      <PublicNav />
      <main>
        {/* Premium cinematic video hero. The legacy 3D bot hero was removed. */}
        <PremiumHeroVideo />

        <ReassuranceStrip />
        <PremiumAbout />
        <PremiumHowItWorks />
        <section className="section container" id="games-preview">
          <div className="section-heading horizontal">
            <div>
              <p className="eyebrow">A PLAYFUL WAY TO STAY ENGAGED</p>
              <h2>A little play goes a long way.</h2>
              <p>
                Familiar things. Friendly challenges. A smile in every activity.
              </p>
            </div>
            <Button variant="secondary" to="/app/games">
              Explore all games <Icon name="ArrowRight" size={17} />
            </Button>
          </div>
          <div className="public-game-grid">
            {games.slice(0, 3).map((game) => (
              <Link
                to={`/app/games/${game.id}`}
                key={game.id}
                className="public-game-card"
              >
                <div className={`game-art-wrap ${game.color}`}>
                  <GameArt type={game.art} />
                  <span className="game-duration">
                    <Icon name="Clock" size={13} />
                    {game.time}
                  </span>
                </div>
                <div className="public-game-body">
                  <span className="eyebrow">{game.category}</span>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <span className="text-link">
                    Let’s play <Icon name="ArrowUpRight" size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="more-games">
            Also waiting for you:{" "}
            {games.slice(3, 6).map((g) => (
              <Link key={g.id} to={`/app/games/${g.id}`}>
                <Icon name={g.icon} size={16} />
                {g.title}
              </Link>
            ))}
          </div>
        </section>
        <section className="connection-section" id="family-connection">
          <div className="container connection-grid">
            <div className="connection-visual">
              <Photo
                src={images.family}
                alt="Loved ones sharing a happy family moment"
              />
              <div className="photo-caption">
                <span className="mini-heart">
                  <Icon name="Heart" size={21} />
                </span>
                <div>
                  <strong>Some things are better together.</strong>
                  <span>And some moments stay with us forever.</span>
                </div>
              </div>
              <div className="family-message">
                <Avatar src={images.anita} name="Anita" />
                <div>
                  <strong>
                    A little hello from Anita <span>❤️</span>
                  </strong>
                  <p>“Remember this day, Mum?”</p>
                  <small>Just shared a new memory</small>
                </div>
              </div>
            </div>
            <div className="connection-copy">
              <p className="eyebrow">NEVER TOO FAR FROM THE HEART</p>
              <h2>
                A family album.
                <br />A familiar voice.
                <br />
                <span className="green-text">A feeling of together.</span>
              </h2>
              <p>
                A photograph can start a conversation. A voice message can make
                someone’s day. SmritiCare makes it simple to keep showing up for
                each other.
              </p>
              <ul className="check-list">
                <li>
                  <Icon name="Check" />
                  Share photos and the stories behind them
                </li>
                <li>
                  <Icon name="Check" />
                  Send a little hello, in words or voice
                </li>
                <li>
                  <Icon name="Check" />
                  Create family memory challenges
                </li>
                <li>
                  <Icon name="Check" />
                  Celebrate every little milestone, together
                </li>
              </ul>
              <Button to="/login?role=family">
                Bring your family closer <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          </div>
        </section>
        <PremiumProgressShowcase />
        <PremiumPricing />
        <section
          className="section container garden-feature"
          id="memory-garden"
        >
          <div className="garden-feature-copy">
            <p className="eyebrow">YOUR EFFORT, BEAUTIFULLY GROWN</p>
            <h2>
              Good things grow
              <br />
              one moment at a time.
            </h2>
            <p>
              Every game, every memory, every connection plants something
              lovely. Your garden is a reflection of your journey—not a score to
              chase.
            </p>
            <div className="garden-stages">
              {[
                ["🌱", "A seed"],
                ["🌿", "A little growth"],
                ["🌳", "Taking root"],
                ["🌸", "In full bloom"],
              ].map(([icon, label]) => (
                <div key={label}>
                  <span>{icon}</span>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <Button to="/app/garden" variant="secondary">
              Step into your garden <Icon name="ArrowUpRight" size={18} />
            </Button>
          </div>
          <div className="garden-feature-art">
            <GardenScene hero />
            <span className="garden-note">
              Nothing to rush. So much to grow.
            </span>
          </div>
        </section>
        <section className="accessibility-section" id="accessibility">
          <div className="container">
            <div className="accessibility-heading">
              <span className="feature-icon">
                <Icon name="Accessibility" size={35} />
              </span>
              <div>
                <p className="eyebrow">COMFORT COMES FIRST</p>
                <h2>Made to feel easy. Because it should.</h2>
                <p>
                  Thoughtful details that make every visit a little more
                  comfortable.
                </p>
              </div>
              <Button
                variant="secondary"
                onClick={() =>
                  setModal({
                    title: "Your comfort comes first",
                    content: <AccessibilityPanel />,
                  })
                }
              >
                Make it yours <Icon name="SlidersHorizontal" size={18} />
              </Button>
            </div>
            <div className="accessibility-features">
              {[
                ["Type", "Easy-to-read text"],
                ["Hand", "Large, friendly controls"],
                ["Mic", "Voice-friendly navigation"],
                ["Sparkles", "A calm, gentle pace"],
              ].map(([icon, title]) => (
                <span key={title}>
                  <Icon name={icon} size={21} />
                  {title}
                </span>
              ))}
            </div>
          </div>
        </section>
        <PremiumStories />
        <PremiumFaq />
        <PremiumFinalCta />
      </main>
      <Footer />
    </div>
  );
}
function Footer() {
  const { setModal } = useStore();
  return (
    <footer className="public-footer" id="contact">
      <div className="container footer-main">
        <div>
          <Logo />
          <p>
            Memories that connect.
            <br />
            Moments that matter.
          </p>
          <small>A little more joy, every day.</small>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">Our story</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/games-preview">Our games</Link>
          <Link to="/pricing">Pricing & plans</Link>
          <Link to="/memory-garden">Memory Garden</Link>
        </div>
        <div>
          <h4>Stay connected</h4>
          <Link to="/family-connection">For families</Link>
          <button
            onClick={() =>
              setModal({
                title: "A little conversation",
                content: <ContactForm />,
              })
            }
          >
            Contact us
          </button>
          <Link to="/accessibility">Accessibility</Link>
        </div>
        <div className="footer-note">
          <Icon name="HeartHandshake" size={25} />
          <p>
            Designed for wellbeing.
            <br />
            Built around what matters.
          </p>
          <span className="demo-label">INTERACTIVE FRONTEND DEMO</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SmritiCare. Made with care.</span>
        <p>
          For mental engagement and family connection. Not a medical diagnostic
          tool.
        </p>
        <button
          onClick={() =>
            setModal({
              title: "Your privacy in this demo",
              content: (
                <p>
                  This prototype stores memories, settings, and activity only in
                  your browser’s localStorage. There is no real account security
                  or cloud sync. Anyone with access to this browser can view its
                  demo data. Please do not enter sensitive information.
                </p>
              ),
            })
          }
        >
          Privacy & demo notice
        </button>
      </div>
    </footer>
  );
}
function ContactForm() {
  const { notify, setModal } = useStore();
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setModal(null);
        notify("Thank you! This demo form does not send an email.", "💌");
      }}
    >
      <p className="muted">
        Try the contact experience. No message will be sent.
      </p>
      <label>
        Your name
        <input required placeholder="What should we call you?" />
      </label>
      <label>
        Email
        <input required type="email" placeholder="you@example.com" />
      </label>
      <label>
        Your message
        <textarea required rows="4" placeholder="What’s on your mind?" />
      </label>
      <Button type="submit" icon="Send">
        Send demo message
      </Button>
    </form>
  );
}
function StoryVideo() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const frames = [
    {
      image: images.hero,
      title: "A familiar face can brighten the whole day.",
      description: "Keep the people you love a little closer.",
    },
    {
      image: images.tea,
      title: "A little play. A little moment just for you.",
      description: "Gentle games for a pleasantly active mind.",
    },
    {
      image: images.garden,
      title: "Good things grow, one moment at a time.",
      description: "Your memories. Your people. Your little garden.",
    },
  ];
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () =>
        setIndex((i) => {
          if (i === 2) {
            setPlaying(false);
            return 2;
          }
          return i + 1;
        }),
      3500,
    );
    return () => clearInterval(timer);
  }, [playing]);
  return (
    <div className="story-video">
      <Photo src={frames[index].image} alt={frames[index].title} />
      <div className="story-video-caption">
        <span className="demo-label">
          ANIMATED STORY PREVIEW · NOT A VIDEO RECORDING
        </span>
        <h2>{frames[index].title}</h2>
        <p>{frames[index].description}</p>
      </div>
      <div className="video-controls">
        <button
          className="icon-btn"
          aria-label={playing ? "Pause story" : "Play story"}
          onClick={() => {
            if (index === 2) setIndex(0);
            setPlaying(!playing);
          }}
        >
          <Icon name={playing ? "Pause" : "Play"} />
        </button>
        <div className="dots">
          {frames.map((f, i) => (
            <button
              key={f.title}
              aria-label={`Story scene ${i + 1}`}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <span>{index + 1} / 3</span>
      </div>
    </div>
  );
}
export function AuthPage() {
  const { data, update, notify } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const signup = location.pathname === "/signup";
  const [role, setRole] = useState(
    new URLSearchParams(location.search).get("role") || "senior",
  );
  const [email, setEmail] = useState(
    role === "family" ? "family@smriticare.demo" : "senior@smriticare.demo",
  );
  const [password, setPassword] = useState("demo");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  function login(demo = false) {
    if (
      !demo &&
      !signup &&
      (password !== "demo" || email !== `${role}@smriticare.demo`)
    ) {
      setError("Please use the demo email shown below and password “demo”.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      update((d) => ({
        ...d,
        session: role,
        profile:
          signup && role === "senior" && name
            ? { ...d.profile, name }
            : d.profile,
      }));
      notify(
        `A warm welcome, ${role === "senior" ? name || data.profile.name : "Rahul"}!`,
        "🌷",
      );
      navigate(role === "family" ? "/family" : "/app/home");
    }, 400);
  }
  return (
    <div className="auth-page">
      <div className="auth-top">
        <Logo />
        <AccessibilityButton />
      </div>
      <main className="auth-grid">
        <div className="auth-story">
          <p className="eyebrow">A LITTLE SPACE THAT FEELS LIKE YOU</p>
          <h1>
            Good things grow
            <br />
            <span className="green-text">when we’re together.</span>
          </h1>
          <GardenScene hero />
          <p>Memories that connect. Moments that matter.</p>
        </div>
        <section className="auth-card">
          <span className="feature-icon sage">
            <Icon name="Sprout" size={26} />
          </span>
          <h2>{signup ? "Your story starts here." : "Lovely to see you."}</h2>
          <p className="muted">
            {signup
              ? "Make a little space for what matters."
              : "Come in. Your little garden is waiting."}
          </p>
          <div className="segmented">
            {["senior", "family"].map((r) => (
              <button
                key={r}
                className={role === r ? "active" : ""}
                onClick={() => {
                  setRole(r);
                  setEmail(`${r}@smriticare.demo`);
                  setError("");
                }}
              >
                <Icon name={r === "senior" ? "UserRound" : "Users"} size={18} />
                {r === "senior" ? "For myself" : "For my family"}
              </button>
            ))}
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            {signup && (
              <label>
                Your first name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Meera"
                />
              </label>
            )}
            <label>
              Email address
              <input
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" disabled={loading}>
              {loading
                ? "Opening your garden…"
                : signup
                  ? "Create demo profile"
                  : "Step into SmritiCare"}
              <Icon name="ArrowRight" size={18} />
            </Button>
          </form>
          <div className="or-divider">
            <span />
            or take a little look around
            <span />
          </div>
          <Button
            variant="secondary"
            onClick={() => login(true)}
            disabled={loading}
          >
            Continue as Demo User
          </Button>
          <div className="demo-credentials">
            <Icon name="Info" size={18} />
            <p>
              <strong>Just a demo. No real account needed.</strong>
              <br />
              {role}@smriticare.demo · Password: demo
              <br />
              Saved on this browser. Not a secure login.
            </p>
          </div>
          <p className="auth-switch">
            {signup ? "Already exploring?" : "New to our little garden?"}{" "}
            <Link to={signup ? "/login" : "/signup"}>
              {signup ? "Log in" : "Join SmritiCare"}
            </Link>
          </p>
          <Link className="back-link" to="/">
            <Icon name="ArrowLeft" size={16} /> Back to our story
          </Link>
        </section>
      </main>
    </div>
  );
}
