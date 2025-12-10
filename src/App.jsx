import React, { useState, useEffect } from "react";
import "./App.css";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  const [isDark, setIsDark] = useState(true);

  // Apply theme class to <body>
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <div className="b1">
        {/* ===== HEADER: PROFILE + SOCIAL BUTTONS ===== */}
        <header className="header">
          <div className="profile-card glass-card glass-pop">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFyUPvX1KXyfQ/profile-displayphoto-crop_800_800/B4EZh2cBKGGcAI-/0/1754333713437?e=1766620800&v=beta&t=fdUWZJ1v0mDhHy0XCu_ylV_5jllTUyL94F40cVpxtGc"
              alt="Thanujan Kapilan"
              className="profile-img"
            />

            <div className="profile-content">
              <h2>Thanujan Kapilan</h2>
              <p className="subtitle">
                🍁Aspiring Junior Software Engineer • Gen AI Enthusiast 
              </p>
              <p className="description">
Junior Software Engineer specializing in full-stack development and AI-driven solutions. I’ve built GenAI applications, automation tools, and scalable web projects using Python, JavaScript, React, Node.js, and SQL/NoSQL databases.

I also freelance in web development and UI/UX design, creating fast, modern websites that help companies grow their digital presence.
              </p>
            </div>
          </div>

          <div className="social-buttons">
            {/* Dark mode toggle */}
            <button
              type="button"
              className="social-btn theme-toggle"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle dark mode"
            >
              {isDark ? "🌙" : "☀️"}
            </button>

            <a
              href="https://www.linkedin.com/in/thanujan18/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <ImLinkedin size={25} />
            </a>

            <a
              href="https://github.com/daemonexe"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDqNjgmdHXZHNRVXkFdgfWKcJlktMrzflkRkTGxpVLqdcPSsVjxnxCzpWgPQjpjcZTVXlwV"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <SiGmail size={25} />
            </a>

            <a
              href="https://drive.google.com/file/d/1uOYeOp7LGtLHM2OaArMFnOh10cQmlxdK/view?usp=sharing"
              className="social-btn"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineNewspaper size={25} />
            </a>
          </div>
        </header>

        {/* ===== MAIN LAYOUT ===== */}
        <main className="content-layout">
          {/* ===== LEFT COLUMN: EXPERIENCE + SKILLS ===== */}
          <section className="left-column">
            {/* Experience */}
            <section className="experience-card glass-card glass-pop">
              <h3 className="section-title">Education</h3>

              <div className="experience-item">
                <h4>Diploma in Computer Programming — Seneca Polytechnic</h4>
                <p className="experience-meta">Toronto, ON · Aug 2025</p>
              </div>

              <br/>
              <hr/>
              <h3 className="section-title">Experience</h3>

              <div className="experience-item">
                <h4>Web Developer — Self-Employed</h4>
                <p className="experience-meta">Aug 2025 – Present · Remote</p>
                <ul>
                  <li>
                    Collaborate with companies on project-based web development, from
                    discovery to deployment.
                  </li>
                  <li>
                    Develop and optimize websites with a focus on performance, UX, and
                    business impact.
                  </li>
                  <li>
                    Create SEO strategies, visual branding, and digital marketing
                    recommendations to grow online presence.
                  </li>
                </ul>
              </div>

              <div className="experience-item">
                <h4>Wine Sales Specialist — Winerack</h4>
                <p className="experience-meta">July 2025 – Present · Hybrid</p>
                <ul>
                  <li>Boosted sales by 15% through data-driven customer engagement.</li>
                  <li>Managed digital inventory systems, stock audits, and write-offs.</li>
                  <li>Analyzed sales patterns to place accurate, efficient product orders.</li>
                  <li>
                    Strengthened troubleshooting skills through daily POS and system
                    operations.
                  </li>
                </ul>
              </div>

              <hr />
            </section>

            {/* Skills */}
            <section className="skills-card glass-card glass-pop">
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
                  </div>
                </div>

                <div className="skills-group">
                  <h4>Databases</h4>
                  <div className="skills-pills">
                    <span className="skill-pill">PostgreSQL</span>
                    <span className="skill-pill">MongoDB</span>
                    <span className="skill-pill">SQLite</span>
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
              </div>
            </section>
          </section>

          {/* ===== RIGHT COLUMN: PROJECTS + FREELANCE ===== */}
          <section className="right-column">
            {/* Projects */}
            <div className="section-header">
              <h3 className="section-title">Projects</h3>
            </div>

            <div className="projects-grid">
              <article className="project-card glass-card glass-pop">
                <h4>AI Fandom Generator (Movies / TV)</h4>
                <img
                  src="https://github.com/daemonexe/daemonexe/raw/main/Untitledvideo-MadewithClipchamp4-ezgif.com-video-to-gif-converter%20(1).gif?raw=true"
                  alt="AI Fandom Generator Preview"
                  className="project-img"
                />

                <p className="card-text">
                  MERN-stack AI app that integrates IMDb data and generates wiki-style
                  pages, quizzes, and dynamic content for movies/TV, with Framer Motion
                  and Tailwind for a smooth, responsive UI.
                </p>
                <div className="tag-row">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">Framer Motion</span>
                </div>

                <div className="card-links">
                  <a
                    href="https://github.com/daemonexe/QuantumFlicks-AI-"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                  <a
                    href="https://quantomflicksai.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    Live Demo
                  </a>
                </div>
              </article>

              <article className="project-card glass-card glass-pop">
                <h4>AI-Powered Document Extraction System</h4>
                <img
                  src="https://github.com/daemonexe/daemonexe/blob/main/doc-scan.png?raw=true"
                  alt="Document Extraction Preview"
                  className="project-img"
                />
                <p className="card-text">
                  Full-stack OCR + AI pipeline using Python, Flask, OpenCV, Tesseract,
                  and Groq&apos;s LLaMA 3.1 to extract structured lease data into JSON
                  and persist it in PostgreSQL with a history endpoint for auditing.
                </p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">PyTeseract</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">PostgreSQL</span>
                </div>

                <div className="card-links">
                  <a
                    href="https://github.com/daemonexe/DocScan-OCR-AI"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                  <a
                    href="https://doc-scan-ocr-ai.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    Live Demo
                  </a>
                </div>
              </article>

              <article className="project-card glass-card glass-pop">
                <h4>Survey Automation Website - Tim Hortons $1</h4>
                <img
                  src="https://github.com/daemonexe/daemonexe/blob/main/automatiopn.png?raw=true"
                  alt="Tim Hortons automation Website Preview"
                  className="project-img"
                />
                <p className="card-text">
                  Full-stack OCR + AI pipeline using Python, Flask, OpenCV, Tesseract,
                  and Groq&apos;s LLaMA 3.1 to extract structured lease data into JSON
                  and persist it in PostgreSQL with a history endpoint for auditing.
                </p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">Flask</span>
                  <span className="tag">Selenium</span>
                  <span className="tag">FAST API</span>
                </div>

                <div className="card-links">
                  <a
                    href="https://github.com/daemonexe/Tim-s-Survey-Automation"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                  <a
                    href="https://tim-s-survey-automation.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    Live Demo
                  </a>
                </div>
              </article>

              <article className="project-card glass-card glass-pop">
                <h4>Password Manager (Desktop)</h4>
                <img
                  src="https://raw.githubusercontent.com/daemonexe/daemonexe/refs/heads/main/Screenshot%202023-01-17%20133138.png"
                  alt="Password Manager Preview"
                  className="project-img"
                />

                <p className="card-text">
                  Local-only password manager built in Python with Tkinter and SQLite,
                  featuring encrypted storage, a strong password generator, and secure
                  file save workflow.
                </p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">Tkinter</span>
                  <span className="tag">SQLite</span>
                  <span className="tag">Pillow</span>
                </div>

                <div className="card-links">
                  <a
                    href="https://github.com/daemonexe/Password-Manager"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                </div>
              </article>

              <article className="project-card glass-card glass-pop">
                <h4>Paint Application (Desktop)</h4>
                <img
                  src="https://private-user-images.githubusercontent.com/110326955/270149971-4e576f87-b448-4fd5-a46a-3a16eb11f877.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjUyNTA5MzksIm5iZiI6MTc2NTI1MDYzOSwicGF0aCI6Ii8xMTAzMjY5NTUvMjcwMTQ5OTcxLTRlNTc2Zjg3LWI0NDgtNGZkNS1hNDZhLTNhMTZlYjExZjg3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIwOVQwMzIzNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00M2MyZmYyODQ0MDZhMGVhNTdlYzdhZTgxOTIxN2NiMTMxNDQzMjRkZTZlY2JjMTY4NTJmZjU4ZWNjN2VjZjgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qGP2bvCv5PkIHCC03ZtCvOY--jTD-QiODNwrgipGkEQ"
                  alt="Paint App Preview"
                  className="project-img"
                />

                <p className="card-text">
                  Simple drawing app using Python and Tkinter with adjustable brush size,
                  color selection, and export to image for quick sketches. Utilized the
                  canvas module for drawing features.
                </p>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">Tkinter</span>
                  <span className="tag">GUI</span>
                </div>
                <div className="card-links">
                  <a
                    href="https://github.com/daemonexe/Paint-Application"
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                  >
                    View Code
                  </a>
                </div>
              </article>
            </div>

            {/* Freelance / Client Work */}
            <div className="section-header">
              <h3 className="section-title">Freelance & Client Work</h3>
            </div>

            <div className="freelance-grid">
              <article className="freelance-card glass-card glass-pop">
                <h4>NGM - Hotel Renovation Company</h4>

                <img
                  src="https://github.com/daemonexe/daemonexe/blob/main/ddy.png?raw=true"
                  alt="NGM website preview"
                  className="project-img"
                />

                <p className="card-text">
                  Designed and built a modern website for a Canadian hotel renovation
                  company serving brands like Marriott and Hilton, improving SEO and lead
                  generation.
                </p>
                <br />
                <a
                  href="https://www.ngmltd.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Website
                </a>
              </article>

              <article className="freelance-card glass-card glass-pop">
                <h4>lR - Glass Manufacturing Brand</h4>
                <img
                  src="https://github.com/daemonexe/daemonexe/blob/main/lr.png?raw=true"
                  alt="Glass brand website preview"
                  className="project-img"
                />
                <p className="card-text">
                  Delivered logo design and a retro, old-school themed website aligned
                  with client requirements and target customers.
                </p>
                <br />
                <a
                  href="https://www.lrglass.online/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Website
                </a>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
