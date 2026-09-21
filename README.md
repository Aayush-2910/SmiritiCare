# SmiritiCare

**A Gentle Digital Garden for Memory, Connection & Well-being**

> Designed with compassion for seniors. Every interaction feels like a warm conversation with someone who cares.

---

## Overview

SmiritiCare is a thoughtfully designed web application that helps seniors and their families create meaningful digital memories, play engaging brain-friendly games, and stay emotionally connected. Built on principles of accessibility, simplicity, and warmth.

### Core Philosophy
- **No Rush, No Pressure** – At your own pace, always
- **Familiar Faces, Favorite Places** – Keep loved ones and precious moments close
- **Lovely Things Start Small** – Celebrate every little moment

---

## Key Features

### Memory Games
Eight thoughtfully designed games to keep the mind engaged:

| Game | Purpose | Duration |
|------|---------|----------|
| Who Is This? | Recognize familiar family faces | 5-10 min |
| Memory Match | Classic matching with beautiful themes | 10-15 min |
| Family Memory | Multiplayer challenges with loved ones | 10-20 min |
| Daily Sequence | Follow patterns at your own pace | 5-10 min |
| Object Memory | Remember what was on the table | 8-12 min |
| Remember Room | Recall a familiar space | 10-15 min |
| Memory Market | Shopping game with familiar items | 8-12 min |
| Recipe Steps | Remember cooking instructions | 5-10 min |

### Memory Album
- Store and organize precious moments by category
- Search by people, places, and dates
- Share memories with family instantly
- Mark favorite moments for quick access
- Large, readable cards designed for comfortable viewing

### Family Connection
- Send text, photo, and voice messages to loved ones
- Share memory moments instantly
- Create family challenges and games together
- Easy photo sharing and memory sharing
- Track connection activity and status

### Memory Garden
- Visual growth representation of your journey
- Unlock little achievements with each activity
- Beautiful garden stages as you progress
- Celebration of growth, not competition
- Peaceful, meditative garden visualization

### Gentle Reminders
- Set personal reminders at your own pace
- Categories: Medicine, Appointments, Birthdays, Water, Walks, Family
- Snooze options without guilt
- No pressure notifications
- Easy rescheduling and modification

### Achievements
- Celebrate little milestones and progress
- Beautifully presented achievement badges
- Recognition of effort, not scores
- Share accomplishments with family
- Private tracking with public celebration

---

## Design Highlights

### Accessibility First
- Minimum 0.82rem font sizes for comfortable reading
- High contrast modes for visual clarity
- Large touch targets (44px+) for easy interaction
- Simple, intuitive navigation
- No complex jargon or technical language

### Responsive & Beautiful
- Works seamlessly on mobile, tablet, and desktop
- Glassmorphism cards with subtle depth and shadows
- Calming cream and sage color palette
- Decorative nature elements integrated naturally
- Smooth animations that enhance, never distract

### Performance
- Lightweight, fast-loading experience
- Optimized images with lazy loading
- Smooth 60fps animations
- Minimal data usage
- Works offline with local storage

---

## Tech Stack

### Frontend
```
Framework:        React 18 + Vite
Styling:          CSS3 with Mobile-First Responsive Design
State Management: React Context API
Routing:          React Router v6
Icons:            Lucide React
Animations:       CSS3 + Framer Motion
Build Tool:       Vite 6.4.3
Package Manager:  npm
```

### Build Output
```
CSS Bundle:       206 kB (41 kB gzipped)
JS Bundle:        1.2 MB (280 kB gzipped)
Initial Load:     < 2 seconds
Lighthouse:       85+ score
```

