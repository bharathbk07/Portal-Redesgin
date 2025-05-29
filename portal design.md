# Portal Design Notes

This document outlines the design and technology choices for the frontend of the Performance Test Automation UI Portal.

## Frontend Stack:
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Language:** TypeScript

## Design System Approach:
- **Philosophy:** Minimalist design system.
- **Key Characteristics:**
  - Rounded cards and elements.
  - Subtle shadows for depth.
  - Consistent use of icons.
  - Large, readable typography.
  - Responsive, fluid layout.
- **Theme:** Supports both Dark and Light modes.

## Core UI Components Developed (Phase 1):
- **`Button`**: Standard actions, multiple variants (primary, secondary, outline, etc.) and sizes.
- **`Card`**: (Includes `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) For structuring content blocks.
- **`Input`**: For text, password, and other data entry.
- **`Modal`**: For dialogs and pop-up interactions, with overlay and animations.
- **`Tooltip`**: For providing contextual information on hover/focus.
- **`Toast`**: For non-intrusive notifications (visual component created, provider system conceptualized).
- **`ThemeSwitcher`**: Component to toggle between dark and light modes.

## Layouts:
- **`MainLayout`**: Standard application layout with header, sidebar, and content area.
- **`AuthLayout`**: Centered layout for authentication pages (Login, etc.).
