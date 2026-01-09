import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = ['React', 'TypeScript', 'Node.js', 'UI/UX', 'CSS3', 'Git'];

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
            I'm a passionate developer with a love for creating beautiful,
            functional, and user-centered digital experiences. With expertise
            in modern web technologies, I bring ideas to life through clean code
            and innovative solutions.
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
