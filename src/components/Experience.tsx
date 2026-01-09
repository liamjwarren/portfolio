import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const jobs: Job[] = [
    {
      company: 'Tech Company Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of cloud-based applications and mentoring junior developers.',
      achievements: [
        'Architected and deployed microservices handling 1M+ daily requests',
        'Reduced application load time by 60% through optimization',
        'Led team of 5 developers on critical client projects',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
    },
    {
      company: 'Startup Solutions',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications for diverse clients.',
      achievements: [
        'Built 15+ production applications from scratch',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Collaborated with designers to create pixel-perfect UIs',
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Created responsive and accessible web interfaces for client projects.',
      achievements: [
        'Developed 20+ responsive websites with 98%+ Lighthouse scores',
        'Established component library used across all projects',
        'Improved team workflow with modern development practices',
      ],
      technologies: ['JavaScript', 'Vue.js', 'SASS', 'Webpack'],
    },
  ];

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Experience</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="timeline">
        {jobs.map((job, index) => (
          <motion.div
            key={job.company}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-marker">
              <Briefcase size={20} />
            </div>
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="job-header">
                <div>
                  <h3 className="job-position">{job.position}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-period">
                  <Calendar size={16} />
                  <span>{job.period}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <ul className="job-achievements">
                {job.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
              <div className="job-technologies">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
