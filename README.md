
# GitPulse - Frontend

## Tech Stack

- **React** (Vite)
- **Vanilla CSS** - for styling

---

## What This App Does

1. **Landing Page** -  intro + explanation of what GitPulse does
2. **Username Input** - user enters their GitHub username
3. **Loading Skeleton** - shown while the profile is being analysed /when the README is being generated/ when the README is being fetched from the backend
4. **Dashboard** - shows profile card, top repos, heatmap, score breakdowns, language breakdown, collaboration score, and an actionable tip
5. **README Generator Form** - a 3-step form (Basic Info | Tech/Repos/Cards | Social/Extras) to customize what goes into the generated README
6. **Result Page** - shows the generated README (raw + preview), with copy and download options

> Project plan is opened as issues which have details of each stage of the app.

---

## Getting Started

```bash
# install dependencies
npm install

# run the app locally
npm run dev

# build for production
npm run build
```

---

## Folder Structure 
```
src/
    - components/       # Reusable UI pieces: Button, Card, Badge, Toggle, Dropdown
    - pages/
        - Landing/
        - UsernameInput/
        - Dashboard/
        - ReadmeForm/
            - StepBasicInfo/
            - StepTechAndCards/
            - StepSocialAndExtras/
        - ReadmeResult/
    - api/              # fetch helper + backend calls
    - styles/           # design tokens (colors, spacing, fonts, shadows) + global CSS
App.jsx
main.jsx
```

## Notes

- Styling is currently done at a surface/functional level 
- Error handling (popups/toasts, error cards, etc.) is planned as a later pass 
- Primary focus is on functionality and flow, with styling and polish to be done after the MVP is complete