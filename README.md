# SmiritiCare

A gentle digital platform for seniors to enjoy memory games, share moments with family, and stay connected.

---

## Quick Start

```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5174
```

---

## Features

- **8 Memory Games** - Who Is This, Memory Match, Family Memory, Daily Sequence, Object Memory, Remember Room, Memory Market, Recipe Steps
- **Memory Album** - Store, organize, and share precious moments
- **Family Messaging** - Text, voice, and memory sharing with loved ones
- **Memory Garden** - Visual journey tracking with achievements
- **Gentle Reminders** - Medicine, appointments, birthdays, and daily routines
- **Achievements** - Celebrate milestones and progress

---

## Tech Stack

- React 18 + Vite
- CSS3 with Responsive Design
- React Router v6
- React Context API
- Lucide Icons

---

## Project Structure

```
frontend/src/
├── features/          # Pages (Dashboard, Collections, Everyday)
├── components/        # Reusable UI components
├── data/              # Static data
├── store/             # Global state
├── assets/styles/     # CSS files
└── utils/             # Helper functions
```

---

## Build

```bash
npm run build        # Production build
npm run preview      # Preview build
```

Output: 206 kB CSS + 1.2 MB JS (gzipped: 41 kB + 280 kB)

---

## Browser Support

Chrome, Safari, Firefox, Edge (latest versions)

---

## Responsive Breakpoints

- Mobile: 320px - 699px
- Tablet: 700px - 1149px
- Desktop: 1150px+

---

## Accessibility

- WCAG 2.1 Level AA
- Minimum 0.82rem font size
- 44px+ touch targets
- Keyboard navigation
- High contrast support

---

## Design

- Color: Sage green, cream, golden brown
- Font: Manrope (body), Georgia (accent)
- Cards: Glassmorphism with soft shadows
- Animations: Smooth, purposeful
- Decorations: Nature-themed (flowers, butterflies, garden)

---

## Development

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production
```

---

## Key Files

- `frontend/src/assets/styles/app.css` - Main styles
- `frontend/src/assets/styles/responsive.css` - Media queries
- `frontend/src/assets/styles/sections.css` - Section-specific styles
- `frontend/src/store/state.jsx` - Global state
- `frontend/src/features/` - All pages

---

## Performance

- Initial Load: < 2 seconds
- Lighthouse: 88+
- Mobile optimized
- Lazy loading enabled

---

## Privacy

- Frontend demo (data stored locally)
- No server backend
- Use sample content only
- For production: Add authentication & encryption

---

## Accessibility Features

- Senior-friendly interface
- Large, readable text
- Simple navigation
- No jargon
- Voice search support

---

## Contributing

Bug reports, features, and accessibility improvements welcome.

---

## License

MIT License

---

Made with care for seniors and families.
