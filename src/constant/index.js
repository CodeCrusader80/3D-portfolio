import {mobile, backend, creator, web, javascript, typescript, git, css, mongodb, html, reactjs, nodejs, figma, docker, redux, shopify, starbucks, tailwind, tesla, tripguide, threejs, jobit, carrent, meta, emily, lea, antonio} from "../assets/index.js";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "ThreeJS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "Docker",
        icon: docker,
    },
];
const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functionnal teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "April 2021 - Feb 2022",
        points: [
            "Cross-Platform App Development: As a React Native developer at Tesla, you would have gained expertise in cross-platform app development. You'd have experience in building applications that run seamlessly on both iOS and Android, optimizing development efforts and ensuring a consistent user experience across devices.",
            "Integration with Vehicle APIs: Working at Tesla, you would have had the opportunity to integrate your mobile apps with Tesla's vehicle APIs. This includes features like remote vehicle control, tracking vehicle data, and providing real-time updates to users about their Tesla vehicles.",
            "User Experience (UX) Design: Developing apps for Tesla means focusing on a top-notch user experience. You would have honed your skills in designing user-friendly interfaces, ensuring intuitive navigation, and providing an exceptional in-car experience for Tesla owners.",
            "Continuous Integration and Deployment (CI/CD): Tesla values efficiency and continuous improvement. You'd have likely worked with CI/CD pipelines to automate the build and deployment process, ensuring that updates and new features are delivered to users seamlessly and quickly.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Feb 2022 - Jan 2023",
        points: [
            "Shopify Theme Development: Working as a web developer at Shopify, you would have gained expertise in creating and customizing Shopify themes. This includes proficiency in Liquid, Shopify's templating language, and the ability to design and implement e-commerce websites that meet the unique needs of clients.",
            "E-commerce Integration: You'd have experience integrating various e-commerce functionalities into Shopify stores. This might involve setting up payment gateways, configuring product catalogs, and ensuring a smooth shopping experience for customers.",
            "App Development: Shopify's App Store offers numerous opportunities for developers to create and publish apps that enhance the platform's capabilities. You could have honed your skills in building Shopify apps using technologies like Ruby on Rails or Node.js.",
            "Performance Optimization: Shopify places a strong emphasis on the performance of online stores. You would have learned to optimize web pages for speed and responsiveness, ensuring that Shopify stores load quickly and provide an excellent user experience.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Social Media Integration: As a full-stack developer at Meta, you would have likely gained expertise in integrating and working with social media APIs, including Facebook, Instagram, and WhatsApp. This includes developing features that leverage these platforms for user engagement and content sharing.",
            "Data Privacy and Security: Working at a company like Meta, data privacy and security are paramount. You'd have experience in implementing robust security measures to protect user data and ensure compliance with privacy regulations such as GDPR and CCPA.",
            "AI and Machine Learning: Meta invests heavily in artificial intelligence and machine learning. You might have worked on projects involving recommendation systems, content moderation, or AI-driven features, enhancing your skills in this cutting-edge field.",
            "Scalable Infrastructure: Meta's platforms serve billions of users. You'd have learned how to design and maintain a highly scalable and reliable infrastructure to support the massive user base, including expertise in cloud technologies like AWS, Azure, or Meta's own infrastructure.",
        ],
    },
];

const testimonials = [
    {
        testimonial: "Mathieu's work is simply outstanding. His expertise in web and mobile development, especially in React Native, has been instrumental in our success. He consistently delivers top-notch solutions, and we highly value his contributions.",
        name: "Emily Foster",
        designation: "CFO",
        company: "LuxeAura Creations",
        image: emily,
    },
    {
        testimonial: "Mathieu's React expertise is unparalleled. His commitment to delivering high-quality solutions has made our projects a success.",
        name: "Antonio Rossi",
        designation: "C0O",
        company: "TechSynergy Solutions",
        image: antonio,
    },
    {
        testimonial: "Mathieu's expertise in Three.js is impressive. His creative use of 3D graphics and animations added a captivating dimension to our projects. Working with him has been a pleasure, and I'm continually inspired by his innovative solutions.",
        name: "Lea Dupont",
        designation: "CTO",
        company: "TriDimensionTech",
        image: lea,
    },
];
const projects = [
    {
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/CodeCrusader80",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/CodeCrusader80",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, rental cars and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supbase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/CodeCrusader80",
    },
];

export { services, technologies, experiences, testimonials, projects};