
import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code2,
  BrainCircuit,
  Database,
  Cpu,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Real-Time Driver Drowsiness Detection",
    category: "Computer Vision · Team Project",
    description:
      "Developed a real-time driver monitoring system using computer vision to detect signs of drowsiness and help improve road safety.",
    details: [
      "Used facial landmark detection and Eye Aspect Ratio (EAR) to identify eye closure.",
      "Implemented alert mechanisms to notify drivers when drowsiness is detected.",
      "Worked with Python, OpenCV, Dlib and Raspberry Pi.",
    ],
    tech: ["Python", "OpenCV", "Dlib", "Raspberry Pi"],
  },
  {
    number: "02",
    title: "Pneumonia Detection Using Deep Learning",
    category: "Artificial Intelligence · Individual Project",
    description:
      "Built an image classification project using deep learning to identify potential pneumonia cases from chest X-ray images.",
    details: [
      "Applied image preprocessing techniques to prepare X-ray images.",
      "Developed a Convolutional Neural Network (CNN) classification model.",
      "Used TensorFlow and Keras for model development.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
  },
  {
    number: "03",
    title: "Assistance on Highway",
    category: "Mobile Application · Individual Project",
    description:
      "Designed an app-driven solution focused on making highway assistance services more accessible and coordinated.",
    details: [
      "Focused on accessibility for people requiring highway assistance.",
      "Explored app-based coordination of assistance services.",
    ],
    tech: ["Android Studio"],
  },
  {
    number: "04",
    title: "Inventory Management System",
    category: "Web Development · Individual Project",
    description:
      "Created an inventory management system to organise product records, monitor stock levels and support efficient data retrieval.",
    details: [
      "Implemented product record management.",
      "Designed stock-level monitoring functionality.",
      "Used SQL for data storage and retrieval.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SQL", "Bootstrap"],
  },
  {
    number: "05",
    title: "Distributed Token Management System",
    category: "Software Development · Individual Project",
    description:
      "Developed a token management solution to generate, allocate and manage tokens across multiple service points.",
    details: [
      "Implemented token status tracking and queue management.",
      "Supported data management and retrieval.",
      "Focused on improving service workflow efficiency.",
    ],
    tech: ["Python", "Flask", "Ngrok", "JSON", "Postman"],
  },
];

