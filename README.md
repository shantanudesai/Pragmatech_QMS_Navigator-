# PragmaTech Compliance Partners - ISO 9001/IATF 16949 Project Tracker

A comprehensive, interactive web-based tool for managing ISO 9001/IATF 16949 quality management system implementation projects. Designed specifically for automotive suppliers and compliance consultants to track progress through the complete certification journey with detailed implementation guidance.

![PragmaTech Logo](iso9001-tracker/pcp-logo.svg)

## 🎯 Overview

This professional-grade project tracker converts the complex ISO 9001/IATF 16949 implementation process into an intuitive, interactive checklist system with timeline management, progress tracking, detailed implementation guidance, and data persistence capabilities.

## ✨ Features

### 🔐 **Security**
- Password-protected access with elegant login interface
- Secure authentication with custom branding overlay

### 📊 **Project Management**
- **9 Implementation Phases**: From Project Initiation to Post-Certification Maintenance
- **100+ Activities**: Comprehensive checklist covering all ISO 9001/IATF 16949 requirements
- **Timeline Management**: Automated phase scheduling with date picker integration
- **Progress Tracking**: Real-time visual progress bars and completion statistics
- **Implementation Guidance**: Detailed how-to guides for each activity with ISO clauses, step-by-step instructions, and automotive examples

### 💾 **Data Management**
- **Local Storage**: Automatic save/restore of all project data (persists across sessions)
- **Export/Import**: JSON-based backup and sharing capabilities
- **Reset Functionality**: Clean slate option with confirmation dialogs
- **Logout Feature**: Secure logout while preserving progress data

### 🎨 **Professional Design**
- **Brand Integration**: Full PragmaTech Compliance Partners branding
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glass-morphism effects and professional color schemes
- **Accessibility**: Keyboard navigation and screen reader support

### 📱 **Cross-Platform Compatibility**
- **Pure Web Technology**: HTML5, CSS3, Vanilla JavaScript
- **No Dependencies**: Self-contained application (except CDN libraries)
- **Print Support**: Professional print layouts for documentation

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional for file:// protocol restrictions)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shantanudesai/pcp9001.git
   cd pcp9001
   ```

2. Start a local web server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000/iso9001-tracker/
   ```

4. Enter the access password: `PragmaTech@2025#9001`

## 📁 Project Structure

```
PCP_9001/
├── iso9001-tracker/           # Main application directory
│   ├── index.html            # Main HTML file
│   ├── app.js               # Application logic
│   ├── styles.css           # Styling and responsive design
│   ├── iso9001_plan.js      # ISO 9001 project data structure
│   ├── pcp-logo.svg         # PragmaTech brand logo
│   └── README.md            # Application documentation
├── requirements/             # Project requirements and documentation
│   └── iso_9001_project_plan.md
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3 (with CSS Custom Properties), Vanilla JavaScript
- **Storage**: LocalStorage API for data persistence
- **Libraries**: 
  - Flatpickr (date picker)
  - DayJS (date manipulation)
- **Architecture**: Class-based JavaScript with modular design
- **Styling**: Custom CSS with responsive breakpoints and accessibility features

## 🎯 Target Users

- **Automotive Suppliers**: Companies implementing ISO 9001/IATF 16949 for automotive certification
- **Compliance Consultants**: Professional ISO 9001/IATF 16949 implementation specialists
- **Quality Managers**: In-house quality management professionals in automotive industry
- **Organizations**: Companies seeking ISO 9001/IATF 16949 certification
- **Auditors**: Internal and external audit professionals

## 📋 ISO 9001 Implementation Phases

1. **Project Initiation & Planning** (4 weeks)
2. **Gap Analysis & Current State Assessment** (2 weeks)  
3. **QMS Documentation Development** (8 weeks)
4. **Implementation & Training** (6 weeks)
5. **Internal Auditing System** (3 weeks)
6. **Management Review Process** (2 weeks)
7. **Corrective Actions & Improvements** (4 weeks)
8. **Certification Audit Preparation** (3 weeks)
9. **Post-Certification & Maintenance** (Ongoing)

## 🔒 Security Features

- Client-side password authentication
- Secure data handling with local storage
- No server-side data transmission
- Professional login interface with brand protection

## 🎨 Brand Guidelines

This application incorporates the full PragmaTech Compliance Partners brand identity:
- **Colors**: Cyan to purple gradient (#4FC3F7 → #8E24AA)
- **Typography**: Professional sans-serif font stack
- **Logo**: Custom SVG with trademark-ready design
- **Layout**: Clean, modern interface with glass-morphism effects

## 📱 Browser Support

- **Chrome**: 88+
- **Firefox**: 85+  
- **Safari**: 14+
- **Edge**: 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+

## 🛠️ Development

### Local Development
```bash
# Clone and navigate to project
git clone https://github.com/shantanudesai/pcp9001.git
cd pcp9001/iso9001-tracker

# Start development server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Code Structure
- **app.js**: Main application class with state management
- **styles.css**: Comprehensive styling with CSS custom properties
- **iso9001_plan.js**: Complete ISO 9001 project data structure
- **index.html**: Semantic HTML structure with accessibility features

## 💾 Data Storage Strategy

### **Automatic Progress Persistence**
- **LocalStorage**: All project progress is automatically saved to your browser's local storage
- **Real-time Saving**: Every task completion, date change, and configuration is immediately saved
- **Session Persistence**: Your progress remains even after closing the browser or logging out

### **Backup & Recovery**
- **Export Functionality**: Download your complete project data as JSON files
- **Import Capability**: Restore progress from previously exported files
- **Recommended Practice**: Export your data regularly as backup, especially before major milestones

### **Data Security**
- **Client-side Only**: All data remains on your local machine - nothing is sent to external servers
- **No Account Required**: No registration or personal data collection
- **Privacy Focused**: Your implementation progress stays completely private

### **Best Practices**
1. **Regular Exports**: Export your data weekly or at each phase completion
2. **Multiple Backups**: Keep exports in different locations (cloud storage, USB drives)
3. **Team Sharing**: Use export/import to share progress with team members or consultants
4. **Version Control**: Name exports with dates (e.g., `iso9001-project-2025-01-15.json`)

## 📄 License

© 2025 PragmaTech Compliance Partners. All rights reserved.

## 📞 Contact

**PragmaTech Compliance Partners**
- Website: [pragmatechcompliance.com](https://pragmatechcompliance.com/)
- Email: contact@pragmatechcompliance.com

---

*Professional ISO 9001/IATF 16949 implementation made simple and efficient with comprehensive guidance.* 