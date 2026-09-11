# Aditya Shashank Chavan — Portfolio

Personal portfolio website showcasing data engineering expertise, projects, and a deep technical knowledge base.

**Live:** [adit0503.github.io](https://adit0503.github.io/)

## Features

- Dark/Light theme toggle with system preference detection
- Scroll-triggered animations and animated stat counters
- Filterable projects gallery (by category)
- Animated skill proficiency bars
- Searchable knowledge base with 60+ technical deep-dive articles
- Responsive design (mobile, tablet, desktop)
- Infinite tech stack marquee
- SEO meta descriptions on every page
- No build tools required — pure HTML/CSS/JS

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Hero, about, career timeline, contact |
| `pages/experience.html` | Full work history with nested project details |
| `pages/projects.html` | Filterable project showcase with impact metrics |
| `pages/skills.html` | Proficiency bars + categorized tech stack |
| `pages/education.html` | USC MS CS + Mumbai BE with coursework |
| `pages/knowledge.html` | Curated knowledge-work highlights + link to the full base |

## Knowledge Base

A searchable reference at `knowledge/index.html`, organized into categories. Each category has an index page plus individual deep-dive articles written for interview prep and real-world platform design.

| Category | Path | Articles |
|----------|------|----------|
| AI & GenAI Engineering | `knowledge/ai/` | 16 |
| Apache Spark | `knowledge/spark/` | 8 |
| Databricks on AWS | `knowledge/databricks/` | 8 |
| Orchestration (Airflow & Dagster) | `knowledge/orchestration/` | 8 |
| AWS Data Engineering | `knowledge/aws/` | 7 |
| Lakehouse & Table Formats | `knowledge/lakehouse/` | 6 |
| Platform & Infrastructure | `knowledge/platform/` | 6 |
| GCP & Databricks | `knowledge/gcp/` | 5 |

The **AI & GenAI Engineering** category covers RAG, advanced RAG, embeddings, vector search, agentic AI, grounding foundation models on unstructured data, AWS Bedrock, Claude, Databricks Mosaic AI, AI for data engineering, LLMOps, LLM fundamentals, prompt engineering, fine-tuning/PEFT, MCP, and interview prep.

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
├── sitemap.xml
├── robots.txt
├── .nojekyll
├── css/
│   ├── styles.css        # global design tokens + layout
│   └── knowledge.css     # knowledge base styles
├── js/
│   ├── main.js           # theme, nav, animations, filters
│   └── knowledge.js      # knowledge base search
├── pages/
│   ├── education.html
│   ├── experience.html
│   ├── knowledge.html
│   ├── projects.html
│   └── skills.html
├── knowledge/
│   ├── index.html        # KB hub with search + category cards
│   ├── ai/               # AI & GenAI engineering
│   ├── spark/            # Apache Spark
│   ├── lakehouse/        # table formats & medallion
│   ├── aws/              # AWS data engineering
│   ├── gcp/              # GCP & Databricks
│   ├── databricks/       # Databricks on AWS
│   ├── orchestration/    # Airflow & Dagster
│   └── platform/         # governance, CDC, modeling, cost
└── pdf/
    └── Resume_2026.pdf
```

## Tech Stack

- HTML5 + CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (IntersectionObserver, requestAnimationFrame)
- Google Fonts (Inter, JetBrains Mono)
- Hosted on GitHub Pages
