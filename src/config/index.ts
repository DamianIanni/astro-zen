import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Damian Ianni — Mobile & Web Developer",
  author: "Damian Ianni",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/damian-ianni-b50555205/",
    },
    { text: "Github", href: "https://github.com/DamianIanni" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://damianianni.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Damian Ianni",
    specialty: "Mobile Developer expanding into Fullstack Development",
    summary:
      "Building cross-platform apps and backend services while continuously growing as a fullstack developer.",
    email: "damiangussi@gmail.com",
  },
  experience: [
    {
      company: "Garnet Technology",
      position: "Mobile developer",
      startDate: "Feb 2021",
      endDate: "May 2024",
      summary: [
        "Developed and launched two mobile applications, increasing daily active users by 30 percent through UI/UX enhancements.",
        "Optimized API calls, reducing average load times by 40 percent and enhancing real-time data synchronization.",
        "Implemented BLE connectivity, enabling seamless interaction with IoT devices and expanding product capabilities",
        "Managed deployments to the App Store & Google Play, maintaining a 100 percent approval rate.",
        "Collaborated with cross-functional teams, ensuring product alignment with user needs and business objectives.",
      ],
    },
    // {
    //   company: "Bankit",
    //   position: "Mobile Developer",
    //   startDate: "Feb 2017",
    //   endDate: "May 2018",
    //   summary: [
    //     "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
    //     "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
    //   ],
    // },
    // {
    //   company: "Driveer",
    //   position: "Frontend Developer",
    //   startDate: "Jun 2015",
    //   endDate: "Oct 2016",
    //   summary:
    //     "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    // },
  ],
  projects: [
    {
      name: "Garnet Control Pro",
      summary:
        "Mobile app for home and business security. Contributed to core functionality development, user experience improvements, and performance optimization",
      linkPreview:
        "https://www.youtube.com/watch?v=VQqmccDU9SU&ab_channel=GarnetTechnology",
      linkApple:
        "https://apps.apple.com/dk/app/garnet-control-pro/id6444289527",
      linkGoogle:
        "https://play.google.com/store/search?q=garnet%20control%20pro&c=apps&hl=es_AR",
      image: "/garnet-control-pro.png",
    },
    {
      name: "Garnet Programmer",
      summary:
        "Mobile app for configuring and managing alarm system parameters remotely",
      linkPreview:
        "https://www.youtube.com/watch?v=q2Kx2XzTC4Y&ab_channel=GarnetTechnology",
      linkApple: "https://apps.apple.com/dk/app/garnet-programmer/id1528160122",
      linkGoogle:
        "https://play.google.com/store/search?q=garnet+programer&c=apps&hl=es_AR",
      image: "/garnet-programmer.png",
    },
    {
      name: "Garnet Admin",
      summary:
        "Developed a web-based management platform for alarm systems and installer oversight. Implemented features for account management, system control, and secure operations",
      linkPreview:
        "https://www.youtube.com/watch?v=tahDZeQJhqc&ab_channel=GarnetTechnology",
      image: "/garnet-admin.png",
    },
  ],
  projectsPersonal: [
    {
      name: "App challange",
      summary:
        "App for document and notification management. Implemented local storage caching, optimized API data handling, and dynamic UI updates with user feedback",
      image: "/Challange.png",
      linkSource: "https://github.com/DamianIanni/Challange",
    },
    {
      name: "Packing 76",
      summary:
        "Easily organize your luggage with Packing 76, the ultimate app to organize your suitcase efficiently and stress-free",
      linkPreview:
        "https://www.youtube.com/watch?v=HhdqjGm9ZZU&ab_channel=DamianIanni",
      linkGoogle: "https://play.google.com/store/apps/details?id=com.awesome76",
      image: "/packing76.png",
      linkSource: "https://github.com/DamianIanni/76Packing",
    },
    {
      name: "GluckoTrack",
      summary:
        "Mobile app for diabetes management. Enables users to log and track blood sugar levels, view monthly averages and daily trends via charts",
      linkGoogle:
        "https://play.google.com/store/apps/details?id=com.GlucoTrack&hl=es_AR",
      image: "/GluckoTrack.png",
      linkSource: "https://github.com/DamianIanni/GlucoTrack",
    },
    {
      name: "MayorOMenor",
      summary:
        "Forgot your cards at home because you’re a bit forgetful..? No worries! Download the simplest app in the world and start playing",
      linkGoogle:
        "https://play.google.com/store/apps/details?id=project.mayoromenor",
      image: "/mayoromenor.png",
    },
    {
      name: "Packing 76 Server",
      summary:
        "Backend server for the Packing 76 mobile app — GraphQL API + MySQL + Node.js + TypeScript",
      image: "/LOGO.png",
      linkSource: "https://github.com/DamianIanni/76Packing_server",
    },
    {
      name: "Habit tracker API",
      summary:
        "A robust backend API for a habit tracking application, designed to manage users, habits, and daily habit logs.",
      image: "/habit_tracker.png",
      linkSource: "https://github.com/DamianIanni/habit-tracker-api",
    },
  ],
  about: {
    description: `
      I’m Damian Ianni, a Mobile and Web Developer originally from Argentina, now based in Copenhagen. I bring almost 3 years of professional experience in developing React Native apps, and I’m actively expanding my expertise in backend and fullstack development using Node.js, TypeScript, and SQL. My recent projects include building complete mobile + backend solutions, with a focus on clean architecture, performance, and scalability. I’m passionate about continuous learning and delivering high-quality user experiences across platforms.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
