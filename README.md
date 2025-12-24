# AI_1 Project - Figma to Code Implementation

A showcase of implementing Figma designs into production-ready code, featuring three progressive versions of UI components from basic cards to complete mobile interfaces.

![Project Banner](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🎯 Overview

This project demonstrates the complete workflow of converting Figma designs into pixel-perfect, production-ready components. Built using the Figma API and MCP (Model Context Protocol), it showcases three different complexity levels of UI implementation.

## 🚀 Quick Start

### View the Demo

Simply open `index.html` in your browser:

```bash
open index.html
# or
file:///path/to/AI_1/index.html
```

No build process required! The demo is a standalone HTML file with embedded styles and interactivity.

### Use Components in Your React Project

1. Copy the desired component file:
   - `AttachmentCard.tsx` (Version 1)
   - `MobileAppV2.tsx` (Version 2)
   - `MobileAppV3.tsx` (Version 3)

2. Import and use in your React app:

```tsx
import AttachmentCard from './AttachmentCard';

function App() {
  return (
    <AttachmentCard
      title="Devis chaudière pour mme Ramondin"
      onClick={() => console.log('Clicked!')}
    />
  );
}
```

## 📁 Project Structure

```
AI_1/
├── index.html              # Interactive demo showcase
├── AttachmentCard.tsx      # Version 1: Simple card component
├── MobileAppV2.tsx         # Version 2: Mobile navigation
├── MobileAppV3.tsx         # Version 3: Complete mobile page
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## 🎨 Version Details

### Version 1: Attachment Card Component

**Source:** Figma node `1:186` - "Attachment container"

A reusable card component for displaying document attachments.

**Features:**
- White background with blue border (`#6778ED`)
- Document icon (receipt-text) - 24x24px
- Dynamic title text with Poppins Regular 14px
- Chevron-right icon - 16x16px
- Interactive hover states with smooth transitions
- Fully accessible button element

**Props:**
```typescript
interface AttachmentCardProps {
  title: string;
  onClick?: () => void;
}
```

**Design Specs:**
- Border: 1px solid #6778ED
- Border radius: 8px
- Padding: 16px
- Gap: 12px
- Text color: #6274A0

---

### Version 2: Mobile App Navigation

**Source:** Figma node `1:84` - "perso mobile 26" (Navigation only)

A mobile-first navigation header component.

**Features:**
- Back button with chevron-left icon
- Service title: "Services Plomberie Aqua"
- Verified badge icon (cyan star with checkmark)
- 3-dot vertical menu button
- Sticky positioning support
- Mobile-optimized (376px width)

**Props:**
```typescript
interface MobileAppProps {
  onBack?: () => void;
  onMenu?: () => void;
}
```

**Design Specs:**
- Background: #FFFFFF
- Padding: 16px
- Title font: Poppins SemiBold 14px, #465C88
- Button backgrounds: #EEF0F7
- Badge color: #03C5B8

---

### Version 3: Complete Mobile Page

**Source:** Figma node `1:84` - "perso mobile 26" (Full implementation)

A complete mobile application page with navigation and interactive content.

**Features:**
- Full navigation header (same as V2)
- Content area with feedback section
- Question prompt: "Est-il votre artisan pour ce projet ?"
- "Oui" button with checkmark icon
- "Non" button
- Complete mobile app container
- Fully responsive interactions

**Props:**
```typescript
interface MobileAppV3Props {
  onBack?: () => void;
  onMenu?: () => void;
  onYes?: () => void;
  onNo?: () => void;
}
```

**Design Specs:**
- Container: 376px × 812px (iPhone 11 Pro)
- Feedback section background: #F5F7FD
- Yes button border: #03C5B8
- No button border: #E9ECEF
- Question text: Poppins Regular 16px, #6274A0
- Button text: Poppins SemiBold 16px

## 🔧 Technical Details

### Technologies Used

- **React** with TypeScript for components
- **Inline CSS** for styling (no dependencies)
- **SVG icons** embedded directly (no icon library needed)
- **Poppins font** from Google Fonts
- **Figma API** for design extraction
- **MCP (Model Context Protocol)** for Figma integration

### Design System

**Colors:**
- Primary Blue: `#6778ED`
- Primary Cyan: `#03C5B8`
- Text Primary: `#465C88`
- Text Secondary: `#6274A0`
- Background Light: `#F5F7FD`
- Background Gray: `#EEF0F7`
- Border Gray: `#E9ECEF`
- White: `#FFFFFF`

**Typography:**
- Font Family: Poppins
- Weights: 400 (Regular), 600 (SemiBold)
- Sizes: 14px, 16px
- Line Height: 120%

**Spacing:**
- Base unit: 8px
- Common values: 8px, 12px, 16px, 24px

## 🌐 Accessing on GitHub

### For Viewers

1. Navigate to the repository
2. Click on `index.html`
3. Click the "Raw" button
4. Copy the URL
5. Use GitHub Pages or any static hosting service

### GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Select branch (usually `main`)
4. Select folder: `/ (root)`
5. Click Save
6. Access at: `https://yourusername.github.io/AI_1`

## 🔗 Figma Source

Original designs from: [Figma File](https://www.figma.com/design/fu0tgfFuSXZ9nWDCLvokpF/test-IA)

- Version 1: Node `1:186`
- Version 2 & 3: Node `1:84`

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Created using Claude Code with Figma MCP integration.

## 📚 Learn More

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol](https://www.anthropic.com/mcp)
- [React Documentation](https://react.dev)

---

**Note:** This project demonstrates design-to-code workflow automation using AI. All implementations match Figma specifications exactly.
