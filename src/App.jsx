import { useState, useEffect } from "react";
import {
  ChevronUpIcon,
  Github,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
  AwardIcon,
} from "lucide-react";

import userData from "./userData";
import GithubButton from "./components/GithubButton";
import CertificateButton from "./components/CertificateButton";
import LinkButton from "./components/LinkButton";
export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#education", text: "Education" },
    { href: "#hackathons", text: "Hackathons" },
  ];

  const hackathons = [
    {
      name: "TechCrunch Disrupt Hackathon",
      date: "September 2023",
      organization: "TechCrunch",
      achievement: "1st Place Overall",
      projectSummary:
        "Developed an AI-powered personal finance assistant that provides tailored advice and investment strategies.",
      repoLink: "https://github.com/johndoe/fintech-ai-assistant",
      eventLink: "https://techcrunch.com/events/disrupt-2023/",
    },
    {
      name: "Google Cloud Next Hackathon",
      date: "July 2023",
      organization: "Google Cloud",
      achievement: "Best Use of Google Cloud AI",
      projectSummary:
        "Created a real-time language translation app for video calls using Google Cloud's Speech-to-Text and Translation APIs.",
      repoLink: "https://github.com/johndoe/realtime-video-translator",
      eventLink:
        "https://cloud.google.com/blog/topics/events/google-cloud-next",
    },
    {
      name: "NASA Space Apps Challenge",
      date: "October 2022",
      organization: "NASA",
      achievement: "Global Finalist",
      projectSummary:
        "Built a web application that visualizes climate change data from NASA satellites to raise awareness and promote action.",
      repoLink: "https://github.com/johndoe/climate-viz",
      eventLink: "https://www.spaceappschallenge.org/",
    },
    {
      name: "MLH Local Hack Day",
      date: "December 2022",
      organization: "Major League Hacking",
      achievement: "Best Hardware Hack",
      projectSummary:
        "Developed a smart home energy management system using Raspberry Pi and machine learning algorithms.",
      repoLink: "https://github.com/johndoe/smart-energy-manager",
      eventLink: "https://mlh.io/seasons/2023/events",
    },
    {
      name: "AI for Good Hackathon",
      date: "March 2023",
      organization: "United Nations",
      achievement: "Most Innovative Solution",
      projectSummary:
        "Created an AI-driven platform to optimize resource distribution for refugee camps, improving living conditions.",
      repoLink: "https://github.com/johndoe/ai-for-good",
      eventLink: "https://aiforgood.itu.int/",
    },
    {
      name: "Ethereum DeFi Hackathon",
      date: "May 2023",
      organization: "Ethereum Foundation",
      achievement: "Best DeFi Solution",
      projectSummary:
        "Developed a decentralized lending protocol with dynamic interest rates based on market conditions.",
      repoLink: "https://github.com/johndoe/defi-lending",
      eventLink: "https://ethereum.org/en/defi/",
    },
    {
      name: "Cybersecurity Challenge",
      date: "August 2023",
      organization: "DEFCON",
      achievement: "Top 10 Finalist",
      projectSummary:
        "Designed and implemented a novel intrusion detection system using machine learning algorithms.",
      repoLink: "https://github.com/johndoe/ml-ids",
      eventLink: "https://www.defcon.org/",
    },
    {
      name: "Green Tech Hackathon",
      date: "April 2023",
      organization: "Greenpeace",
      achievement: "Most Scalable Solution",
      projectSummary:
        "Created a blockchain-based platform for tracking and verifying carbon credits to combat greenwashing.",
      repoLink: "https://github.com/johndoe/carbon-credit-tracker",
      eventLink: "https://www.greenpeace.org/international/",
    },
  ];

  const projects = [
    {
      name: "AI-Powered Task Manager",
      description:
        "A task management application that uses natural language processing to automatically categorize and prioritize tasks.",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
      githubLink: "https://github.com/johndoe/ai-task-manager",
      demoLink: "https://ai-task-manager.example.com",
    },
    {
      name: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology to ensure the integrity of election processes.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      githubLink: "https://github.com/johndoe/blockchain-voting",
      demoLink: "https://blockchain-voting.example.com",
    },
    {
      name: "IoT Home Automation",
      description:
        "A smart home system that integrates various IoT devices and provides a unified control interface through a mobile app.",
      technologies: ["React Native", "Node.js", "MQTT", "Raspberry Pi"],
      githubLink: "https://github.com/johndoe/iot-home-automation",
      demoLink: "https://iot-home.example.com",
    },
    {
      name: "AR Navigation App",
      description:
        "An augmented reality navigation app that overlays directions and points of interest on the real world through the camera view.",
      technologies: ["ARKit", "Swift", "CoreLocation", "MapKit"],
      githubLink: "https://github.com/johndoe/ar-navigation",
      demoLink: "https://ar-nav.example.com",
    },
    {
      name: "Quantum Algorithm Simulator",
      description:
        "A web-based simulator for quantum computing algorithms, allowing users to experiment with quantum circuits.",
      technologies: ["Python", "Qiskit", "Flask", "React"],
      githubLink: "https://github.com/johndoe/quantum-simulator",
      demoLink: "https://quantum-sim.example.com",
    },
    {
      name: "Sustainable Energy Tracker",
      description:
        "A mobile app that helps users track and optimize their energy consumption, promoting sustainable living practices.",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
      githubLink: "https://github.com/johndoe/energy-tracker",
      demoLink: "https://energy-tracker.example.com",
    },
    {
      name: "Decentralized Social Media Platform",
      description:
        "A blockchain-based social media platform that gives users full control over their data and content.",
      technologies: ["React", "Node.js", "IPFS", "Ethereum"],
      githubLink: "https://github.com/johndoe/decentra-social",
      demoLink: "https://decentra-social.example.com",
    },
    {
      name: "AI-Driven Financial Advisor",
      description:
        "An AI-powered application that provides personalized financial advice based on user's spending habits and financial goals.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/johndoe/ai-financial-advisor",
      demoLink: "https://ai-financial-advisor.example.com",
    },
    {
      name: "AI-Driven Financial Advisor",
      description:
        "An AI-powered application that provides personalized financial advice based on user's spending habits and financial goals.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/johndoe/ai-financial-advisor",
      demoLink: "https://ai-financial-advisor.example.com",
    },
    {
      name: "AI-Driven Financial Advisor",
      description:
        "An AI-powered application that provides personalized financial advice based on user's spending habits and financial goals.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/johndoe/ai-financial-advisor",
      demoLink: "https://ai-financial-advisor.example.com",
    },
    {
      name: "AI-Driven Financial Advisor",
      description:
        "An AI-powered application that provides personalized financial advice based on user's spending habits and financial goals.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/johndoe/ai-financial-advisor",
      demoLink: "https://ai-financial-advisor.example.com",
    },
  ];

  const extracurricular = [
    {
      title: "Robotics Club",
      role: "Team Lead",
      description:
        "Led a team of 5 in designing and building an autonomous robot for the annual robotics competition.",
    },
    {
      title: "Hackathon Participant",
      role: "Developer",
      description:
        "Participated in 3 hackathons, winning 2nd place in the university-wide coding challenge.",
    },
    {
      title: "Computer Science Tutor",
      role: "Peer Tutor",
      description:
        "Assisted fellow students with programming concepts and debugging in Java and Python.",
    },
    {
      title: "AI Research Assistant",
      role: "Undergraduate Researcher",
      description:
        "Collaborated with professors on machine learning projects, co-authoring a paper on neural network optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{userData.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <section
          id="about"
          className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8"
        >
          <img
            src={userData.avatar}
            alt={userData.name}
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{userData.name}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {userData.descriptors}
            </p>
            <p className="text-xl md:max-w-[80%] text-gray-700 dark:text-gray-400 mb-4">
              {userData.about}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={`mailto:${userData.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <MailIcon className="h-6 w-6" />
              </a>

              <a
                href={userData.github}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={userData.linkedin}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userData.skills.map((category) => (
              <div key={category.category} className="space-y-2">
                <h3 className="text-lg font-semibold">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userData.projects
              .slice(
                0,
                showAllProjects
                  ? userData.projects.length
                  : windowWidth > 768
                  ? 6
                  : userData.projects.length > 4
                  ? 4
                  : userData.projects.length
              )
              .map((project, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4 ${
                    index >= 4 && !showAllProjects
                      ? "opacity-0 md:opacity-100 md:relative"
                      : ""
                  }`}
                  style={
                    !showAllProjects &&
                    ((userData.projects.length > 6 &&
                      index >= 4 &&
                      index < 6 &&
                      windowWidth > 768) ||
                      (userData.projects.length > 4 &&
                        index == 3 &&
                        windowWidth <= 768))
                      ? {
                          maskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                        }
                      : {}
                  }
                >
                  <img
                    src={project.image}
                    width={"400px"}
                    height={"225px"}
                    alt="Project  "
                    className="rounded-t-xl w-full aspect-[16/9] object-cover"
                  />
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <GithubButton repoLink={project.githubLink}>
                      GitHub
                    </GithubButton>
                    {project.website && (
                      <LinkButton repoLink={project.website}>
                        Live Demo
                      </LinkButton>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {(windowWidth > 768 && userData.projects.length > 6) ||
          (windowWidth <= 768 && userData.projects.length > 4) ? (
            <div className="text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showAllProjects ? "Show Less" : "View More"}
                <ChevronDownIcon
                  className={`ml-2 -mr-1 h-5 w-5 ${
                    showAllProjects ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>

        <section id="education" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Education
          </h2>
          {/* COLLEGE DETAILS STARTS*/}
          <div
            id="college"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">
              {userData.education.college.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userData.education.college.school}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Year: {userData.education.college.year}
            </p>
            <p>Current GPA: {userData.education.college.cgpa}/10.0 </p>
            <p>Relevant Coursework: {userData.education.college.courseWork}</p>
          </div>
          {/* COLLEGE DETAILS ENDS */}
          {/* HSC DETAILS STARTS*/}
          <div
            id="std12th"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">
              {userData.education.std12th.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userData.education.std12th.college}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Year : {userData.education.std12th.year}
            </p>
            <p>HSC Board Exam : {userData.education.std12th.percentage}%</p>
            <p>
              MHT-CET : {userData.education.std12th.cetPercentile}
              %tile
            </p>
            <p>Relevant Coursework : {userData.education.std12th.courseWork}</p>
          </div>
          {/* HSC DETAILS ENDS*/}
          {/* SSC DETAILS STARTS*/}
          <div
            id="std10th"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">
              {userData.education.school.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {userData.education.school.school}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Year : {userData.education.school.year}
            </p>
            <p>SSC Board Exam : {userData.education.school.percentage}%</p>
            <p>Relevant Coursework : {userData.education.school.courseWork}</p>
          </div>
          {/* SSC DETAILS ENDS*/}
        </section>

        <section id="certifications" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userData.certifications.map((cert) => (
              <div
                key={cert.name}
                className={`${cert.color} rounded-lg shadow-md dark:bg-gray-800 p-6 space-y-4 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.organization}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-8 justify-between items-end">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </p>
                    <CertificateButton repoLink={cert.certificate}>
                      View Certificate
                    </CertificateButton>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AwardIcon className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">
                      {cert.rank}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="courses" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Courses Completed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.courses
              .slice(
                0,
                showAllCourses
                  ? userData.courses.length
                  : windowWidth > 768
                  ? 6
                  : userData.courses.length > 4
                  ? 4
                  : userData.courses.length
              )
              .map((course, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4 `}
                  style={
                    !showAllCourses &&
                    ((userData.courses.length > 6 &&
                      index >= 4 &&
                      index < 6 &&
                      windowWidth > 768) ||
                      (userData.courses.length > 4 &&
                        index == 3 &&
                        windowWidth <= 768))
                      ? {
                          maskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                        }
                      : {}
                  }
                >
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <div className="flex space-x-8 ">
                    <p className="text-gray-600 dark:text-gray-400">
                      Tutor: {course.tutor}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Platform: {course.platform}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {course.preview && (
                    <div className="flex space-x-4">
                      <a
                        href={course.preview}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Preview Course
                      </a>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {(windowWidth > 768 && userData.courses.length > 6) ||
          (windowWidth <= 768 && userData.courses.length > 4) ? (
            <div className="text-center">
              <button
                onClick={() => setShowAllCourses(!showAllCourses)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showAllCourses ? "Show Less" : "View More"}
                <ChevronDownIcon
                  className={`ml-2 -mr-1 h-5 w-5 ${
                    showAllCourses ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>

        <section id="hackathons" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Hackathons and Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userData.competitions
              .slice(
                0,
                showAllHackathons
                  ? userData.competitions.length
                  : windowWidth > 768
                  ? 6
                  : userData.competitions.length > 4
                  ? 4
                  : userData.competitions.length
              )
              .map((hackathon, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4 `}
                  style={
                    !showAllHackathons &&
                    ((userData.competitions.length > 6 &&
                      index >= 4 &&
                      index < 6 &&
                      windowWidth > 768) ||
                      (userData.competitions.length > 4 &&
                        index == 3 &&
                        windowWidth <= 768))
                      ? {
                          maskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, black 30%, transparent 100%)",
                        }
                      : {}
                  }
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{hackathon.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {hackathon.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {hackathon.organization}
                  </p>
                  <p className="font-medium text-green-600 dark:text-green-400">
                    {hackathon.achievement}
                  </p>
                  <p>{hackathon.projectSummary}</p>
                  <div className="flex  space-x-4">
                    {hackathon.repoLink && (
                      <GithubButton repoLink={hackathon.repoLink}>
                        View On Github
                      </GithubButton>
                    )}
                    {hackathon.certificate && (
                      <CertificateButton repoLink={hackathon.certificate}>
                        View Certificate
                      </CertificateButton>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {(windowWidth > 768 && userData.competitions.length > 6) ||
          (windowWidth <= 768 && userData.competitions.length > 4) ? (
            <div className="text-center">
              <button
                onClick={() => setShowAllHackathons(!showAllHackathons)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {showAllHackathons ? "Show Less" : "View More"}
                <ChevronDownIcon
                  className={`ml-2 -mr-1 h-5 w-5 ${
                    showAllHackathons ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>

        <section id="extracurricular" className="space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Extracurricular Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userData.extracurricular.map((activity) => (
              <div
                key={activity.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-2"
              >
                <h3 className="text-lg font-semibold">{activity.title}</h3>
                <p className="text-gray-600  dark:text-gray-400">
                  {activity.role}
                </p>
                <p className="text-gray-600  dark:text-gray-400">
                  {activity.year}
                </p>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-16">
        <p>&copy; 2024 {userData.name}. All rights reserved.</p>
      </footer>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full shadow-lg transition-opacity hover:bg-gray-700 dark:hover:bg-gray-300"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
