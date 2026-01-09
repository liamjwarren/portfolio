import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  tags: string[];
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
  thumbnail?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Skin Abnormality Monitoring Dashboard',
      description: 'Capstone project that allows people to take pictures of their skin abnormalities and track their progress in terms of size and colour over time.',
      detailedDescription: 'The Skin Abnormality Monitoring Dashboard was developed as my Capstone Project for the Bachelor of Computer Engineering degree. This application empowers users to monitor skin abnormalities by tracking changes in size and color over time through regular photo documentation.',
      features: [
        'Served as Scrum Master for the development team',
        'Led frontend development using React and TypeScript',
        'Implemented image capture and storage functionality',
        'Developed tracking algorithms for size and color analysis',
        'Created intuitive dashboard for visualizing progression over time',
      ],
      tags: ['React', 'TypeScript', 'Healthcare'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: '',
      screenshots: ['/projects/capstone.png'],
      thumbnail: '/projects/capstone.png',
    },
    {
      title: '2022 Junior Atlantic Rugby Championship Website',
      description: 'Central hub of information for players, coaches, managers, and parents involved in the tournament.',
      detailedDescription: 'Developed the official website for the 2022 Junior Atlantic Rugby Championship, serving as the central information hub for all tournament stakeholders including players, coaches, managers, and parents.',
      features: [
        'Tournament fixtures and live results',
        'Real-time standings and statistics',
        'Embedded live stream functionality',
        'Sponsor showcase and information',
        'Responsive design for mobile and desktop access',
      ],
      tags: ['React', 'TypeScript', 'Web'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      githubUrl: 'https://github.com/liamjwarren/arc',
      screenshots: ['/projects/arc.png'],
      thumbnail: '/projects/arc.png',
    },
    {
      title: 'Scorekeeper',
      description: 'Application that allows for the score of a Rugby match to be updated and displayed on a live stream.',
      detailedDescription: 'Scorekeeper is a desktop application designed to manage live rugby match scoring with real-time updates to streaming overlays and social media platforms. Successfully deployed during the 2022 Junior Atlantic Rugby Championships and Memorial University Seahawks home games.',
      features: [
        'Real-time score updates for live stream overlays',
        'Twitter and Facebook integration for automated score updates',
        'User-friendly interface built with PyQt5',
        'Used in production for multiple rugby tournaments',
        'Customizable branding and team configurations',
      ],
      tags: ['Python', 'PyQt5', 'Social Media'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: 'https://github.com/liamjwarren/NLRU-Score-Keeper',
      screenshots: ['/projects/scorekeeper.png'],
      thumbnail: '/projects/scorekeeper.png',
    },
    {
      title: 'Atlantica',
      description: 'Two-dimensional top-down role-playing game with collision system, gravity, weapons, NPC pathfinding and steering.',
      detailedDescription: 'Atlantica is a comprehensive 2D top-down RPG developed in C++ using the Simple and Fast Multimedia Library (SFML), featuring advanced game mechanics and AI systems.',
      features: [
        'Physics-based collision and gravity systems',
        'Diverse weapon system with damage mechanics',
        'NPC AI with pathfinding and steering behaviors',
        'Dynamic moving tiles and environmental hazards',
        'Complete inventory management system',
        'HUD, background music, options menu, and save/load functionality',
      ],
      tags: ['C++', 'SFML', 'Game Dev'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      screenshots: ['/projects/atlantica.png'],
      thumbnail: '/projects/atlantica.png',
    },
    {
      title: 'Aquarius',
      description: 'Two-dimensional game engine developed in C++ with implemented rendering, sound, and event handling methods.',
      detailedDescription: 'Aquarius is a custom-built 2D game engine written in C++, designed to provide developers with essential tools for creating 2D games with minimal overhead.',
      features: [
        'Complete rendering pipeline for 2D graphics',
        'Sound system for music and effects',
        'Event handling for input and game events',
        'Integrated level editor for game creation',
        'Modular architecture for easy extension',
      ],
      tags: ['C++', 'SFML', 'Game Engine'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      githubUrl: 'https://github.com/Burke-Daniel/Aquarius',
      screenshots: ['/projects/aquarius.png'],
      thumbnail: '/projects/aquarius.png',
    },
  ];

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <div 
              className="project-image" 
              style={
                project.thumbnail 
                  ? { backgroundImage: `url(${project.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: project.gradient }
              }
            >
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="project-links">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={24} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-header" style={{ background: selectedProject.gradient }}>
                <h2>{selectedProject.title}</h2>
              </div>

              <div className="modal-body">
                <p className="modal-description">{selectedProject.detailedDescription}</p>
                
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <>
                    <h3>Screenshots</h3>
                    <div className="modal-screenshots">
                      {selectedProject.screenshots.map((screenshot, i) => (
                        <img 
                          key={i} 
                          src={screenshot} 
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="modal-screenshot"
                        />
                      ))}
                    </div>
                  </>
                )}
                
                <h3>Key Features</h3>
                <ul className="modal-features">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="modal-tags">
                  <h3>Technologies</h3>
                  <div className="project-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink size={20} />
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
