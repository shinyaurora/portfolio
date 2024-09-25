import React from "react"
import { ImHistory, ImFlag, ImBook, ImTelegram, ImGithub, ImLinkedin } from "react-icons/im";

import PORTFOLIO_IMG1 from "../assets/1password.com-business-security.png";
import PORTFOLIO_IMG2 from "../assets/boldcommerce.com.png";
import PORTFOLIO_IMG3 from "../assets/dlipfolio.com-klips.png";
import PORTFOLIO_IMG4 from "../assets/transoil.vercel.app.png";

export const EXPERIENCE_DATA = [
    {
        date: "Present - Future",
        icon: <ImFlag />,
        title: "Talented Developer",
        subtitle: "High Quality, Rapid Development",
        description: <>
            <p>As an innovative developer, I am always eager to learn new technologies and challenge to the new things.</p>
            <p>Credit is my life</p>
            <p>If you want to make your business successful, then please call me. I am always here to help you.</p>
        </>,
        bgColor: "#E637ED"
    },
    {
        date: "October 2022 - June 2024",
        icon: <ImHistory />,
        title: "Remote Full Stack Developer",
        subtitle: "Jolera Inc.",
        description: <>
            <p>
                Spearheaded the development of innovative real-estate valuation solutions within a 5-member agile
                team, resulting in a 20% increase in overall system ef f i ciency and a notable enhancement in user
                satisfaction.
            </p>
            <p>
                Architected and implemented the Zestimate system, capable of processing over 600K valuations per
                month, which improved processing speed by 30% and streamlined user workf l ows.
            </p>
            <p>
                Led the full redesign of a legacy SaaS application using React.js 15 and Redux, cutting load times by
                50% and increasing user engagement by 25% through an improved user interface and experience.
            </p>
            <p>
                Pioneered the integration of a machine learning-driven property valuation model, which enhanced
                accuracy by 40% and automated previously manual processes, saving the team approximately 15 hours
                weekly.
            </p>
        </>,
        bgColor: "#8602F9"
    },
    {
        date: "February 2021 - August 2022",
        icon: <ImHistory />,
        title: "Remote Senior Frontend Developer",
        subtitle: "Trindent Consulting",
        description: <>
            <p>
                Directed a comprehensive overhaul of the client-facing user interface, transforming a multi-page
                layout into a high-performing single-page application SPA, which boosted session durations and user
                interactions by 15%.
            </p>
            <p>
                Established an in-house UI library that standardized front-end practices and signif i cantly reduced
                monthly development cycles by over 60 hours, fostering greater collaboration among developers.
            </p>
            <p>
                Championed the development and implementation of a robust unit testing infrastructure using Jest,
                leading to a 15% reduction in user-reported bugs monthly and improving overall product stability.
            </p>
        </>,
        bgColor: "#8602F9"
    },
    {
        date: "July 2018 - December 2020",
        icon: <ImHistory />,
        title: "Remote Backend Developer",
        subtitle: "ElementIQ",
        description: <>
            <p>
                Engineered scalable APIs and microservices for an e-commerce platform, achieving a 40% improvement in data
                retrieval times and enhancing user experience across the application.
            </p>
            <p>
                Optimized database performance by implementing advanced indexing and query optimization techniques,
                resulting in a 30% reduction in query response times and signif i cantly improving application responsiveness.
            </p>
            <p>
                Collaborated closely with cross-functional teams to redesign system architecture, resulting in a 25% decrease in
                deployment times through improved CI/CD practices and streamlined workf l ows.
            </p>
        </>,
        bgColor: "#8602F9"
    },
    {
        date: "July 2017 - March 2018",
        icon: <ImBook />,
        title: "Intern Frontend Developer",
        subtitle: "Skyway West",
        description: <>
            <p>
                Played a key role in developing responsive web applications that drove a 22% increase in mobile traf f i c,
                leveraging modern design principles and best practices.
            </p>
            <p>
                Collaborated on creating dynamic web pages with JavaScript and React, contributing to a 15% increase in
                website leads by enhancing user interaction and overall functionality.
            </p>
            <p>
                Engaged in Agile ceremonies, promoting team collaboration and signif i cantly increasing task success rates by
                30% through improved communication and iterative development processes.
            </p>
        </>,
        bgColor: "#35AB55"
    }
    ,
    {
        date: "September 2014 - May 2018",
        icon: <ImBook />,
        title: "Bachelor of Science in Computer Science",
        subtitle: "Concordia University",
        description: <>
            <p>
                I studied several programming languages such as C++, Python and JavaScript.
            </p>
            <p>
                My major was Web Services and Applications.
            </p>
            <p>
                I gained knowledge about building and managing complex software systems which includes web development topics.
            </p>
        </>,
        bgColor: "#35AB55"
    }
]

