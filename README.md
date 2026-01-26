# Sketchit - Modern Digital Agency Homepage

A modern, responsive homepage for a digital agency built with React, Vite, Tailwind CSS, and multilingual support.

## Features

- 🎨 **Modern Design** - Clean, minimalist design with a focus on digital experiences
- 🌍 **Multilingual Support** - Built-in support for English, Spanish, and French (easily extensible)
- 🎨 **Customizable Colors** - Centralized color configuration for easy theme customization
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Customization

### Changing Colors

All colors are centralized in `src/config/colors.js`. Simply edit the color values in this file to change the theme across the entire application.

Example:
```javascript
// src/config/colors.js
const colors = {
  primary: {
    DEFAULT: '#000000',  // Change this to your brand color
    light: '#1a1a1a',
    dark: '#000000',
  },
  // ... other colors
};
```

The colors are automatically imported into Tailwind CSS, so you can use them with Tailwind classes like `bg-primary`, `text-primary`, etc.

### Adding Languages

1. Add a new translation file in `src/i18n/locales/` (e.g., `de.json` for German)
2. Add the language to the `resources` object in `src/i18n/config.js`
3. Add the language option to the `languages` array in `src/components/Header.jsx`

Example translation file structure:
```json
{
  "nav": {
    "home": "Home",
    "solutions": "Solutions",
    "ourWork": "Our Work",
    "contact": "Contact"
  },
  "hero": {
    "discoverProcess": "Discover Our Process",
    "headline": "Creating High-Impact Digital Experiences With Purpose",
    "uiuxDesign": "UI/UX Design",
    "branding": "Branding",
    "startDesign": "Start Design"
  },
  "cta": {
    "bookCall": "Book a Call"
  }
}
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header with language selector
│   └── Hero.jsx        # Main hero section with laptop mockup
├── config/
│   └── colors.js       # Centralized color configuration
├── i18n/               # Internationalization
│   ├── config.js       # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json
│       ├── es.json
│       └── fr.json
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-i18next** - Internationalization framework
- **i18next** - Core internationalization framework

## License

MIT
