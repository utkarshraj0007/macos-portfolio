// import React from 'react'
// import MacWindow from './MacWindow'
// import Terminal from 'react-console-emulator'
// import "./cli.scss"

// const Cli = ({ windowName, setWindowsState }) => {
//     const commands = {
//         about: {
//             description: 'About me',
//             usage: 'about',
//             fn: () => 'I am a frontend developer passionate about building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, and React.'
//         },
//         skills: {
//             description: 'List technical skills',
//             usage: 'skills',
//             fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
// Backend: Node.js, Express, Python, Django
// Databases: MongoDB, PostgreSQL, MySQL
// Tools: Git, Docker, Webpack, Vite
// Cloud: AWS, Azure, Heroku`
//         },
//         projects: {
//             description: 'View my projects',
//             usage: 'projects',
//             fn: () => `1. Portfolio Website - React + Vite
// 2. E-commerce Platform - MERN Stack
// 3. Task Management App - Next.js
// 4. Real-time Chat App - Socket.io
// 5. Data Dashboard - React + Chart.js`
//         },
//         experience: {
//             description: 'Display work experience',
//             usage: 'experience',
//             fn: () => `Senior Developer @ Tech Corp (2022 - Present)
//   - Led development of 5+ React applications
//   - Mentored junior developers

// Full Stack Developer @ Web Solutions (2020 - 2022)
//   - Built scalable APIs with Node.js
//   - Designed responsive UIs with React`
//         },
//         contact: {
//             description: 'Get contact information',
//             usage: 'contact',
//             fn: () => `Email: uraj4052@gmail.com
// Phone: +1 (555) 123-4567
// Location: San Francisco, CA`
//         },
//         github: {
//             description: 'Open GitHub profile',
//             usage: 'github',
//             fn: () => {
//                 window.open('https://github.com', '_blank')
//                 return 'Opening GitHub...'
//             }
//         },
//         resume: {
//             description: 'Download resume',
//             usage: 'resume',
//             fn: () => 'Resume download started...'
//         },
//         social: {
//             description: 'View social media links',
//             usage: 'social',
//             fn: () => `Twitter: @pawandev
// LinkedIn: /in/pawanchaudhary
// Portfolio: pawanchaudhary.dev`
//         },
//         echo: {
//             description: 'Echo a passed string',
//             usage: 'echo <string>',
//             fn: (...args) => args.join(' ')
//         }
//     }

//     const welcomeMessage = `
// ╔════════════════════════════════════════╗
// ║     Welcome to My Portfolio CLI!       ║
// ╚════════════════════════════════════════╝

// Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

// Type 'help' to see all available commands, or try:
//   • about     - Learn about me
//   • skills    - View my technical skills
//   • projects  - Check out my work
//   • experience - See my career history
//   • contact   - Get in touch

// Happy exploring! 🚀
// `

//     return (
//         <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
//             <div className="cli-window">
//                 <Terminal
//                     commands={commands}
//                     welcomeMessage={welcomeMessage}
//                     promptLabel={'pawanchaudhary:~$'}
//                     promptLabelStyle={{ color: '#00ff00' }}
//                 />
//             </div>
//         </MacWindow>
//     )
// }

// export default Cli






import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am Pawan Chaudhary, a frontend developer passionate about building modern and interactive web applications using HTML, CSS, JavaScript, and React.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: HTML, CSS, JavaScript, React
Currently Focused On: Frontend Development`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Professional Experience:
No professional work experience has been added yet.

Focus:
Learning frontend development and building web projects using HTML, CSS, JavaScript, and React.`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Name: Pawan Chaudhary
Email: uraj4052@gmail.com
GitHub: https://github.com/utkarshraj0007`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/utkarshraj0007', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: https://github.com/utkarshraj0007
LinkedIn: /in/ankurprajapati
Email: uraj4052@gmail.com`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to Pawan Chaudhary's interactive portfolio.

You can explore my technical skills, demo projects, and contact information using terminal commands.

Type 'help' to see all available commands, or try:
  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Explore demo projects
  • experience - Learn about my background
  • contact    - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'pawanchoudhary:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli