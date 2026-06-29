import React, { useState, useEffect } from "react";
import "./App.css";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const clientWork = [
  {
    title: "LR Glass & Aluminium",
    type: "E-Commerce Web Application",
    img: "https://github.com/daemonexe/daemonexe/blob/main/lr-glass.png?raw=true",
    tags: ["Wix", "SEO", "Google Ads"],
    description:
      "Built a full e-commerce web application for a glass and aluminium manufacturer, featuring product catalogs, service pages, SEO optimization, and Google Ads integration that drove 100+ monthly online conversions.",
  },
  {
    title: "NGM Ltd",
    type: "Hotel Renovations Website",
    img: "https://github.com/daemonexe/daemonexe/blob/main/ngm-ltd.png?raw=true",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "Designed and developed a modern business website for a hotel renovation company, featuring a project portfolio, services overview, and contact system built with the MERN stack.",
  },
  {
    title: "Omega Accounting & Tax",
    type: "Accounting Services Website",
    img: "https://github.com/daemonexe/daemonexe/blob/main/omega.png?raw=true",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "Created a professional services website for an accounting firm, with service breakdowns, team profiles, and a client contact flow built on React with a Node.js backend.",
  },
];

const projects = [
  {
    title: "AI Fandom Generator (Movies / TV)",
    img: "https://github.com/daemonexe/daemonexe/raw/main/Untitledvideo-MadewithClipchamp4-ezgif.com-video-to-gif-converter%20(1).gif?raw=true",
    description:
      "MERN-stack AI app that integrates IMDb data and generates wiki-style pages, quizzes, and dynamic content for movies/TV, with Framer Motion and Tailwind for a smooth, responsive UI.",
    tags: ["React", "Node.js", "MongoDB", "Framer Motion"],
    code: "https://github.com/daemonexe/QuantumFlicks-AI-",
    demo: "https://quantomflicksai.vercel.app/",
  },
  {
    title: "AI-Powered Document Extraction",
    img: "https://github.com/daemonexe/daemonexe/blob/main/doc-scan.png?raw=true",
    description:
      "Full-stack OCR + AI pipeline using Python, Flask, OpenCV, Tesseract, and Groq’s LLaMA 3.1 to extract structured lease data into JSON and persist it in PostgreSQL.",
    tags: ["Python", "PyTesseract", "OpenCV", "PostgreSQL"],
    code: "https://github.com/daemonexe/DocScan-OCR-AI",
    demo: "https://doc-scan-ocr-ai.vercel.app/",
  },
  {
    title: "Survey Automation Engine",
    img: "https://github.com/daemonexe/daemonexe/blob/main/automatiopn.png?raw=true",
    description:
      "Full-stack web automation tool using Selenium and Flask with a FastAPI backend, featuring browser automation, proxy rotation, and a clean interface for managing automated submissions.",
    tags: ["Python", "Flask", "Selenium", "FastAPI"],
    code: "https://github.com/daemonexe/Tim-s-Survey-Automation",
    demo: "https://tim-s-survey-automation.vercel.app/",
  },
  {
    title: "Password Manager (Desktop)",
    img: "https://raw.githubusercontent.com/daemonexe/daemonexe/refs/heads/main/Screenshot%202023-01-17%20133138.png",
    description:
      "Local-only password manager built in Python with Tkinter and SQLite, featuring encrypted storage, a strong password generator, and secure file save workflow.",
    tags: ["Python", "Tkinter", "SQLite", "Pillow"],
    code: "https://github.com/daemonexe/Password-Manager",
  },
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [expandedClient, setExpandedClient] = useState(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="b1">
      <header className="header">
        <div className="profile-card glass-card">
          <img
            src="https://avatars.githubusercontent.com/u/110326955?v=4"
            alt="Thanujan Kapilan"
            className="profile-img"
          />
          <div className="profile-content">
            <h2>Thanujan Kapilan</h2>
            <p className="subtitle">
              Full-Stack Developer & AI Builder | Open to Relocate Atlantic
              Canada | PGWP 2029
            </p>
            <p className="description">
              Recent Computer Programming graduate with hands-on experience
              building real client projects and GenAI-enabled software products.
              Strong foundation in full-stack development, modern web
              technologies, and AI-driven systems.
            </p>
            <div className="profile-links">
              <a
                href="https://github.com/daemonexe"
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
              >
                <FaGithub size={16} /> github.com/daemonexe
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=k.thanujan.nk@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
              >
                <SiGmail size={14} /> Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="profile-card glass-card faq-card">
          <div className="profile-content">
            <h2>Recruiter FAQ</h2>

            <p className="subtitle">Location</p>
            <p className="description">
              Toronto, ON — especially interested in relocating to Atlantic
              Canada (NB, NS). Also open to remote across Canada.
            </p>

            <p className="subtitle">Education</p>
            <p className="description">
              Diploma in Computer Programming (Seneca Polytechnic) — Aug 2025.
            </p>

            <p className="subtitle">Target Roles</p>
            <p className="description">
              Junior Software Developer, Full-Stack / Backend, Web Developer,
              GenAI / Automation, Software Dev Intern
            </p>

            <p className="subtitle">Work Authorization</p>
            <p className="description">
              Authorized to work full-time in Canada (PGWP valid until 2029).
            </p>

            <p className="subtitle">Availability</p>
            <p className="description">Available immediately.</p>
          </div>
        </div>

        <div className="social-buttons">
          <button
            type="button"
            className="social-btn theme-toggle"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle dark mode"
            data-tooltip="Switch Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <a
            href="https://www.linkedin.com/in/thanujan18/"
            target="_blank"
            rel="noreferrer"
            data-tooltip="LinkedIn"
            className="social-btn"
          >
            <ImLinkedin size={25} />
          </a>

          <a
            href="https://github.com/daemonexe"
            target="_blank"
            rel="noreferrer"
            data-tooltip="GitHub"
            className="social-btn"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=k.thanujan.nk@gmail.com"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Email Me"
            className="social-btn"
          >
            <SiGmail size={25} />
          </a>

          <a
            href="https://docs.google.com/document/d/1P6gObRw7p7lGZOqJTJ40QEWapbZBwfEZ/edit?usp=sharing&ouid=116289683492122257416&rtpof=true&sd=true"
            className="social-btn"
            target="_blank"
            data-tooltip="Resume"
            rel="noreferrer"
          >
            <HiOutlineNewspaper size={25} />
          </a>
        </div>
      </header>

      <main className="content-layout">
        <section className="left-column">
          <section className="skills-card glass-card">
            <h3 className="section-title">Skills</h3>
            <div className="skills-grid">
              <div className="skills-group">
                <h4>Languages</h4>
                <div className="skills-pills">
                  <span className="skill-pill">Python</span>
                  <span className="skill-pill">JavaScript</span>
                  <span className="skill-pill">C/C++</span>
                  <span className="skill-pill">C#</span>
                </div>
              </div>
              <div className="skills-group">
                <h4>Web & Frameworks</h4>
                <div className="skills-pills">
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">Node.js</span>
                  <span className="skill-pill">Flask</span>
                  <span className="skill-pill">FastAPI</span>
                  <span className="skill-pill">HTML/CSS</span>
                  <span className="skill-pill">Tailwind</span>
                  <span className="skill-pill">.NET</span>
                </div>
              </div>
              <div className="skills-group">
                <h4>Databases</h4>
                <div className="skills-pills">
                  <span className="skill-pill">PostgreSQL</span>
                  <span className="skill-pill">MongoDB</span>
                  <span className="skill-pill">SQLite</span>
                  <span className="skill-pill">Oracle</span>
                  <span className="skill-pill">Pandas</span>
                </div>
              </div>
              <div className="skills-group">
                <h4>Tools & DevOps</h4>
                <div className="skills-pills">
                  <span className="skill-pill">Git</span>
                  <span className="skill-pill">Docker</span>
                  <span className="skill-pill">Linux</span>
                  <span className="skill-pill">Selenium</span>
                </div>
              </div>
              <div className="skills-group">
                <h4>IT Helpdesk</h4>
                <div className="skills-pills">
                  <span className="skill-pill">Microsoft 365</span>
                  <span className="skill-pill">Azure Services</span>
                  <span className="skill-pill">Salesforce</span>
                  <span className="skill-pill">Jira</span>
                  <span className="skill-pill">Ticketing</span>
                </div>
              </div>
            </div>
          </section>

          <section className="experience-card glass-card">
            <h3 className="section-title">Education</h3>
            <div className="experience-item">
              <h4>Diploma in Computer Programming — Seneca Polytechnic</h4>
              <p className="experience-meta">Toronto, ON · Aug 2025</p>
            </div>
            <hr />
            <h3 className="section-title">Experience</h3>
            <div className="experience-item">
              <h4>Freelance Developer — Self Employed</h4>
              <p className="experience-meta">
                Remote, Canada · Jan 2024 – Present
              </p>
              <ul>
                <li>
                  Developed and maintained production web applications for small
                  business clients across React, JavaScript, and Python stacks,
                  handling everything from build to post-launch support.
                </li>
                <li>
                  Diagnosed and resolved bugs in live environments, minimizing
                  downtime and maintaining application reliability for active
                  business operations.
                </li>
                <li>
                  Gathered requirements directly from non-technical clients and
                  translated them into working technical solutions, managing full
                  project lifecycles independently.
                </li>
                <li>
                  Optimized site performance and SEO, contributing to measurable
                  growth in monthly traffic and online conversions.
                </li>
                <li>
                  Managed Google Ads campaigns and implemented analytics tracking
                  to monitor performance and improve ROI for client businesses.
                </li>
                <li>
                  Designed branded assets including logos, layouts, and
                  promotional materials using Wix and design tools to support
                  client marketing efforts.
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Wine Sales Representative — Arterra Wines Canada</h4>
              <p className="experience-meta">
                On-site, Canada · Jun 2025 – Present
              </p>
              <ul>
                <li>
                  Maintained accurate inventory records and managed stock
                  workflows end-to-end, demonstrating strong attention to detail
                  and process discipline in a high-volume environment.
                </li>
                <li>
                  Resolved customer concerns and communicated solutions clearly
                  under pressure, consistently maintaining professionalism in a
                  fast-paced setting.
                </li>
                <li>
                  Processed high volumes of transactions with zero discrepancy,
                  building habits of precision and accountability transferable to
                  technical support environments.
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className="right-column">
          {/* ===== CLIENT WORK ===== */}
          <div className="section-header">
            <h3 className="section-title">Client Work</h3>
          </div>

          <div className="freelance-grid">
            {clientWork.map((item, i) => (
              <article
                key={i}
                className={`freelance-card glass-card ${expandedClient === i ? "expanded" : ""} ${expandedClient !== null && expandedClient !== i ? "hidden-card" : ""}`}
                onClick={() =>
                  expandedClient === null && setExpandedClient(i)
                }
              >
                {expandedClient === i && (
                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedClient(null);
                    }}
                    aria-label="Close"
                  >
                    <IoClose size={22} />
                  </button>
                )}
                <div className="freelance-img-wrapper">
                  <img
                    src={item.img}
                    alt={`${item.title} Website`}
                    className="freelance-img"
                  />
                </div>
                <div className="freelance-info">
                  <h4>{item.title}</h4>
                  <p className="freelance-type">{item.type}</p>
                  {expandedClient === i && (
                    <p className="expanded-description">{item.description}</p>
                  )}
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ===== PROJECTS ===== */}
          <div className="section-header" style={{ marginTop: "8px" }}>
            <h3 className="section-title">Projects</h3>
          </div>

          <div className="projects-grid">
            {projects.map((item, i) => (
              <article key={i} className="project-card glass-card">
                <h4>{item.title}</h4>
                <img
                  src={item.img}
                  alt={`${item.title} Preview`}
                  className="project-img"
                />
                <p className="card-text">{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-links">
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        Designed & built by Thanujan Kapilan ·{" "}
        <a
          href="https://github.com/daemonexe"
          target="_blank"
          rel="noreferrer"
        >
          github.com/daemonexe
        </a>
      </footer>
    </div>
  );
}

export default App;
