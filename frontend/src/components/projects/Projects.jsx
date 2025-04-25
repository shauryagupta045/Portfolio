import React from 'react';
import {
  VoteIcon as NoteIcon,
  GamepadIcon,
  BrainIcon,
  MonitorIcon,
  CheckIcon,
  ServerIcon,
  ExternalLinkIcon,
  GithubIcon,
} from 'lucide-react';
import './Project.css'; 
import nextgen from "../../assets/nextgen.png";
import vision from "../../assets/vision.png";
import note from "../../assets/Notezy.png";
import sf from "../../assets/sf.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className={`project-header ${project.className || ''}`}>
        <div className="project-title">
          <div className="icon-title">
            {project.icon || <NoteIcon size={32} />}
            <h2>{project.title}</h2>
          </div>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="project-content">
        {project.image && (
          <div className="project-image">
            <img src={project.image} alt={project.alt || project.title} />
          </div>
        )}

        {project.features && (
          <div className="features">
            <div className="feature-header">
              <CheckIcon size={20} />
              <span>Features</span>
            </div>
            <div className="feature-list">
              {project.features.map((feature, index) => (
                <div key={index}>{feature}</div>
              ))}
            </div>
          </div>
        )}

        {project.techStack && (
          <div className="tech-stack">
            <div className="tech-header">
              <ServerIcon size={20} />
              <span>Tech Stack</span>
            </div>
            <div className="tech-tags">
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={24} />
              <span>View Code</span>
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon size={24} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Notezy',
      description: 'Your Digital Desk for Notes & Tasks',
      icon: <NoteIcon size={32} />,
      image: note,
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com/shauryagupta045/NotesTaskingApp',
      demoLink: 'https://notes-tasking-app-nine.vercel.app/',
    },
    {
      className: 'nextgen',
      title: 'NextGen-G',
      description: "From Classic Hits to New Releases—We've Got You Covered",
      icon: <MonitorIcon size={32} />,
      image: nextgen,
      features: ['Store Feature', 'News Section', 'Community Forum or Discussion Board'],
      techStack: ['React.js', 'TailWind CSS', 'Gsap'],
      githubLink: 'https://github.com/shauryagupta045/GamingShopWebsite',
      demoLink: 'https://nextgeng.onrender.com/',
    },
    {
      className: 'vision',
      title: 'Vision AI',
      description: "Ask me anything—I've got answers",
      icon: <BrainIcon size={32} />,
      image: vision,
      features: ['Understands natural language', 'Knows many topics', 'Writes like humans','Performs user tasks'],
      techStack: ['React.js', 'Gemini APi'],
      githubLink: 'https://github.com/shauryagupta045/Vision_AI',
      demoLink: 'https://shauryagupta045.github.io/Vision_AI/',
    },
    /* 
    {
      className: 'games',
      title: 'Games',
      description: 'Interactive Gaming Experience',
      icon: <GamepadIcon size={32} />,
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      demoLink: '#',
    },*/
    {
      className: 'elearing',
      title: 'Skill-Forge',
      description: "Empower your learning journey with expert-led courses, interactive content, and career-ready skills.",
      icon: <MonitorIcon size={32} />,
      image: sf,
      features: ['Interactive Courses', 'Progress Tracking', 'Certification on Completion'],
      techStack: ['html5', 'CSS', 'javaScript', 'bootstrap'],
      githubLink: 'https://github.com/shauryagupta045/Skill-Forge_ElearingWebsite',
      demoLink: 'https://skill-forge-jade.vercel.app/',
    },

  ];

  return (
    <section className="projects section" id="projects">
      <div className="container flex-center">
        <h1 className="section-title-01">PROJECTS</h1>
        <h1 className="section-title-02">PROJECTS</h1>
        <div className="content">
          <div className="projects-description">
            <h3>WHAT I PROVIDE YOU</h3>
          </div>
          <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;