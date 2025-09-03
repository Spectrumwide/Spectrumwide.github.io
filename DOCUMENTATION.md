# Spectrum Portfolio Website Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Setup Guide](#setup-guide)
4. [File Structure](#file-structure)
5. [Styling Guide](#styling-guide)
6. [Component Documentation](#component-documentation)
7. [Maintenance Guide](#maintenance-guide)

## Project Overview

The Spectrum Portfolio Website is a personal portfolio showcasing professional experience, projects, and technical skills. It features a responsive design with smooth animations and interactive elements.

## Technical Architecture

### Frontend Technologies

- **HTML5**: Structure and content
- **CSS3/SASS**: Styling and animations
- **JavaScript**: Interactivity and animations
- **Bootstrap 4.5.2**: Responsive grid system and components
- **Font Awesome 4.7.0**: Icons
- **Google Fonts**: Typography (Poppins font family)

### Build Tools

- **Gulp**: SASS compilation
- **Node.js**: Development environment

## Setup Guide

### Prerequisites

- Node.js and npm installed
- Basic knowledge of SASS and Gulp

### Installation Steps

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run SASS compiler:
   ```bash
   npm run gulp
   ```

### Development Server

Use any of these methods to run a local server:

- Python: `python3 -m http.server 8000`
- VS Code: Live Server extension
- Node.js: `http-server`

## File Structure

```
Spectrumwide.github.io/
├── Assets/                  # Media files
│   ├── images
│   └── project-screenshots
├── css/                    # Compiled CSS
│   └── index.css
├── sass/                   # SASS source files
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── index.scss
├── projects/              # Project pages
│   ├── Audit.html
│   ├── BMS.html
│   ├── FYP.html
│   ├── Pokemon.html
│   ├── SKF.html
│   └── strings.html
├── scripts/              # JavaScript
│   └── script.js
├── index.html           # Main page
├── gulpfile.js         # Gulp configuration
└── package.json        # Dependencies
```

## Styling Guide

### SASS Structure

- **\_variables.scss**: Global variables
- **\_mixins.scss**: Reusable mixins
- **index.scss**: Main SASS file

### CSS Architecture

- BEM methodology for class naming
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts

### Theme Colors

- Primary colors
- Secondary colors
- Background colors
- Text colors

## Component Documentation

### Navigation

- Responsive navbar with hamburger menu
- Smooth scroll to sections

### Hero Section

- Full-screen layout
- Animated background
- Call-to-action button

### Skills Section

- Grid layout for skill icons
- Hover effects
- Categorized skills display

### Projects Grid

- Responsive card layout
- Project preview images
- Hover effects
- Links to detailed project pages

### Experience Timeline

- Vertical timeline layout
- Company logos
- Skill badges
- Animated on scroll

### Contact Section

- Social media links
- Email integration
- Professional icons

## Maintenance Guide

### Adding New Projects

1. Create new project HTML file in `/projects`
2. Add project images to `/Assets`
3. Update projects grid in `index.html`
4. Add corresponding styles if needed

### Updating Skills

1. Add skill icon to `/Assets`
2. Update skills section in `index.html`
3. Maintain consistent icon sizes

### SASS Compilation

1. Make changes in SASS files
2. Run `npm run gulp` to compile
3. Gulp watch will automatically compile on save

### Performance Optimization

- Optimize images before adding
- Minify CSS and JavaScript for production
- Use appropriate image formats and sizes
- Implement lazy loading for images

### SEO Considerations

- Maintain proper meta tags
- Use semantic HTML
- Optimize image alt texts
- Keep content updated

## Support and Contact

For any technical issues or questions, please contact:

- Email: [Your Email]
- GitHub: [GurukiranD2019](https://github.com/GurukiranD2019)
- LinkedIn: [Gurukiran D](https://www.linkedin.com/in/gurukiran-d-192362194/)