export const SKILL_DATA = {
    LANG_LIST: [
        {
            name: "C++",
            icon: "https://skillicons.dev/icons?i=cpp"
        },
        {
            name: "JavaScript",
            icon: "https://camo.githubusercontent.com/9f44b299b7e1173e15c41a2bb04863ca5e78c81ab947283d3b6f6475871b8f60/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f6a732d69636f6e2e737667"
        },
        {
            name: "TypeScript",
            icon: "https://camo.githubusercontent.com/dd2c84af43a6c56860d910c605d51d058a28213431a42e422dcb6a62ab53d14a/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f74732d69636f6e2e737667"
        },
        {
            name: "PHP",
            icon: "https://skillicons.dev/icons?i=php"
        },
        {
            name: "Python",
            icon: "https://camo.githubusercontent.com/740b035ed7f2f9a189b337373e57b98f8c3d61d2fbbb7d7872a6563646a20abc/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f707974686f6e2d69636f6e2e737667"
        }
    ],
    FRONTEND_LIST: [
        {
            name: "HTML5",
            icon: "https://skillicons.dev/icons?i=html"
        },
        {
            name: "CSS3",
            icon: "https://skillicons.dev/icons?i=css"
        },
        {
            name: "Sass",
            icon: "https://skillicons.dev/icons?i=sass"
        },
        {
            name: "TailwindCSS",
            icon: "https://skillicons.dev/icons?i=tailwind"
        },
        {
            name: "Bootstrap",
            icon: "https://skillicons.dev/icons?i=bootstrap"
        },
        {
            name: "React",
            icon: "https://camo.githubusercontent.com/0fcf9befefc83e207ed36bdeb3ac4f6c99132571ddb0f44e7a6ac872b0723352/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f72656163742d69636f6e2e737667"
        },
        {
            name: "Next",
            icon: "https://skillicons.dev/icons?i=next"
        },
        {
            name: "Vue",
            icon: "https://skillicons.dev/icons?i=vue"
        }
    ],
    BACKEND_LIST: [
        {
            name: "Node.js",
            icon: "https://skillicons.dev/icons?i=nodejs"
        },
        {
            name: "Express",
            icon: "https://skillicons.dev/icons?i=express"
        },
        {
            name: "FastAPI",
            icon: "https://skillicons.dev/icons?i=fastapi"
        },
        {
            name: "Nest",
            icon: "https://skillicons.dev/icons?i=nest"
        },
        {
            name: "Laravel",
            icon: "https://skillicons.dev/icons?i=laravel"
        },
        {
            name: "Django",
            icon: "https://camo.githubusercontent.com/e65f8a131aec32c8038012cbd89c65dbce110c66227bef4bf0b0e23ffe0f3ad8/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f646a616e676f2d69636f6e2e737667"
        },
        {
            name: "Flask",
            icon: "https://skillicons.dev/icons?i=flask"
        }
    ],
    DATABASE_LIST: [
        {
            name: "MySQL",
            icon: "https://camo.githubusercontent.com/3ed284d0ecd9fcccabf0711e2cad6bbec412e417bcfb1da25502a1ed9adbaf78/68747470733a2f2f74656368737461636b2d67656e657261746f722e76657263656c2e6170702f6d7973716c2d69636f6e2e737667"
        },
        {
            name: "PostgreSQL",
            icon: "https://skillicons.dev/icons?i=postgresql"
        },
        {
            name: "MongoDB",
            icon: "https://skillicons.dev/icons?i=mongodb"
        },
        {
            name: "Redis",
            icon: "https://skillicons.dev/icons?i=redis"
        }
    ]
}

export const PORTFOLIO_DATA = [
    {
        url: "https://1password.com/business-security",
        description: "1Password for Business is a password management solution designed for teams and businesses.",
        img: PORTFOLIO_IMG1
    },
    {
        url: "https://boldcommerce.com",
        description: "This platform helps companies manage recurring billing, flexible delivery schedules, and customer subscriptions.",
        img: PORTFOLIO_IMG2
    },
    {
        url: "https://klipfolio.com/klips",
        description: "Klips are the core building blocks of Klipfolio’s data dashboards.",
        img: PORTFOLIO_IMG3
    },
    {
        url: "#",
        description: "This website is advertising page of Trans-Oil Company.",
        img: PORTFOLIO_IMG4
    }
]

export const CONTACTS_DATA = [
    // {
    //     url: "#",
    //     icon: <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
    //         <path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" className="">
    //         </path>
    //     </svg>,
    //     color: "bg-blue-600"
    // },
    {
        url: "https://github.com/cupidara",
        icon: <ImGithub />,
        color: "bg-pink-600"
    },
    {
        url: "https://t.me/cupidara0728",
        icon: <ImTelegram />,
        color: "bg-purple-600"
    },
    // {
    //     url: "#",
    //     icon: <ImLinkedin />,
    //     color: "bg-blue-600"
    // }
]