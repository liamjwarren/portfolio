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
      company: 'Nokia',
      position: 'Software Developer',
      period: 'Jul 2025 - Present',
      description: 'Scrum Master and Software Developer for the NetGuard Cybersecurity Dome DevOps team, leading delivery of critical features across multiple releases while acting as primary liaison to Product Line Management.',
      achievements: [
        'Act as Application SRE for production environments, managing incident triage and operational health',
        'Coordinate with stakeholders and customers, supporting POC deployments and customer onboarding',
        'Contribute across Azure SaaS platform, monitoring/observability solutions, and Kubernetes/OpenShift infrastructure',
      ],
      technologies: ['Team Management', 'Azure', 'Kubernetes', 'OpenShift', 'SRE'],
    },
    {
      company: 'Nokia',
      position: 'Junior Software Developer',
      period: 'Jun 2023 - Jul 2025',
      description: 'Worked on NetGuard Cybersecurity Dome, an award-winning XDR security orchestration platform for telecom providers and critical infrastructure. Served as Scrum Master and developer for the DevOps team, and previously contributed to application development.',
      achievements: [
        'Facilitated agile practices and coordinated cross-team dependencies for timely feature delivery',
        'Improved Infrastructure as Code using Terraform and enhanced internal provisioning systems',
        'Developed backend services and user-facing features using TypeScript, React, MongoDB, and GraphQL',
      ],
      technologies: ['DevOps', 'Azure', 'Terraform', 'TypeScript', 'React', 'MongoDB', 'GraphQL'],
    },
    {
      company: 'Nokia',
      position: 'Software Developer Co-op',
      period: 'Sep 2022 - Dec 2022',
      description: 'Developed and tested back-end components of the NetGuard Cybersecurity Dome platform as a co-op student.',
      achievements: [
        'Completed development and testing of backend services using TypeScript',
        'Participated in agile software development practices including daily scrums and sprint planning',
      ],
      technologies: ['TypeScript', 'Kusto Query Language', 'GraphQL'],
    },
    {
      company: 'Nokia',
      position: 'Software Developer Co-op',
      period: 'Jan 2022 - Apr 2022',
      description: 'Developed and tested front-end components of the NetGuard Cybersecurity Dome platform as a co-op student.',
      achievements: [
        'Completed development and testing of frontend features using React and TypeScript',
        'Participated in agile software development practices including daily scrums and sprint planning',
      ],
      technologies: ['TypeScript', 'React'],
    },
    {
      company: 'Canadian Coast Guard',
      position: 'Computer Engineering Co-op',
      period: 'May 2021 - Aug 2021',
      description: 'Focused on software quality assurance and test automation for Java-based applications.',
      achievements: [
        'Completed unit testing of Java applications using JUnit',
        'Automated system testing using Python, improving test efficiency',
      ],
      technologies: ['Java', 'Python', 'JUnit'],
    },
    {
      company: 'National Research Council Canada',
      position: 'Software Engineering Co-op',
      period: 'Aug 2020 - Dec 2020',
      description: 'Ported and modernized a large-scale Python application as part of a software migration project.',
      achievements: [
        'Ported 23,000 lines of Python code from Python 2.7 to Python 3.7',
        'Developed graphical user interface using PyQt5 toolkit',
      ],
      technologies: ['Python', 'PyQt5'],
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
