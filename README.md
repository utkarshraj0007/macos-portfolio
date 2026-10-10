# macOS Desktop Simulator

An interactive macOS-inspired desktop portfolio built with React, JavaScript, Sass, and Vite. The project recreates the look and feel of a desktop environment with a menu bar, animated Dock, and movable application windows.

## Features

- **macOS-inspired interface:** Desktop wallpaper, menu bar, and application Dock.
- **Interactive Dock:** Open different application windows by clicking the Dock icons.
- **Window management:** Drag and resize application windows.
- **Projects window:** Display project cards with descriptions, technology tags, repository links, and demo links.
- **Interactive terminal:** Explore profile information and sample commands.
- **Notes window:** View a notes-style interface.
- **Resume viewer:** Open the resume window.
- **Spotify integration:** Access the music interface.
- **Live date and time:** Display the current date and time in the menu bar.
- **Dock animations:** Smooth hover effects inspired by macOS.

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

Make sure you have Node.js and npm installed on your system.

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Open the project folder

```bash
cd <your-project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```text
react-final-project/
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
│   │   │   └── Spotify.jsx
│   │   ├── DateTime.jsx
│   │   ├── Dock.jsx
│   │   └── Nav.jsx
│   ├── App.jsx
│   ├── app.scss
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Customization

You can personalize the desktop portfolio by updating:

- `src/components/Nav.jsx` — Menu bar information.
- `src/components/Dock.jsx` — Application icons and their actions.
- `src/components/windows/Cli.jsx` — Terminal commands and profile information.
- `src/assets/github.json` — Project cards, descriptions, technologies, and links.
- `public/resume.pdf` — Resume document.
- `src/components/dock.scss` — Dock appearance and hover animations.
- `src/components/windows/window.scss` — Application window styling.
- `index.html` — Browser tab title and page metadata.

## Deployment

The project can be deployed on Netlify using its GitHub integration.

Recommended build settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Push your project to GitHub, import the repository into Netlify, configure the build settings, and deploy.

## Credits and Attribution

This project is inspired by the macOS desktop interface. Third-party libraries and design references are used where applicable.

The project cards currently contain demonstration data. Update the sample information and links before presenting them as your own projects.

## Author

**Pawan Chaudhary**

- GitHub: [utkarshraj0007](https://github.com/utkarshraj0007)
- Email: [uraj4052@gmail.com](mailto:uraj4052@gmail.com)

## License

Add the appropriate license and original project attribution before redistributing this project.
