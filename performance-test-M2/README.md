Shattered Riffs — Rock Band Landing Page

Description

Responsive landing page for a fictional rock band. It promotes the band identity, music and upcoming events with a bold hero, events table, about section, discography, multimedia gallery, and a structured footer.

The UI is designed to feel energetic and “rock” (dark palette, red accents, strong typography), and adapts to mobile and desktop with mandatory media queries.

Technologies Used

- HTML5 (semantic structure)
- CSS3 (Flexbox, Grid, media queries, animations)
- SCSS (source styles)
- Vanilla JavaScript (simple interactions)

Project Structure

```
performance-test-M2/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── scss/
│   │   └── style.scss
│   ├── icons/
│   │   └── logo.ico
│   ├── img/
│   │   ├── img-1.jpg ... img-10.jpg
│   │   └── guide.png
│   └── js/
│       └── main.js
├── index.html
└── README.md
```

Features Implemented

- Semantic sections: `header`, `nav`, `main`, `section`, `article`, `footer`
- Events table using `thead`, `tbody`, `tr`, `th`, `td`
- Unordered lists for influences/values/social links
- CSS animations (hero title flicker, CTA pulse, image hover)
- Responsive layout:
  - Desktop (>1024px): multi-column layout
  - Mobile: hamburger menu + stacked sections + horizontal table scroll
- JavaScript interactions:
  - Mobile menu toggle
  - Active navigation link based on scroll
  - Demo modal for ticket actions
  - Demo toast for “play preview”

How to Run Locally

1. Open `performance-test-M2/index.html` in your browser.
2. No installation is required.

Notes About SCSS

The browser loads the compiled CSS file: `assets/css/style.css`.
