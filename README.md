# macOS Desktop Simulator

An interactive macOS-inspired desktop portfolio built with React, JavaScript, Sass, and Vite. It recreates the feel of a desktop environment with a menu bar, animated Dock, and interactive application windows.

## Features

- **macOS-inspired interface:** Desktop wallpaper, menu bar, and application Dock.
- **Interactive Dock:** Open application windows by clicking Dock icons.
- **Window management:** Drag and resize application windows.
- **Projects window:** Display project cards with descriptions, technology tags, repository links, and demo links when provided.
- **Interactive terminal:** Explore profile information and sample commands.
- **Notes window:** View a notes-style interface.
- **Resume viewer:** View the resume PDF included in the project.
- **Spotify integration:** Access the Spotify interface.
- **Live date and time:** Display the current date and time in the menu bar.
- **Dock animations:** Smooth hover effects inspired by macOS.
- **Responsive styling:** Adapt the Dock, menu bar, and application window positioning for smaller screens.

## Tech Stack

- **React** — Component-based user interface
- **JavaScript** — Application behaviour and interactivity
- **Sass/SCSS** — Styling, layouts, and animations
- **Vite** — Development server and production build
- **react-rnd** — Draggable and resizable windows
- **react-console-emulator** — Interactive terminal interface
- **react-markdown** — Markdown rendering
- **react-syntax-highlighter** — Code syntax highlighting

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/utkarshraj0007/macos-portfolio.git
```

### 2. Open the project directory

```bash
cd macos-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal to view the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
macos-portfolio/
├── public/
│   ├── doc-icons/
│   ├── navbar-icons/
│   ├── mac-wallpaper.jpg
│   ├── note.txt
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   └── github.json
│   ├── components/
│   │   ├── windows/
│   │   │   ├── Cli.jsx
│   │   │   ├── Github.jsx
│   │   │   ├── MacWindow.jsx
│   │   │   ├── Note.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Spotify.jsx
│   │   │   ├── cli.scss
│   │   │   ├── github.scss
│   │   │   ├── note.scss
│   │   │   ├── resume.scss
│   │   │   ├── spotify.scss
│   │   │   └── window.scss
│   │   ├── DateTime.jsx
│   │   ├── Dock.jsx
│   │   ├── Nav.jsx
│   │   ├── dock.scss
│   │   └── nav.scss
│   ├── App.jsx
│   ├── app.scss
│   └── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

## Customization

You can customize the portfolio by updating these files:

- `src/components/Nav.jsx` — Menu bar information.
- `src/components/Dock.jsx` — Dock icons and their actions.
- `src/components/windows/Cli.jsx` — Terminal commands and profile information.
- `src/assets/github.json` — Project cards, descriptions, technologies, and links.
- `public/resume.pdf` — Resume document displayed by the resume window.
- `src/components/dock.scss` — Dock appearance and hover animations.
- `src/components/nav.scss` — Menu bar styling.
- `src/components/windows/window.scss` — Application window styling.
- `index.html` — Browser tab title and page metadata.

Update demonstration project data and profile/contact details before sharing the portfolio publicly.

## Deployment on Netlify

This project can be deployed through Netlify's GitHub integration.

Recommended build settings:

- **Production branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** Leave blank when the repository root contains `package.json`.

Connect the GitHub repository to Netlify, confirm these settings, and deploy. Netlify will install the dependencies, run the build command, and publish the generated files from `dist/`. Subsequent pushes to the connected branch can trigger new deployments automatically.

## Credits and Attribution

This project is inspired by the macOS desktop interface and uses third-party packages listed in `package.json`.

macOS is a trademark of Apple Inc. This is an independent portfolio project and is not affiliated with or endorsed by Apple Inc.

## Author

**Pawan Kumar Chaudhary**

- **GitHub:** [utkarshraj0007](https://github.com/utkarshraj0007)
- **Email:** [uraj4052@gmail.com](mailto:uraj4052@gmail.com)

## License

No separate license file is currently included. Before redistributing this project or its assets, check the applicable permissions for third-party packages, design resources, and course materials.
