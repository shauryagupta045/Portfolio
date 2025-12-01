import React from 'react';
import {
  VoteIcon as NoteIcon,
  GamepadIcon,
  BrainIcon,
  MonitorIcon,
  ExternalLinkIcon,
  GithubIcon,
  SparklesIcon
} from 'lucide-react';
import './Project.css';
import nextgen from "../../assets/nextgen.png";
import vision from "../../assets/vision.png";
import note from "../../assets/Notezy.png";
import sf from "../../assets/sf.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="card-overlay">
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} className="link-btn github" target="_blank" rel="noopener noreferrer" title="View Code">
                <GithubIcon size={22} />
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} className="link-btn demo" target="_blank" rel="noopener noreferrer" title="Live Demo">
                <ExternalLinkIcon size={22} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="project-header">
          <div className={`icon-box ${project.className}`}>
            {project.icon}
          </div>
          <div className="title-box">
            <h3>{project.title}</h3>
            <span className="project-type">{project.type}</span>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="tech-stack-container">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>

        <div className="features-preview">
          <div className="feature-title">
            <SparklesIcon size={14} />
            <span>Highlights</span>
          </div>
          <ul>
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Notezy',
      description: 'Your intelligent digital desk for organizing notes and tasks with real-time sync.',
      icon: <NoteIcon size={24} />,
      image: note,
      type: 'Productivity Tool',
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind'],
      githubLink: 'https://github.com/shauryagupta045/NotesTaskingApp',
      demoLink: 'https://notes-tasking-app-nine.vercel.app/',
      className: 'theme-purple'
    },
    {
      title: 'NextGen-G',
      description: "The ultimate destination for gamers. Shop classic hits and new releases.",
      icon: <GamepadIcon size={24} />,
      image: nextgen,
      type: 'E-Commerce',
      features: ['Store Feature', 'News Section', 'Community Forum'],
      techStack: ['React.js', 'Tailwind', 'GSAP'],
      githubLink: 'https://github.com/shauryagupta045/GamingShopWebsite',
      demoLink: 'https://nextgeng.onrender.com/',
      className: 'theme-orange'
    },
    {
      title: 'Vision AI',
      description: "An advanced AI assistant that understands natural language and performs tasks.",
      icon: <BrainIcon size={24} />,
      image: vision,
      type: 'Artificial Intelligence',
      features: ['Natural Language', 'Task Automation', 'Human-like Responses'],
      techStack: ['React.js', 'Gemini API'],
      githubLink: 'https://github.com/shauryagupta045/Vision_AI',
      demoLink: 'https://shauryagupta045.github.io/Vision_AI/',
      className: 'theme-blue'
    },
    {
      title: 'Skill-Forge',
      description: "Empower your learning journey with expert-led interactive courses.",
      icon: <MonitorIcon size={24} />,
      image: sf,
      type: 'EdTech Platform',
      features: ['Interactive Courses', 'Progress Tracking', 'Certification'],
      techStack: ['HTML5', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/shauryagupta045/Skill-Forge_ElearingWebsite',
      demoLink: 'https://skill-forge-jade.vercel.app/',
      className: 'theme-green'
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container flex-center">

        <h1 className="section-title-01">PROJECTS</h1>
        <h2 className="section-title-02">FEATURED PROJECTS</h2>

      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;