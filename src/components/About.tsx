import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = ['Azure', 'Kubernetes', 'Terraform', 'TypeScript', 'React', 'Prometheus', 'Grafana', 'OpenShift', 'CI/CD', 'Docker', 'GraphQL', 'MongoDB'];

  return (
    <section id="about" className="section about-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="about-text">
          <p>
            I'm a Software Developer and Scrum Master at Nokia, driving the delivery of high-impact features for the NetGuard Cybersecurity Dome, a hybrid SaaS platform spanning Azure and on-premises infrastructure. I lead cross-functional teams, coordinate complex dependencies, and turn business priorities into actionable roadmaps, ensuring secure, scalable, and reliable software reaches production efficiently.
          </p>
          <p>
            Hands-on across the stack, I build and maintain CI/CD pipelines, improve Terraform-based Infrastructure-as-Code, and manage production environments on Kubernetes and OpenShift. I design and develop monitoring and observability solutions using Prometheus, OpenTelemetry, Thanos, Grafana, and Datadog, helping teams maintain system health, performance, and reliability at scale.
          </p>
          <p>
            Outside of work, I continue to explore full-stack development, building apps and tools with React, TypeScript, and other modern technologies. These personal projects let me experiment, stay sharp, and fuel my curiosity for end-to-end software development.
          </p>
          <div className="skills">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
