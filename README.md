# Aditya Shashank Chavan — Portfolio

Personal portfolio website showcasing data engineering expertise, projects, and knowledge work.

**Live:** [adit0503.github.io](https://adit0503.github.io/)

## Features

- Dark/Light theme toggle with system preference detection
- Scroll-triggered animations and animated stat counters
- Filterable projects gallery (by category)
- Animated skill proficiency bars
- Responsive design (mobile, tablet, desktop)
- Infinite tech stack marquee
- No build tools required — pure HTML/CSS/JS

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero, about, career timeline, contact |
| `pages/experience.html` | Full work history with nested project details |
| `pages/projects.html` | Filterable project showcase with impact metrics |
| `pages/skills.html` | Proficiency bars + categorized tech stack |
| `pages/education.html` | USC MS CS + Mumbai BE with coursework |
| `pages/knowledge.html` | Architecture patterns & technical deep-dives |

## Local Development

```bash
# Open directly
xdg-open index.html

# Or start a local server
python3 -m http.server
# Visit http://localhost:8000
```

## Structure

```
├── index.html
├── css/styles.css
├── js/main.js
├── pages/
│   ├── education.html
│   ├── experience.html
│   ├── knowledge.html
│   ├── projects.html
│   └── skills.html
└── pdf/
    └── Resume - Aug26.pdf
```

## Tech Stack

- HTML5 + CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts (Inter, JetBrains Mono)
- Hosted on GitHub Pages
