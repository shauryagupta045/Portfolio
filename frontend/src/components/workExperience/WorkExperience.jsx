import React from 'react';
import {
    BriefcaseIcon,
    CalendarIcon,
    MapPinIcon,
    CheckIcon,
    ServerIcon,
    BuildingIcon,
} from 'lucide-react';
import './WorkExperience.css';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <div className={`experience-header ${experience.className || ''}`}>
                <div className="experience-title">
                    <div className="icon-title">
                        {experience.icon || <BriefcaseIcon size={32} />}
                        <div>
                            <h2>{experience.role}</h2>
                            <div className="company-name">
                                <BuildingIcon size={16} />
                                <span>{experience.company}</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-meta">
                        <div className="meta-item">
                            <CalendarIcon size={16} />
                            <span>{experience.duration}</span>
                        </div>
                        <div className="meta-item">
                            <MapPinIcon size={16} />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-content">
                <p className="description">{experience.description}</p>

                {experience.achievements && (
                    <div className="achievements">
                        <div className="feature-header">
                            <CheckIcon size={20} />
                            <span>Key Achievements</span>
                        </div>
                        <div className="feature-list">
                            {experience.achievements.map((achievement, index) => (
                                <div key={index}>{achievement}</div>
                            ))}
                        </div>
                    </div>
                )}

                {experience.techStack && (
                    <div className="tech-stack">
                        <div className="tech-header">
                            <ServerIcon size={20} />
                            <span>Technologies Used</span>
                        </div>
                        <div className="tech-tags">
                            {experience.techStack.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const WorkExperience = () => {
    const experiences = [
        {
            role: 'Full Stack Developer Intern',
            company: 'Null Class',
            duration: 'June 2025 - September 2025',
            location: 'Remote',
            description: 'Full Stack Developer Intern at Null Class',
            icon: <BriefcaseIcon size={32} />,
            achievements: [
                'Built 8+ responsive UI components using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
                'Integrated REST APIs with error-handled async flows, decreasing UI load failures by 40%',
                'Collaborated with senior developers to optimize frontend performance, resulting in a 15% reduction in page load times.',
                'Participated in code reviews and implemented best practices for clean, maintainable code architecture.'
            ],
            techStack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs'],
            className: 'null-class'
        },
        {
            role: 'Freelance Graphic Designer',
            company: 'RB Digital Company',
            duration: 'April 2024 - Ongoing',
            location: 'Remote',
            description: 'Freelance Graphic Designer at RB Digital Company',
            icon: <BriefcaseIcon size={32} />,
            achievements: [
                'Designed branding assets and digital creatives for social media campaigns.',
                'Improved online engagement by delivering polished, business-focused designs.',
                'Managed multiple client projects simultaneously, ensuring timely delivery of high-quality visual assets.',
                'Utilized Adobe Creative Suite to create vector graphics and illustrations that aligned with client brand identities.'
            ],
            techStack: ['Adobe Creative Suite', 'Branding', 'Social Media Design', 'Digital Creatives'],
            className: 'rb-digital'
        }
    ];

    return (
        <section className="work-experience section" id="experience">
            <div className="container flex-center">
                <h1 className="section-title-01">EXPERIENCE</h1>
                <h2 className="section-title-02">WORK EXPERIENCE</h2>
                <div className="content">
                    <div className="experience-description">
                        <h3>MY PROFESSIONAL JOURNEY</h3>
                    </div>
                    <div className="experience-grid">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