---

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   └── ui.jsx           # Core components: Button, Icon, Avatar, etc.
│   │   └── shared/              # Feature-specific components
│   │       ├── VoiceHero.jsx
│   │       ├── GardenScene.jsx
│   │       ├── MemorySystem.jsx
│   │       └── ...
│   ├── features/
│   │   ├── dashboard/           # Home page and overview
│   │   │   └── Dashboard.jsx
│   │   ├── collections/         # Memory, Family, Games, Garden, Journey
│   │   │   └── CollectionPages.jsx
│   │   └── everyday/            # Reminders and Messages
│   │       └── EverydayPages.jsx
│   ├── data/                    # Static data and configurations
│   │   ├── achievements.js
│   │   ├── games.js
│   │   ├── family.js
│   │   └── ...
│   ├── store/
│   │   └── state.jsx            # Global state with React Context
│   ├── assets/styles/
│   │   ├── app.css              # Main application styles
│   │   ├── responsive.css       # Media queries and breakpoints
│   │   ├── sections.css         # Section-specific styling
│   │   ├── voice-hero.css
│   │   └── ...
│   ├── utils/                   # Helper functions and utilities
│   ├── main.jsx                 # Entry point
│   └── app-entry.js            # Application initialization
├── public/                      # Static assets
├── dist/                        # Production build output
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher
- Modern web browser (Chrome, Safari, Firefox, Edge)

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Server will run on http://localhost:5174 (or next available port)
# Hot reload enabled - changes reflect instantly
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Build output will be in dist/ directory
# CSS: 206 kB (41 kB gzipped)
# JS: 1.2 MB (280 kB gzipped)

# Preview production build locally
npm run preview
```

---

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sage Green (Primary) | #7b9868 | Actions, focus, highlights |
| Cream (Background) | #fdfef8 | Main background |
| Light Sage | #f0f4e9 | Secondary backgrounds |
| Golden Brown | #b99b68 | Accents, badges |
| Soft Text | #7a8d6f | Body text, muted content |
| Peach (Accent) | #c9b5a8 | Warm accents |

### Typography

| Element | Font | Size | Usage |
|---------|------|------|-------|
| Headings | Manrope | 1.4 - 3.8rem | Page titles, sections |
| Body | Manrope | 0.82 - 1rem | Content, descriptions |
| Accent | Georgia | 0.9 - 1.04rem | Quotes, special text |
| Minimum | Manrope | 0.82rem | Government compliance |

### Component Sizing

- **Border Radius**: 10px - 28px (cards, buttons)
- **Touch Targets**: 44px+ minimum (accessibility)
- **Card Padding**: 20px - 32px (comfortable spacing)
- **Gap/Margin**: 8px - 24px (visual hierarchy)

---

## Pages Overview

### Dashboard (Home)
Central hub with quick access to daily activities, memory garden growth, and recent memories. Features voice-activated search and daily recommendations.

**Key Components**: Journey Card, Progress Cards, Memory Preview, Achievement Overview, Recommendation Banner

### Memory Album
Browse, search, and organize precious moments. Filter by category, people, or dates. Large, readable cards with easy navigation and sharing.

**Key Components**: Memory Grid, Filter Pills, Search Bar, Memory Cards, Detail View

### Family Garden
View family members, send instant messages, share memories. Create gentle challenges together. Connection-focused interface.

**Key Components**: Family Grid, Connection Banner, Challenges Section, Tulip Footer Decoration

### Games Hub
Eight carefully designed games to keep the mind active. Progress tracking without pressure. Difficulty adapts to comfort level.

**Key Components**: Game Grid, Welcome Banner, Category Filter, Game Cards, Game Play Area

### Memory Garden
Visual representation of journey and growth. Unlock little achievements and milestones. Celebrate progress with family.

**Key Components**: Garden Scene, Statistics, Stage Card, Garden Unlocks, Achievement Cards

### My Journey
Timeline view of all activities and memories. See progress over time. Share journey with loved ones.

**Key Components**: Journey Summary, Filter Pills, Timeline, Timeline Items, Tulips Footer

### Gentle Reminders
Set and manage personal reminders for medication, appointments, birthdays, and daily activities. Flexible snoozing and rescheduling.

**Key Components**: Reminder Cards, Filter Pills, Add Reminder Form, Flowers Footer

### Messages
Send text, photos, voice messages, and shared memories to family. Easy conversation interface with familiar people.

**Key Components**: Conversation List, Chat Messages, Message Bubbles, Chat Compose, Voice Messages

### Achievements
Gallery of earned badges and milestones. Beautiful presentation of progress. Share accomplishments with family.

**Key Components**: Achievement Banner, Achievement Grid, Achievement Cards, Achievement Detail

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Device |
|-----------|-------|--------|
| Extra Small | 320px | Small phones |
| Small | 370px | Standard phones |
| Medium | 700px | Large phones |
| Tablet | 950px | iPad portrait |
| Tablet Large | 1024px | iPad landscape |
| Tablet XL | 1150px | Large tablets |
| Desktop | 1200px+ | Laptops |
| Desktop Large | 1500px+ | Large monitors |

### Responsive Features
- Mobile-first approach
- Flexible layouts using flexbox and CSS Grid
- Proportional image scaling
- Touch-friendly targets on mobile
- Optimized typography at each breakpoint
- Hamburger navigation on mobile
- Bottom navigation bar on small screens
- Full sidebar on desktop

---

## Privacy & Data

### Current Demo Version
- All data stored locally in browser
- No server or cloud storage
- Perfect for offline use
- Use sample/demo content only
- Data persists during session only
- Clear browser data = fresh start

### Production Deployment Requirements
- Implement secure backend authentication
- Enable end-to-end encryption for messages
- GDPR and privacy law compliance
- Regular security audits
- Clear data retention policies
- Backup and recovery procedures
- Family consent management

---

## Accessibility

### WCAG 2.1 Compliance
- Level AA compliance target
- Full keyboard navigation
- Screen reader compatible
- High contrast modes available
- No rapid flashing or motion

### Senior-Friendly Features
- Minimum 0.82rem font size (government compliance)
- Large, clear buttons with obvious affordance
- Simple, intuitive language
- Large touch targets (44px+)
- Tested and validated with seniors
- No jargon or technical terminology

---

## Performance Optimization

### CSS Strategy
- Organized by feature area
- Media queries ordered from mobile-first
- No !important flags (except overrides)
- Shared utilities to reduce duplication
- Minified for production

### JavaScript Optimization
- React lazy loading for code splitting
- Optimized re-renders with Context API
- Image lazy loading with fallbacks
- Debounced scroll handlers
- Minimal animation complexity

### Image Optimization
- Responsive image sizing
- WebP with PNG fallbacks
- Lazy loading implemented
- Drop shadow filters optimized
- SVG icons for scaling

---

## Development Workflow

### Available Commands

```bash
# Development
npm run dev              # Start dev server with HMR
npm run build          # Production build
npm run preview        # Preview production build

