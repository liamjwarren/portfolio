import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FEATURE_FLAGS } from '../config/features';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contacts = [
    {
      icon: Mail,
      label: 'liamjwarren@gmail.com',
      href: 'mailto:liamjwarren@gmail.com',
      external: false,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/liamjwarren',
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/liamjwarren',
      external: true,
    },
  ];

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="contact-description">
          Let's connect! I'm always interested in discussing technology, sharing ideas, or exploring potential collaborations.
        </p>
        {FEATURE_FLAGS.SHOW_RESUME && (
          <motion.a
            href="/resume/Liam_Warren_Resume.pdf"
            download
            className="btn btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginBottom: '2rem', display: 'inline-block' }}
          >
            Download My Resume
          </motion.a>
        )}
        <div className="contact-methods">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="contact-item"
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="contact-icon" size={24} />
                <span>{contact.label}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
