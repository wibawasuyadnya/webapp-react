import React from "react";
import { ImageLogo, ImagePortfolioIcon } from "../scripts/image";


const iconSet = "mx-auto inline-block w-6/12";
const PortfolioSet = "rounded-[15px] xs:rounded-[8px] inline-block w-[70px] xs:w-[75%]";
const data = {
    hero: {
        name: "Agus Wibawa",
        occupation: [
           "Front-End Developer",
           "UI/UX Designer", 
        ],
        resume: "AgusWibawa-WebDesigner-CV.pdf",
        contact: "https://mail.google.com/mail/?view=cm&fs=1&to=dekgusnfs@gmail.com",
        social: {
            facebook: "https://facebook.com/aguswibawas/",
            instagram: "https://instagram.com/justadynamicnerds/",
            twitter: "https://twitter.com/justdynamicnerd",
            dribbble: "https://dribbble.com/aguswibawa",
            github: "https://github.com/wibawasuyadnya",
            email: "https://mail.google.com/mail/?view=cm&fs=1&to=dekgusnfs@gmail.com"
        }
    },
    about: {
        title: "About me",
        desc: "Hi, I'm Agus. I'm a front-end developer and UI designer based in Bali. Interfaces are my thing, so designing and building them with new tech is my specialty. And of course I'll help you to build or maintaining your websites. I'm open for remote or full-time work and can easily adapt with your workflow and collaborative with team. let me know if you interested and contact me for more info :3 "
    },
    tools: {
        title: "Tech that I use",
        skills: [
            {
                skillName: "Adobe",
                skillLink: "https://www.adobe.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoAdobe} className={iconSet} />
            },
            {
                skillName: "Tailwind",
                skillLink: "https://tailwindcss.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoTailwind} className={iconSet} />
            },
            {
                skillName: "Figma",
                skillLink: "https://www.figma.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoFigma} className={iconSet} />
            },
            {
                skillName: "TypeScript",
                skillLink: "https://www.typescriptlang.org/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoTypescript} className={iconSet} />
            },
            {
                skillName: "JavaScript",
                skillLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoJs} className={iconSet} />
            },
            {
                skillName: "Npm",
                skillLink: "https://npmjs.com",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoNpm} className={iconSet} />
            },
            {
                skillName: "React",
                skillLink: "https://reactjs.org/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoReact} className={iconSet} />
            },
            {
                skillName: "Angular",
                skillLink: "https://angular.io/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoAngular} className={iconSet} />
            },
            {
                skillName: "Git",
                skillLink: "https://git-scm.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoGit} className={iconSet} />
            },
            {
                skillName: "MaterialUI",
                skillLink: "https://mui.com/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoMui} className={iconSet} />
            },
            {
                skillName: "WordPress",
                skillLink: "https://wordpress.org/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoWordpress} className={iconSet} />
            },
            {
                skillName: "Webpack",
                skillLink: "https://webpack.js.org/",
                skillIcon: <img alt="skillLogo" src={ImageLogo.logoWebpack} className={iconSet} />
            }
        ],
    },
    portfolio: {
        title: "Portfolio",
        HeadingTitleOne: [
            {
                PortfolioHeading: "Multi Level Marketing Site",
                PortfolioDescription: "Working together for building wellness MLM Project we focusing on automation affiliate MLM system, I'm responsible of front end and design mockup of upcoming landing page for promo campaign, this project was build using Wordpress, Bootstrap, Elementor and Php"
            },    
        ],
        HeadingTitleTwo: [
            {
                PortfolioHeading: "E-Commerce Store Site",
                PortfolioDescription: "All Good Bud is a dynamic team in bali to support main company in UK, Wokingham, Berkshire, England. Here I'm working as a Front End Developer and have a responsible for e-commerce site front end also maintainability for the manufacture website, and I'm currently working Here ;)"
            },    
        ],
        iconListOne: [
            {
                PortfolioIcon: <img alt="PortfolioIcon" src={ImagePortfolioIcon.ImageWordpress} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIcon" src={ImagePortfolioIcon.ImageBootstrap} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIcon" src={ImagePortfolioIcon.ImagePHP} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIcon" src={ImagePortfolioIcon.ImageElementor} className={PortfolioSet}/>
            }
        ],
        iconListTwo: [
            {
                PortfolioIcon: <img alt="PortfolioIconWordpress" src={ImagePortfolioIcon.ImageWordpress} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIconLaravel" src={ImagePortfolioIcon.ImageLaravel} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIconReact" src={ImagePortfolioIcon.ImageReact} className={PortfolioSet}/>
            },
            {
                PortfolioIcon: <img alt="PortfolioIconjQuery" src={ImagePortfolioIcon.ImagejQuery} className={PortfolioSet}/>
            },
        ],

    },

    education: {
        title: "My Education",
        school: {
            sd: {
                name: "Primary Public School of 3 Dalung",
                date: "2006 - 2013",
                desc: "Elementary School",
            },
            smp: {
                name: "Junior Public School of 3 Mengwi",
                date: "2013 - 2016",
                desc: "Junior High School",
            },
            sma: {
                name: "Senior Public School of 2 Mengwi",
                date: "2016 - 2019",
                desc: "Senior High School",
            },
            college: {
                name: "Institue of Technology and Business Stikom Bali",
                date: "2019 -(Present)",
                desc: "Bachelor's of Computer Science",
            },
        },
    },

    project: {
        title: "My Projects",
    },

    contact: {
        heading: "Interested to collaborating with me?",
        desc: "I’m always open to discussing product design work or partnership opportunities.",
        button: {
            placeholder: "Reach Out",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=dekgusnfs@gmail.com",
        },
    },

    footer: {
        desc: "Desgined & Built by Agus Wibawa",
        social: {
            facebook: "https://facebook.com/aguswibawas/",
            instagram: "https://instagram.com/justadynamicnerds/",
            twitter: "https://twitter.com/justdynamicnerd",
            dribbble: "https://dribbble.com/aguswibawa",
            github: "https://github.com/wibawasuyadnya",
            email: "https://mail.google.com/mail/?view=cm&fs=1&to=dekgusnfs@gmail.com"
        },
        copyright: {
            before: "Copyright ©",
            after: "aguswibawa.com"
        },
    },

};


export default data;