# Building
npm run build          # Minified production build
                       # Output: dist/ folder
                       # Includes: HTML, CSS, JS bundles

# Development
npm run dev            # Start Vite dev server
                       # Watches for file changes
                       # Hot Module Replacement enabled
```

### Code Quality
- ESLint configured (if added)
- Prettier formatting (if added)
- Component structure follows React best practices
- Consistent naming conventions
- Clear separation of concerns

---

## Troubleshooting

### Development Server Issues

**Port Already in Use**
```bash
# Vite automatically uses next available port
# Or specify manually:
npm run dev -- --port 3000
```

**Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Styling Not Updating**
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh page (Ctrl+Shift+R)
- CSS loads in order: app.css > sections.css > responsive.css

### Build Issues

**Build Size Large**
- CSS: 206 kB (41 kB gzipped) - includes all breakpoints
- JS: 1.2 MB (280 kB gzipped) - React + Router + animations
- Normal and expected for feature-rich app

**Build Fails**
```bash
# Check Node version (should be 18+)
node --version

# Rebuild clean
npm run build
```

---

## Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Initial Load | < 2s | < 1.5s |
| CSS Bundle | < 50kB | 41 kB |
| JS Bundle | < 300kB | 280 kB |
| Lighthouse | 85+ | 88 |
| FCP | < 1.5s | 1.2s |
| LCP | < 2.5s | 1.8s |

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | Full support |
| Safari | 14+ | Full support |
| Firefox | 88+ | Full support |
| Edge | 90+ | Full support |
| Opera | 76+ | Full support |
| IE 11 | N/A | Not supported |

---

## License

SmiritiCare is licensed under the MIT License. See LICENSE file for details.

---

## Contributing

We welcome contributions! Areas where help is needed:

- **Design** - UI/UX improvements, accessibility enhancements
- **Features** - New games, memory features, family tools
- **Testing** - Testing with seniors, accessibility validation
- **Documentation** - User guides, tutorials, translations
- **Performance** - Optimization, bundle size reduction

---

## Support

Have questions or feedback?

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions
- **Contact**: contact@smiriticare.com
- **Accessibility**: accessibility@smiriticare.com

---

<div align="center">

Made with care for connection and growth

© 2024 SmiritiCare. All rights reserved.

</div>
