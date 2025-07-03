# ISO 9001 Project Tracker

A professional, interactive web application for tracking ISO 9001 implementation projects from zero to certification.

## Overview

This tool transforms the comprehensive ISO 9001 implementation project plan into an interactive, browser-based tracker designed for PragmaTech Compliance Partners consultants and their clients.

## Features

- ✅ **Interactive Checklist System** - Track 100+ implementation activities across 9 project phases
- 📅 **Timeline Management** - Set project start date and auto-calculate phase deadlines
- 📊 **Progress Visualization** - Real-time progress bars and completion statistics
- 💾 **Data Persistence** - LocalStorage saves progress across browser sessions
- 📤 **Export/Import** - JSON backup functionality for data portability
- 📱 **Mobile Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Professional UI** - Business-appropriate design with PragmaTech branding

## Quick Start

1. **Open the Application**
   ```bash
   # Simply open index.html in any modern web browser
   open index.html
   ```

2. **Set Project Start Date**
   - Click the date picker in the header
   - Select your project start date
   - Timeline calculations will automatically update

3. **Track Progress**
   - Click phase headers to expand/collapse sections
   - Check off completed activities
   - Monitor overall progress in the header

4. **Export Progress**
   - Use the Export button to download progress as JSON
   - Import previously saved progress files

## Project Structure

```
iso9001-tracker/
├── index.html          # Main application interface
├── styles.css          # Professional styling and responsive design
├── app.js             # Core application logic and state management
├── iso9001_plan.js    # Project data (9 phases, 100+ activities)
└── README.md          # This file
```

## Technical Details

- **Technology**: Vanilla JavaScript, HTML5, CSS3
- **Dependencies**: Flatpickr (date picker), DayJS (date manipulation)
- **Storage**: Browser LocalStorage for persistence
- **Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

## ISO 9001 Implementation Phases

1. **Project Initiation and Planning** (3 weeks)
2. **Foundation Setup** (3 weeks)
3. **Process Analysis and Documentation** (4 weeks)
4. **System Development** (6 weeks)
5. **Training and Awareness** (2 weeks)
6. **Internal Audit and Management Review** (3 weeks)
7. **Pre-Certification Activities** (2 weeks)
8. **Certification Audit** (2 weeks)
9. **Post-Certification Maintenance** (Ongoing)

## Usage Tips

- **Expanding Phases**: Click any phase header to view detailed activities
- **Progress Tracking**: The application automatically calculates completion percentages
- **Timeline View**: Set a start date to see projected completion dates for each phase
- **Data Backup**: Regular exports ensure you never lose progress
- **Print Friendly**: Use browser print for physical copies

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Deployment

This is a static web application that can be:
- Opened directly in browsers
- Hosted on any web server
- Deployed to GitHub Pages, Vercel, Netlify, etc.
- Run offline once loaded

## About PragmaTech Compliance Partners

Professional ISO 9001 implementation specialists helping organizations achieve quality management certification.

**Website**: [pragmatech-compliance-partners.vercel.app](https://pragmatech-compliance-partners.vercel.app/)
**Contact**: contact@pragmatechcompliance.com

---

*Built for compliance professionals who value efficiency and professionalism.* 