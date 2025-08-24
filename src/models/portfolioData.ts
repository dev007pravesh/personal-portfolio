import { PortfolioData } from "../types/portfolio";
import avatar from "../assets/avatar.jpg";
import resume from "../assets/resume.pdf";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "PRAVESH SINGH CHAUHAN",
    title: "React Native Developer",
    subtitle: "Building high-performance cross-platform mobile applications",
    description:
      "React Native Developer with over 4 years of hands-on expertise in building and maintaining high-performance React Native applications. Proficient in cross-platform mobile development and API integration, with a strong focus on delivering seamless user experiences. Seeking to contribute my skills and knowledge to innovative projects that drive business growth.",
    about:
      "Curiosity and creativity drive my work as a developer. I believe that great mobile apps are built through collaboration, empathy for users, and a relentless pursuit of quality. Whether I’m architecting a new feature, optimizing performance, or exploring the latest in mobile technology, I strive to deliver solutions that are both innovative and reliable. I enjoy mentoring, sharing knowledge, and contributing to a positive team culture—because building great products is always a team effort.",
    avatar: avatar,
    resumeUrl: resume,
  },
  skills: [
    {
      id: "1",
      name: "React Native",
      category: "mobile",
      proficiency: 95,
      icon: "react",
    },
    {
      id: "2",
      name: "TypeScript",
      category: "frontend",
      proficiency: 90,
      icon: "typescript",
    },
    {
      id: "3",
      name: "JavaScript",
      category: "frontend",
      proficiency: 92,
      icon: "javascript",
    },
    {
      id: "4",
      name: "Redux",
      category: "frontend",
      proficiency: 88,
      icon: "redux",
    },
    {
      id: "5",
      name: "Zustand",
      category: "frontend",
      proficiency: 85,
      icon: "state",
    },
    {
      id: "6",
      name: "GraphQL",
      category: "backend",
      proficiency: 80,
      icon: "graphql",
    },
    {
      id: "7",
      name: "REST APIs",
      category: "backend",
      proficiency: 88,
      icon: "api",
    },
    {
      id: "8",
      name: "Git/Bitbucket",
      category: "devops",
      proficiency: 90,
      icon: "git",
    },
    {
      id: "9",
      name: "Jest Testing",
      category: "other",
      proficiency: 82,
      icon: "testing",
    },
    {
      id: "10",
      name: "Mobile UI/UX",
      category: "other",
      proficiency: 85,
      icon: "design",
    },
    {
      id: "11",
      name: "Xcode",
      category: "mobile",
      proficiency: 80,
      icon: "ios",
    },
    {
      id: "12",
      name: "Android Studio",
      category: "mobile",
      proficiency: 80,
      icon: "android",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Notelo - Note Taking App",
      description:
        "A simple, fast, and secure note-taking app designed to provide a seamless experience for users who want to jot down thoughts, ideas, or reminders on the go. Features include no sign-up required, local storage only, fast and lightweight design, easy-to-use interface, offline functionality, and complete privacy with no ads or tracking.",
      image: "/projects/notelo.jpg",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "Local Storage",
        "Offline First",
        "Privacy Focused",
      ],
      githubUrl: "https://github.com/dev007pravesh/notelo",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.dev007pravesh.Notelo&hl=en_IN",
      featured: true,
    },
    {
      id: "2",
      title: "Liamtra - Travel App",
      description:
        "A comprehensive travel app developed in React Native, designed to offer users a seamless booking experience for flights, hotels, unique homes, and other travel services. Features include social components for posting images/videos, following users, and building connections within the app.",
      image: "/projects/liamtra.jpg",
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "REST APIs",
        "Git",
        "Mobile UI/UX",
      ],
      githubUrl: "https://github.com/singh007pravesh/liamtra",
      liveUrl:
        "https://play.google.com/store/search?q=liamtra+app&c=apps&hl=en",
      featured: true,
    },
    {
      id: "3",
      title: "HillyPix - OTT Platform",
      description:
        "An under-development OTT platform tailored specifically for content and audiences in the North East region. Features include seamless video playback, resume watching, offline downloads, and watch-later options with localized streaming experience.",
      image: "/projects/hillypix.jpg",
      technologies: [
        "React Native",
        "TypeScript",
        "Video Streaming",
        "Offline Downloads",
        "Localization",
      ],
      githubUrl: "https://github.com/singh007pravesh/hillypix",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.flutter.clipix&hl=en_IN",
      featured: true,
    },
  ],
  experience: [
    {
      id: "1",
      company: "CAPGEMINI",
      position: "Application Developer",
      duration: "Dec 2024 - Present",
      description:
        "Joined as a React Native Developer, focusing on mobile application development using React Native, JavaScript, and Redux.",
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Performance Optimization",
        "State Management",
      ],
      achievements: [
        "Currently enhancing skills in performance optimization, state management, and debugging",
        "Actively participating in knowledge-sharing sessions and staying updated on industry trends",
        "Preparing for future project contributions and technical leadership",
      ],
    },
    {
      id: "2",
      company: "LIANGTUANG TECHNOLOGIES PVT. LTD",
      position: "React Native Developer",
      duration: "Jan 2021 - Dec 2024",
      description:
        "Led the full-cycle development of a travel app for both iOS and Android platforms with comprehensive responsibilities.",
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Git",
        "API Integration",
        "Performance Optimization",
      ],
      achievements: [
        "Launched app versions with high user ratings on both App Store and Google Play",
        "Optimized app performance and migrated legacy code to React Native",
        "Collaborated with product managers and designers to deliver high-quality solutions",
        "Managed codebase using Git and implemented best practices for mobile development",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "MJPRU Bareilly UP India",
      degree: "Master of Computer Application (MCA)",
      field: "Computer Applications",
      duration: "2017 - 2020",
      description:
        "Graduated with excellent academic performance, specializing in computer applications and software development.",
    },
    {
      id: "2",
      institution: "MJPRU Bareilly UP India",
      degree: "Master of Science (M.Sc. Physics)",
      field: "Physics",
      duration: "2015 - 2017",
      description: "Build strong analytical and problem-solving skills.",
    },
  ],
  contact: {
    email: "career007Pravesh@gmail.com",
    phone: "+919411633035",
    location: "Hinjewadi phase 3, Pune",
    linkedin: "https://www.linkedin.com/in/singh007pravesh/",
    twitter: undefined,
    github: "https://github.com/dev007pravesh",
  },
};