const experiences = [
  {
    role: "Engagement Specialist",
    company: "Entrecon Global",
    location: "Tel-Aviv, Israel",
    period: "July 2023 – October 2023",
    points: [
      "Coordinated entrepreneurial workshops and technology forums.",
      "Managed stakeholder communication, event logistics and team collaboration.",
    ],
  },
  {
    role: "Event Coordinator",
    company: "Entrepreneurship Cell, VIT",
    location: "Vellore, India",
    period: "July 2022 – August 2023",
    points: [
      "Co-led E-Summit ’23, engaging more than 4,500 participants.",
      "Oversaw event logistics, guest travel and team coordination.",
    ],
  },
  {
    role: "Head of Operations",
    company: "Private Company",
    location: "Odisha, India",
    period: "January 2020 – 2021",
    points: [
      "Led a 20-member team and managed operational activities.",
      "Oversaw logistics, financial operations and reporting.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology – Information Technology",
    institution: "Vellore Institute of Technology, Vellore",
    period: "2022 – 2026",
    score: "CGPA: 7.88",
  },
  {
    degree: "Intermediate Education",
    institution: "FIITJEE Junior College, Visakhapatnam",
    period: "2019 – 2021",
    score: "67%",
  },
  {
    degree: "Secondary Education",
    institution: "Sri Prakash Vidyaniketan, Visakhapatnam",
    period: "2019",
    score: "81.5%",
  },
];

const certifications = [
  "Microsoft Certified: Azure AI Fundamentals (AI-900)",
  "Qualcomm Academy: AI Upskilling – Technical Foundation",
  "Qualcomm Academy: Hands-on Development from Model to App",
  "Google Cloud Skill Badge: Build Real-World AI Applications with Gemini and Imagen",
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "HTML", "CSS"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras"],
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    skills: ["OpenCV", "Dlib"],
  },
  {
    icon: Database,
    title: "Database & Protocols",
    skills: ["SQL", "MySQL", "MQTT"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          PV<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's connect <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              IT Graduate · Open to opportunities
            </div>

            <p className="hero-intro">HELLO, I'M</p>
            <h1>
              Prathi
              <br />
              <span>Vikhyat.</span>
            </h1>

            <p className="hero-description">
              An IT graduate passionate about building technology-driven
              solutions through software development, artificial intelligence
              and problem-solving.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore my work <ArrowUpRight size={18} />
              </a>
              <a
                className="secondary-button"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> Download resume
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
              <a href="mailto:vikkiprathi03@gmail.com" aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img
                src="/profile.jpg"
                alt="Prathi Vikhyat"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="portrait-placeholder">
                <span>PV</span>
                <small>ADD YOUR PROFESSIONAL PHOTO</small>
              </div>
            </div>
            <div className="floating-card floating-card-top">
              <Sparkles size={16} /> Curious mind. Creative solutions.
            </div>
            <div className="floating-card floating-card-bottom">
              <Code2 size={18} />
              <div>
                <strong>Tech enthusiast</strong>
                <small>Always learning & building</small>
              </div>
            </div>
            <span className="visual-decoration decoration-one">✳</span>
            <span className="visual-decoration decoration-two">✳</span>
          </div>

          <a className="scroll-hint" href="#about">
            SCROLL TO EXPLORE <ChevronDown size={15} />
          </a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="A little about me."
            description="Technology, curiosity and a drive to create meaningful solutions."
          />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I am an Information Technology graduate from VIT, with a
                growing interest in artificial intelligence, computer vision
                and software development.
              </p>
              <p>
                Through academic projects and professional experiences, I have
                developed practical exposure to building technology-driven
                solutions, coordinating teams and solving real-world problems.
                I enjoy learning new technologies and turning ideas into
                useful applications.
              </p>
              <p>
                I bring together technical curiosity, analytical thinking,
                communication and a collaborative approach to every project.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span>01</span>
                <strong>IT Graduate</strong>
                <small>Vellore Institute of Technology</small>
              </div>
              <div className="fact-card">
                <span>02</span>
                <strong>AI & Development</strong>
                <small>Exploring intelligent solutions</small>
              </div>
              <div className="fact-card">
                <span>03</span>
                <strong>Team Leadership</strong>
                <small>Collaboration and coordination</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="02 / MY TOOLKIT"
            title="Skills & technologies."
            description="The tools and technologies I use to turn ideas into solutions."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-icon">
                    <Icon size={23} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="soft-skills">
            <span className="eyebrow">PROFESSIONAL SKILLS</span>
            <div>
              {[
                "Analytical Thinking",
                "Problem-Solving",
                "Leadership",
                "Teamwork",
                "Communication",
                "Project Coordination",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects I've built."
            description="A selection of academic and individual projects where I explored ideas and applied technology."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            eyebrow="04 / EXPERIENCE"
            title="Where I've contributed."
            description="Experiences that shaped my approach to teamwork, responsibility and execution."
          />

          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <span className="timeline-location">
                    <MapPin size={14} /> {item.location}
                  </span>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading
            eyebrow="05 / EDUCATION"
            title="My academic journey."
            description="The foundation behind my technical interests and learning."
          />

          <div className="education-grid">
            {education.map((item, index) => (
              <article className="education-card" key={item.degree}>
                <div className="education-icon">
                  <GraduationCap size={23} />
                </div>
                <span className="timeline-date">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <strong>{item.score}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <SectionHeading
            eyebrow="06 / CERTIFICATIONS"
            title="Learning never stops."
            description="Certifications and learning achievements."
          />
          <div className="certification-list">
            {certifications.map((certification, index) => (
              <div className="certification-item" key={certification}>
                <div className="certification-icon">
                  <Award size={21} />
                </div>
                <p>{certification}</p>
                <span>0{index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content">
            <span className="eyebrow">07 / GET IN TOUCH</span>
            <h2>
              Have an idea?
              <br />
              <span>Let's connect.</span>
            </h2>
            <p>
              I'm open to opportunities, collaborations and conversations
              around technology and software development.
            </p>

            <a className="primary-button contact-button" href="mailto:vikkiprathi03@gmail.com">
              Say hello <ArrowUpRight size={18} />
            </a>

            <div className="contact-details">
              <a href="mailto:vikkiprathi03@gmail.com">
                <Mail size={17} /> vikkiprathi03@gmail.com
              </a>
              <a href="tel:+917855880663">
                <Phone size={17} /> +91 7855880663
              </a>
              <span>
                <MapPin size={17} /> Berhampur, Odisha, India
              </span>
            </div>
          </div>
          <div className="contact-decoration">PV<span>.</span></div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">PV<span>.</span></a>
        <p>Designed & built by Prathi Vikhyat · © {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
