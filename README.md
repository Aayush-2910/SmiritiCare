# SmiritiCare 🌱

A compassionate digital companion designed for seniors and their families. SmiritiCare helps preserve precious memories, strengthen family connections, and keep daily routines enjoyable through gentle, accessible activities and games.

## ✨ Features

### 🎮 Memory Games
- **Who Is This?** - Identify family members in photos
- **Memory Match** - Classic matching game with family photos
- **Family Memory** - Connect memories with loved ones
- **Remember Room** - Spatial memory challenges
- **Daily Sequence** - Order recognition games
- **Object Memory** - Visual object identification
- **Recipe Steps** - Put cooking steps in order
- **Memory Market** - Interactive memory marketplace

### 📚 Core Features
- **Personal Dashboard** - Customized daily journey with voice assistant
- **Memory Garden** - Visual representation of daily activities and progress
- **Family Albums** - Organize and share precious moments
- **Daily Reminders** - Gentle nudges for water, walks, and moments of joy
- **Achievement System** - Celebrate little wins and consistency
- **Family Connections** - Send memories and messages to loved ones
- **Voice Assistant** - Hands-free navigation and game starting

### 🎨 Design Features
- **Government Compliance Ready** - Large, readable text sizes (0.82rem minimum)
- **Accessible Interface** - High contrast, clear typography
- **Responsive Design** - Works seamlessly on desktop and tablets
- **Decorative Elements** - Warm, encouraging garden-themed visuals
- **Soothing Aesthetics** - Calming color palette (sage, peach, amber tones)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Router**: React Router DOM 6.28.0
- **Build Tool**: Vite 6.0.0
- **Styling**: Tailwind CSS 3.4.17 + PostCSS
- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.468.0
- **Node**: JavaScript (ES Modules)

## 📁 Project Structure

```
SmiritiCare/
├── frontend/                         # Main React application
│   ├── src/
│   │   ├── assets/styles/           # Global & component-specific CSS
│   │   ├── components/              # Reusable React components
│   │   │   ├── common/              # UI component library
│   │   │   ├── layout/              # AppShell & layout wrappers
│   │   │   └── shared/              # Voice hero, garden, memory system
│   │   ├── features/                # Feature-based modules
│   │   │   ├── dashboard/           # Main dashboard
│   │   │   ├── games/               # All game implementations
│   │   │   ├── collections/         # Album & memory collections
│   │   │   └── everyday/            # Daily activities
│   │   ├── data/                    # Static & mock data
│   │   ├── store/                   # Global state management
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── services/                # API services
│   │   ├── utils/                   # Utility functions
│   │   └── tests/                   # Test files
│   ├── public/                      # Static assets
│   ├── index.html                   # Vite entry point
│   ├── package.json                 # Dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind configuration
│   └── postcss.config.js            # PostCSS configuration
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📝 Recent Updates

### Dashboard Enhancements
- ✅ Fixed Vite build configuration with centralized CSS imports
- ✅ Reorganized frontend folder structure for scalability
- ✅ Implemented Voice Hero component with circular design and ripple animations
- ✅ Increased font sizes across the application for government compliance (minimum 0.82rem)
- ✅ Added decorative fence elements at journey card bottom
- ✅ Integrated hanging plant pot decoration
- ✅ Enhanced logo styling (Smriti: green + bold, Care: black + light)
- ✅ Added mushroom decorations at dashboard footer

### Component Improvements
- Voice Assistant Hero - Circular image container with listening animations
- Responsive Garden Scene - Visual representation of progress
- Memory Cards - Compact and detailed views for different contexts
- Progress Indicators - Beautiful progress bars and achievement badges
- Family Action Bar - Quick access to family-specific features

### Accessibility Improvements
- Enlarged all small text (eyebrows, descriptions, labels)
- Improved color contrast ratios
- Added meaningful alt text for decorative elements
- Ensured keyboard navigation support
- Clear focus indicators throughout

## 🎯 Architecture

### Feature-First Organization
The project follows a feature-first architecture where related code (components, styles, logic) is grouped together by feature. This makes it easier to:
- Locate feature-specific code
- Maintain independence between features
- Scale the application
- Onboard new team members

### Component Structure
- **Common Components** (`ui.jsx`) - Reusable UI building blocks
- **Shared Components** - Cross-feature components (VoiceHero, GardenScene, MemorySystem)
- **Feature Components** - Feature-specific implementations
- **Layout Components** - AppShell and routing wrappers

### State Management
Global state managed through React Context API with centralized store in `src/store/state.jsx` for:
- User profile data
- Completed activities
- Memories and reminders
- Family connections
- Modal states and notifications

## 🎨 Styling Approach

### CSS Organization
- **Global Styles** (`style.css`) - Design tokens, typography, utilities
- **App Styles** (`app.css`) - Dashboard and major layout styles
- **Game Styles** (`games.css`) - Game-specific styling
- **Responsive Styles** (`responsive.css`) - Mobile and tablet breakpoints
- **Component Styles** (component-specific CSS) - Voice hero, gardens, etc.

### Design System
- **Color Palette**: Sage, peach, amber, green, cream tones
- **Typography**: Manrope (headers), DM Sans (body), Georgia (quotes)
- **Spacing**: Consistent rem-based values
- **Shadows**: Subtle drop shadows for depth
- **Radius**: 10-20px border-radius for friendliness

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI library |
| React Router | 6.28.0 | Client-side routing |
| Framer Motion | 11.11.17 | Animations & transitions |
| Lucide React | 0.468.0 | Icon library |
| Tailwind CSS | 3.4.17 | Utility-first CSS |
| Vite | 6.0.0 | Build tool & dev server |
| PostCSS | 8.4.49 | CSS processing |
| Autoprefixer | 10.4.20 | CSS vendor prefixes |

## 🔄 Development Workflow

### Hot Module Reloading
Development server supports HMR for instant feedback on changes:
```bash
npm run dev
# Edit files and see changes instantly
```

### Build Process
```bash
# Development build (unoptimized, source maps)
npm run dev

# Production build (optimized, minified)
npm run build

# Preview production build locally
npm run preview
```

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ♿ Accessibility Commitment

SmiritiCare is built with accessibility in mind:
- **WCAG 2.1 Level AA** compliance target
- Large, readable text sizes (government-approved)
- High contrast ratios
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly

*Note: Full accessibility validation requires manual testing with assistive technologies and expert review.*

## 🤝 Contributing

When adding new features or components:
1. Follow the existing folder structure
2. Use the component library for UI elements
3. Maintain consistent styling with the design system
4. Ensure text sizes meet accessibility requirements
5. Test on multiple screen sizes
6. Add meaningful alt text to images
7. Update documentation accordingly

## 📄 License

This project is developed with care for seniors and their families.

## 👥 Support

For questions or issues, please reach out to the development team.

---

**Built with ❤️ for connection and memory preservation**
