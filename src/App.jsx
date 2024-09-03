import { useState, useEffect } from "react";
import {
  ChevronUpIcon,
  Github,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
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
import Carousel from "./components/Carousel";
export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const PUBLIC_URL = "/";

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
  const scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#education", text: "Education" },
    { href: "#certifications", text: "Certifications" },
    { href: "#courses", text: "Courses" },
    { href: "#hackathons", text: "Competitions" },
    { href: "#extracurricular", text: "Extra-Curricular" },
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
            <p className="text-xl md:max-w-[85%] text-gray-700 dark:text-gray-400 mb-8">
              {userData.about}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 px-6 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                onClick={() => alert("Downloading resume...")}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Download Resume
                  <DownloadIcon className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 px-6 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                onClick={() => window.open(userData.github, "_blank")}
              >
                <span className="relative z-10 flex items-center justify-center">
                  GitHub
                  <GithubIcon className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                onClick={() => window.open(userData.linkedin, "_blank")}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Connect
                  <LinkedinIcon className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-700 px-6 py-2 text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                onClick={() =>
                  (window.location.href = `mailto:${userData.email}`)
                }
              >
                <span className="relative z-10 flex items-center justify-center">
                  Email
                  <MailIcon className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-br from-red-700 to-red-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4`}
                  style={
                    !showAllProjects
                      ? (userData.projects.length > 6 &&
                          index >= 3 &&
                          index < 6 &&
                          windowWidth >= 1280) ||
                        (userData.projects.length > 6 &&
                          index >= 4 &&
                          index < 6 &&
                          windowWidth > 768 &&
                          windowWidth < 1280) ||
                        (userData.projects.length > 4 &&
                          index == 3 &&
                          windowWidth <= 768)
                        ? {
                            maskImage:
                              "linear-gradient(to bottom, black 30%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, black 30%, transparent 100%)",
                          }
                        : {}
                      : {}
                  }
                >
                  {/* <img
                    src={project.image}
                    width={"400px"}
                    height={"225px"}
                    alt="Project  "
                    className="rounded-t-xl w-full aspect-[16/9] object-cover"
                  /> */}
                  <div className="mx-4 mb-8 max-w-[500px] max-h-[300px] overflow-visible">
                    <Carousel images={project.images} />
                  </div>
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
                onClick={() => {
                  setShowAllProjects(!showAllProjects);
                  if (showAllProjects) {
                    scrollToTarget("projects");
                  }
                }}
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
                    src={`${PUBLIC_URL}${cert.logo}`}
                    alt={`${cert.organization} logo`}
                    className="rounded-full w-[60px] h-[60px] object-contain bg-white"
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
                    <CertificateButton
                      repoLink={`${PUBLIC_URL}${cert.preview}`}
                    >
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
                onClick={() => {
                  setShowAllCourses(!showAllCourses);
                  if (!showAllCourses) {
                    scrollToTarget("courses");
                  }
                }}
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
            {userData.extracurricular.map((activity, index) => (
              <div
                key={index}
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
