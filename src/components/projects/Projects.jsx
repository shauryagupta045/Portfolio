// Projects.jsx
import React from 'react';
import './Project.css'; // Assuming you'll have corresponding CSS
import notezyImage from '../../assets/Notezy.png'; // Adjust path as needed

// Individual Project Component
const ProjectCard = ({ project }) => {
  return (
    <div className="project-grid">
      {/* Project Title */}
      <div className={`${project.className}-title project-title`}>
        <div className="icon-title">
          {project.icon}
          <h1>{project.title}</h1>
        </div>
        <p>{project.description}</p>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className={`${project.className}-image project-image`}>
          <img src={project.image} alt={project.alt} />
        </div>
      )}

      {/* Features (if available) */}
      {project.features && (
        <div className="features">
          <div className="feature-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Features</span>
          </div>
          <div className="feature-list">
            {project.features.map((feature, index) => (
              <div key={index}>{feature}</div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <div className={`${project.className}-tech tech-stack`}>
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
           Tech Stack
          </h3>
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Link */}
      {project.githubLink && (
        <div className={`${project.className}-github github-link`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          <a href={project.githubLink}>View Code</a>
        </div>
      )}

      {/* Demo Link */}
      {project.demoLink && (
        <div className="demo-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <a href={project.demoLink}>Demo</a>
        </div>
      )}
    </div>
  );
};

// Main Projects Section Component
const Projects = () => {
  const projects = [
    {
      className: '',
      title: 'Notezy',
      description: 'Your Digital Desk for Notes & Tasks',
      overview: 'Notezy is a digital platform for managing notes and tasks efficiently.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      ),
      image: notezyImage,
      alt: '',
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com/shauryagupta045/NotesTaskingApp',
      demoLink: 'https://notes-tasking-app-nine.vercel.app/',
    },
    {
      className: 'melodify',
      title: 'NextGen-G',
      description: 'From Classic Hits to New Releases—We\'ve Got You Covered',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <line x1="15" y1="13" x2="15.01" y2="13" />
          <line x1="18" y1="11" x2="18.01" y2="11" />
          <rect x="2" y="6" width="20" height="12" rx="2" />
        </svg>
      ),
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
      alt: 'Music Interface',
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React', 'TensorFlow.js', 'Web Audio API'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      className: 'snappro',
      title: 'Vision Ai',
      description: 'Ask me anything—I’ve got answers',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <circle cx="9" cy="7" r="2" />
          <circle cx="15" cy="7" r="2" />
          <path d="M8 14h8" />
          <path d="M9 18h6" />
        </svg>
      ),
      image:
        'https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80',
      alt: 'Photo Editor Interface',
      features: ['Real-time Generation', 'Multi-track Export', 'Genre Mixing'],
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      className: 'shopsmart',
      title: 'Games',
      description: 'edit karna hai abhi',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="1" />
          <circle cx="15" cy="9" r="1" />
          <circle cx="9" cy="15" r="1" />
          <circle cx="15" cy="15" r="1" />
        </svg>
      ),
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
          <div className="Projectcontainer">
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