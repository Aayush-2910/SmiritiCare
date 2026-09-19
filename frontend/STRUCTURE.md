# Frontend Structure Documentation

## 📁 Project Structure

```
frontend/
├── public/                          # Static assets & HTML files  
│   └── app.html                     # App HTML (secondary entry)
│
├── src/                             # Source code
│   ├── assets/                      # Static assets (images, styles, fonts)
│   │   └── styles/                  # CSS stylesheets
│   │       ├── app.css              # App-specific styles
│   │       ├── games.css            # Game styles
│   │       ├── public.css           # Public page styles
│   │       ├── responsive.css       # Responsive design styles
│   │       └── style.css            # Global styles
│   │
│   ├── components/                  # Reusable React components
│   │   ├── common/                  # Common UI components
│   │   │   └── ui.jsx               # UI component library
│   │   ├── layout/                  # Layout components
│   │   │   └── AppShell.jsx         # Main app shell/wrapper
│   │   └── shared/                  # Shared feature components
│   │       ├── GardenScene.jsx      # Garden visualization
│   │       └── MemorySystem.jsx     # Memory system component
│   │
│   ├── data/                        # Static data & mock data
│   │   ├── achievements.js          # Achievement data
│   │   ├── family.js                # Family data
│   │   ├── games.js                 # Games data
│   │   ├── garden.js                # Garden data
│   │   ├── images.js                # Image references
│   │   ├── memories.js              # Memory data
│   │   ├── messages.js              # Message data
│   │   ├── reminders.js             # Reminder data
│   │   └── users.js                 # User data
│   │
│   ├── features/                    # Feature-based modules
│   │   ├── collections/             # Collections feature
│   │   │   └── CollectionPages.jsx  # Collection pages
│   │   ├── dashboard/               # Dashboard feature
│   │   │   └── Dashboard.jsx        # Main dashboard
│   │   ├── everyday/                # Everyday activities feature
│   │   │   └── EverydayPages.jsx    # Everyday pages
│   │   └── games/                   # Games feature
│   │       ├── DailySequence.jsx    # Daily sequence game
│   │       ├── FamilyMemory.jsx     # Family memory game
│   │       ├── GamePage.jsx         # Game page wrapper
│   │       ├── MemoryMarket.jsx     # Memory market game
│   │       ├── MemoryMatch.jsx      # Memory match game
│   │       ├── ObjectMemory.jsx     # Object memory game
│   │       ├── RecipeSteps.jsx      # Recipe steps game
│   │       ├── RememberRoom.jsx     # Remember room game
│   │       ├── shared.jsx           # Shared game utilities
│   │       └── WhoIsThis.jsx        # Who is this game
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── (empty - ready for custom hooks)
│   │
│   ├── pages/                       # Page components
│   │   └── Public.jsx               # Public landing page
│   │
│   ├── services/                    # API services & external integrations
│   │   └── (empty - ready for API services)
│   │
│   ├── store/                       # State management
│   │   └── state.jsx                # Global state management
│   │
│   ├── tests/                       # Test files
│   │   ├── verification.html        # Verification test page
│   │   └── verification.js          # Verification test scripts
│   │
│   ├── utils/                       # Utility functions
│   │   └── (empty - ready for utilities)
│   │
│   ├── app-entry.js                 # App entry point
│   ├── boot.js                      # Bootstrap logic
│   └── main.jsx                     # Main React entry
│
├── index.html                       # Main HTML entry (Vite expects it here)
├── package.json                     # Dependencies & scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── vite.config.js                   # Vite build configuration
```

## 📂 Folder Descriptions

### `/public`
Contains static files that are served directly. HTML files and assets that don't need processing.

### `/src/assets`
Static assets like images, fonts, and stylesheets that are imported in the code.

### `/src/components`
Reusable UI components organized by type:
- **common**: Generic UI components used across the app
- **layout**: Layout wrapper components
- **shared**: Feature-specific shared components

### `/src/config`
Build and styling configuration files (Tailwind, PostCSS, etc.)

### `/src/data`
Static data, mock data, and data models used throughout the app.

### `/src/features`
Feature-based organization following the "feature-first" architecture pattern. Each feature contains its pages, components, and logic.

### `/src/hooks`
Custom React hooks for reusable logic (e.g., useAuth, useFetch, etc.)

### `/src/pages`
Top-level page components that represent routes in the application.

### `/src/services`
API calls, external service integrations, and data fetching logic.

### `/src/store`
Global state management (Redux, Context API, Zustand, etc.)

### `/src/tests`
Test files and testing utilities.

### `/src/utils`
Helper functions, constants, and utility modules used across the app.

## 🎯 Architecture Benefits

1. **Feature-First Organization**: Related code is grouped by feature, making it easier to develop and maintain
2. **Separation of Concerns**: Clear boundaries between UI, logic, data, and configuration
3. **Scalability**: Easy to add new features without affecting existing code
4. **Maintainability**: Logical structure makes it easy to find and update code
5. **Team Collaboration**: Clear organization helps multiple developers work together

## 🚀 Next Steps

Consider adding:
- Custom hooks in `/src/hooks` (useLocalStorage, useAuth, etc.)
- API services in `/src/services` (authService, gameService, etc.)
- Utility functions in `/src/utils` (formatters, validators, etc.)
- Additional tests in `/src/tests`
