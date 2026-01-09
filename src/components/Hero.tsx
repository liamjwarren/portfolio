import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FEATURE_FLAGS } from '../config/features';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="hero-photo-wrapper"
          variants={itemVariants}
        >
          <div className="hero-photo">
            <img src="/profile.jpg" alt="Liam Warren" />
          </div>
        </motion.div>
        <motion.div className="hero-greeting" variants={itemVariants}>
          <span className="wave">👋</span> Hi, I'm
        </motion.div>
        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-text">Liam Warren</span>
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Software Developer & Scrum Master at <span className="company-highlight">Nokia</span>
        </motion.p>
        <motion.div className="hero-description" variants={itemVariants}>
          {/* <p className="hero-tagline">Full-stack developer building secure, scalable software for <strong>NetGuard Cybersecurity Dome</strong>, a hybrid SaaS/on-premises platform</p> */}
          <p className="hero-degree">B.Eng. Computer Engineering (CO-OP), Memorial University</p>
        </motion.div>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          {FEATURE_FLAGS.SHOW_RESUME && (
            <motion.a
              href="/resume/Liam_Warren_Resume.pdf"
              download
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          )}
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="hero-decoration">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
