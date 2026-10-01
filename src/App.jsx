import "./App.css";


import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Play,
  Palette,
  Video,
  Share2,
  Camera,
  Radio,
  Mic2,
  Printer,
  Monitor,
  CheckCircle2,
} from "lucide-react";

import "./App.css";

function App() {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Graphic Design",
      text: "Posters, flyers, social media graphics, event artwork, banners, cards and promotional materials.",
    },
    {
      icon: <Video size={28} />,
      title: "Video Production",
      text: "Video recording, editing, promotional videos, event videos and social media video content.",
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media",
      text: "Content creation, publishing, platform management and digital audience growth.",
    },
    {
      icon: <Camera size={28} />,
      title: "Camera Work",
      text: "Camera operation and visual coverage for church services, events and special programs.",
    },
    {
      icon: <Radio size={28} />,
      title: "Livestreaming",
      text: "Livestream setup, camera coordination, streaming operations and technical support.",
    },
    {
      icon: <Mic2 size={28} />,
      title: "Sound Engineering",
      text: "Audio setup, sound operation and support for live church services and events.",
    },
    {
      icon: <Printer size={28} />,
      title: "Print Production",
      text: "Preparation and production of printable posters, banners, cards, booklets and other materials.",
    },
    {
      icon: <Monitor size={28} />,
      title: "ICT Support",
      text: "Computer troubleshooting, technical support and digital systems assistance.",
    },
  ];

  const projects = [
    {
      image: "/portfolio/posters/womens-fellowship-1.jpg",
      category: "Graphic Design",
      title: "Women's Fellowship Campaign",
      description:
        "Event promotional artwork designed for digital communication and church promotion.",
    },
    {
      image: "/portfolio/posters/githogoro-crusade.jpg",
      category: "Event Design",
      title: "Githogoro Crusade",
      description:
        "Large event promotional artwork featuring speakers, branding and event information.",
    },
    {
      image: "/portfolio/posters/prayer-service.jpg",
      category: "Graphic Design",
      title: "Prayer Service",
      description:
        "Church event campaign artwork combining typography, portraits and visual branding.",
    },
    {
      image: "/portfolio/posters/womens-service.jpg",
      category: "Social Media Design",
      title: "Women's Fellowship Service",
      description:
        "Social media promotional graphic created to communicate an upcoming church service.",
    },
    {
      image: "/portfolio/posters/easter-sunday.jpg",
      category: "Event Design",
      title: "Easter Sunday Campaign",
      description:
        "Easter promotional artwork designed for digital communication and event awareness.",
    },
    {
      image: "/portfolio/posters/womens-sunday.jpg",
      category: "Graphic Design",
      title: "Women's Sunday",
      description:
        "Event artwork combining speaker photography, typography, theme and service information.",
    },
    {
      image: "/portfolio/posters/womens-fellowship-2.jpg",
      category: "Graphic Design",
      title: "Women's Fellowship",
      description:
        "Modern promotional design developed for church communication and social platforms.",
    },
    {
      image: "/portfolio/posters/anniversary.jpg",
      category: "Event Branding",
      title: "Church Anniversary",
      description:
        "Anniversary promotional artwork with a celebratory visual identity.",
    },
  ];

  const growth = [
    {
      platform: "YouTube",
      from: "1",
      to: "500",
      label: "Subscribers",
    },
    {
      platform: "TikTok",
      from: "1",
      to: "6K",
      label: "Followers",
    },
    {
      platform: "Facebook",
      from: "1",
      to: "8K",
      label: "Followers",
    },
  ];

  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            SW<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">What I Do</a>
            <a href="#work">My Work</a>
            <a href="#github">GitHub</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-tag">
            ICT • DIGITAL MEDIA • CREATIVE PRODUCTION
          </div>

          <h1>
            Creating Digital
            <br />
            <span>Experiences That Connect.</span>
          </h1>

          <p>
            I am an ICT and Digital Media Specialist focused on graphic design,
            video production, social media, livestreaming, camera work and
            creative digital communication.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-button">
              View My Work <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-contact">
            <span>
              <Mail size={17} />
              stevenwaithaka8119@gmail.com
            </span>

            <span>
              <Phone size={17} />
              +254 794 194 058
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-top">
              <span>CREATIVE</span>
              <span>01</span>
            </div>

            <div className="hero-card-icon">
              <Palette size={48} />
            </div>

            <h3>Digital Media</h3>
            <p>
              Design • Video • Social Media • Livestreaming
            </p>

            <div className="hero-card-line"></div>

            <span className="hero-card-small">
              Turning ideas into visual experiences.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-label">01 — ABOUT ME</div>

        <div className="about-grid">
          <div>
            <h2>
              Creative thinking
              <br />
              meets <span>technology.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am an ICT professional and digital media specialist with
              practical experience combining technology, creativity and
              communication.
            </p>

            <p>
              My work includes graphic design, video production, social media
              management, livestreaming, camera operations, sound engineering,
              ICT support and preparation of digital and printable materials.
            </p>

            <p>
              I enjoy turning ideas into clear, engaging and professional
              visual content that helps organizations communicate with their
              audiences.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-label">02 — WHAT I DO</div>

        <div className="section-heading">
          <h2>
            Skills built through
            <br />
            <span>real projects.</span>
          </h2>

          <p>
            A combination of creative, technical and media-production
            capabilities developed through hands-on experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span className="service-number">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA IMPACT */}
      <section className="section impact-section">
        <div className="section-label">03 — SOCIAL MEDIA IMPACT</div>

        <div className="impact-heading">
          <div>
            <h2>
              Growing audiences,
              <br />
              <span>building presence.</span>
            </h2>
          </div>

          <p>
            Through consistent content creation, publishing and digital media
            management, I contributed to significant growth across social
            platforms.
          </p>
        </div>

        <div className="growth-grid">
          {growth.map((item, index) => (
            <div className="growth-card" key={index}>
              <div className="growth-platform">
                {item.platform}
              </div>

              <div className="growth-numbers">
                <strong>{item.from}</strong>
                <ArrowRight size={28} />
                <strong>{item.to}</strong>
              </div>

              <div className="growth-label">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section work-section" id="work">
        <div className="section-label">04 — SELECTED WORK</div>

        <div className="section-heading">
          <h2>
            Work I have
            <br />
            <span>created.</span>
          </h2>

          <p>
            A selection of creative work produced for events, social media,
            church communication and promotional campaigns.
          </p>
        </div>

        <div className="work-filters">
          <button className="active">All Work</button>
          <button>Graphic Design</button>
          <button>Video</button>
          <button>Social Media</button>
          <button>Print</button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <span>View Project</span>
                  <ArrowRight size={20} />
                </div>
              </div>

              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <div className="section-label">05 — EXPERIENCE</div>

        <div className="experience-heading">
          <h2>
            Experience that combines
            <br />
            <span>creative & technical work.</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 — 2026</div>

            <div className="timeline-content">
              <h3>
                ICT Social Media Manager, Graphic Designer & Video Producer
              </h3>

              <h4>Ridgeways Pentecostal Church</h4>

              <ul>
                <li>Managed digital media and social media content.</li>
                <li>Designed posters, flyers, banners and event graphics.</li>
                <li>Recorded, edited and published video content.</li>
                <li>Supported livestreaming and camera operations.</li>
                <li>Worked with sound and audiovisual equipment.</li>
                <li>Prepared printable materials including cards and booklets.</li>
                <li>Supported and coordinated media team activities.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2023</div>

            <div className="timeline-content">
              <h3>ICT Field Attachment</h3>

              <h4>Jilk Construction Company</h4>

              <ul>
                <li>Provided computer and technical support.</li>
                <li>Supported computer systems and software.</li>
                <li>Performed troubleshooting and ICT operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


{/* GITHUB PROJECTS */}
<section className="github-section" id="github">

  {/* Background Video */}
  <div className="github-video">
    <video
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="/public/videos/portfolio-bg.mp4"
        type="video/mp4"
      />
    </video>

    <div className="github-video-overlay"></div>
  </div>

  {/* Content */}
  <div className="github-content">

    <div className="section-label">
      05 — GITHUB & PROJECTS
    </div>

    <div className="github-heading">

      <div>
        <h2>
          Code that
          <br />
          <span>solves problems.</span>
        </h2>
      </div>

      <p>
        Explore my software development, web applications,
        ICT projects and coding experiments on GitHub.
      </p>

    </div>


    {/* PROJECT GRID */}
    <div className="github-projects">


      {/* PROJECT 01 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 01</span>

        </div>

        <h3>Prayers</h3>

        <p>
          A JavaScript-based project developed as part of my
          web development and software development work.
        </p>

        <div className="github-tech">
          <span>JavaScript</span>
          <span>Web Development</span>
        </div>

        <a
          href="https://github.com/Steve8119/prayers"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* PROJECT 02 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 02</span>

        </div>

        <h3>Ridgeways Pentecostal Church</h3>

        <p>
          A church-focused web project created for digital
          communication and online presence.
        </p>

        <div className="github-tech">
          <span>Web</span>
          <span>Church Website</span>
        </div>

        <a
          href="https://github.com/Steve8119/rpchurch"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* PROJECT 03 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 03</span>

        </div>

        <h3>Church Website</h3>

        <p>
          A web development project focused on creating an
          online platform for church communication and information.
        </p>

        <div className="github-tech">
          <span>HTML</span>
          <span>Web Development</span>
        </div>

        <a
          href="https://github.com/Steve8119/churchwebsite"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* PROJECT 04 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 04</span>

        </div>

        <h3>KakaTech</h3>

        <p>
          A React-based application demonstrating practical
          frontend development and modern web interface skills.
        </p>

        <div className="github-tech">
          <span>React</span>
          <span>CSS</span>
        </div>

        <a
          href="https://github.com/Steve8119/kakatech"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* PROJECT 05 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 05</span>

        </div>

        <h3>Agriculture Project</h3>

        <p>
          A Python-based project exploring technology and
          software solutions within the agriculture domain.
        </p>

        <div className="github-tech">
          <span>Python</span>
          <span>Agriculture</span>
        </div>

        <a
          href="https://github.com/Steve8119/agri"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* PROJECT 06 */}
      <article className="github-card">

        <div className="github-card-top">

          <div className="github-icon">
            <Monitor size={25} />
          </div>

          <span>PROJECT 06</span>

        </div>

        <h3>Veterinary Application</h3>

        <p>
          A Python project focused on developing a practical
          application for veterinary-related workflows.
        </p>

        <div className="github-tech">
          <span>Python</span>
          <span>Application</span>
        </div>

        <a
          href="https://github.com/Steve8119/vet_app"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          View Project
          <ArrowRight size={17} />
        </a>

      </article>


      {/* GITHUB PROFILE */}
      <article className="github-card github-profile-card">

        <div className="github-profile-icon">
          <span>GH</span>
        </div>

        <h3>Steve8119</h3>

        <p>
          Explore all my repositories, source code, web
          applications, Python projects and ongoing
          development work.
        </p>

        <div className="github-profile-stats">

          <div>
            <strong>22+</strong>
            <span>Repositories</span>
          </div>

          <div>
            <strong>5</strong>
            <span>Followers</span>
          </div>

        </div>

        <a
          href="https://github.com/Steve8119"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          Visit My GitHub
          <ArrowRight size={17} />
        </a>

      </article>

    </div>


    {/* VIEW ALL */}
    <div className="github-view-all">

      <a
        href="https://github.com/Steve8119?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="github-all-button"
      >
        Explore All Repositories
        <ArrowRight size={18} />
      </a>

    </div>

  </div>

</section>

      {/* WORKFLOW */}
      <section className="section workflow-section">
        <div className="section-label">06 — MY APPROACH</div>

        <div className="workflow-grid">
          <div>
            <h2>
              From idea
              <br />
              to <span>execution.</span>
            </h2>
          </div>

          <div className="workflow-list">
            <div>
              <CheckCircle2 size={22} />
              <span>Understand the message and audience</span>
            </div>

            <div>
              <CheckCircle2 size={22} />
              <span>Develop the creative concept</span>
            </div>

            <div>
              <CheckCircle2 size={22} />
              <span>Create and refine the content</span>
            </div>

            <div>
              <CheckCircle2 size={22} />
              <span>Publish, promote and evaluate results</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <div className="section-label">07 — CONTACT</div>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Whether you need creative design, video production, social media
            content, livestreaming or ICT support, let's connect.
          </p>

          <div className="contact-details">
            <a href="mailto:stevenwaithaka8119@gmail.com">
              <Mail size={20} />
              stevenwaithaka8119@gmail.com
            </a>

            <a href="tel:+254794194058">
              <Phone size={20} />
              +254 794 194 058
            </a>

            <span>
              <MapPin size={20} />
              Kenya
            </span>
          </div>

          <div className="contact-buttons">
            <a
              href="mailto:stevenwaithaka8119@gmail.com"
              className="primary-button"
            >
              Start a Conversation <ArrowRight size={18} />
            </a>

           <a
  href="/documents/Stephen-Waithaka-CV.pdf"
  className="secondary-button"
  download="Stephen-Waithaka-CV.pdf"
>
  Download CV <Download size={18} />
</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>SW.</strong>
          <span>ICT & Digital Media Specialist</span>
        </div>

        <p>
          © 2026 Stephen Waithaka. All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/254794194058"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-float"
  aria-label="Chat with me on WhatsApp"
>
  <span className="whatsapp-icon">
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.02 3C8.84 3 3 8.82 3 15.98c0 2.29.6 4.52 1.74 6.48L3 29l6.7-1.7a13 13 0 0 0 6.32 1.62h.01C23.2 28.92 29 23.1 29 15.98 29 8.82 23.2 3 16.02 3Zm0 23.77h-.01a10.77 10.77 0 0 1-5.49-1.5l-.39-.23-3.98 1.01 1.06-3.87-.25-.4a10.77 10.77 0 1 1 9.06 4.99Zm5.91-8.08c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.87-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.2 2 .12.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  </span>

  <span className="whatsapp-text">
    Chat with me
  </span>
</a>  
    </div>
  );
}

export default App;