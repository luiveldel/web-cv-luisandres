# Luis Andrés Velázquez - Web CV

Personal portfolio and CV website for Luis Andrés Velázquez, Data Engineer.

## Live Site

[cv.luisandresvelazquez.com](https://cv.luisandresvelazquez.com)

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Theme Toggle**: Switch between themes with preference saved in localStorage
- **GitHub Projects Integration**: Automatically fetches and displays latest repositories from GitHub API
- **Animated Hero Illustration**: Custom SVG with smooth data flow animations
- **Fast Loading**: Optimized images (WebP format) and minimal dependencies

## Pages

| Page | Description |
|------|-------------|
| `/` | Home - Introduction and hero section |
| `/about/` | About Me - Background, experience, and tech stack |
| `/projects/` | Projects - Latest GitHub repositories |

## Tech Stack

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript
- GitHub REST API

## Project Structure

```
web-cv-luisandres/
├── index.html              # Home page
├── about/
│   └── index.html          # About me page
├── projects/
│   └── index.html          # GitHub projects page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── script.js           # Analytics (Umami)
│   └── theme-toggle.js     # Dark/light theme toggle
├── images/
│   ├── hero-illustration.svg  # Animated hero image
│   ├── logo.webp           # Site logo
│   ├── favicon.png         # Favicon
│   └── icons/              # Tech stack icons
├── fonts/                  # Custom fonts
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose (dev)
└── docker-compose.prod.yml # Docker Compose (prod)
```

## Development

### Local Server

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve -p 8080
```

Then open http://localhost:8080

### Docker

```bash
# Development
docker-compose up

# Production
docker-compose -f docker-compose.prod.yml up -d
```

## Theme Toggle

The site supports light and dark themes:

- **Light theme**: Clean white background with dark text
- **Dark theme**: Dark background with light text

Theme preference is:
1. Loaded from `localStorage` if previously set
2. Falls back to system preference (`prefers-color-scheme`)
3. Defaults to light theme

## GitHub Integration

The Projects page fetches repositories from the GitHub API:

```javascript
fetch('https://api.github.com/users/luiveldel/repos?sort=updated&per_page=6')
```

Displays the 2 most recent non-forked repositories with:
- Repository name and link
- Description
- Primary language (with color indicator)
- Star count

## License

© 2025 Luis A. Velázquez Delgado. All rights reserved.
