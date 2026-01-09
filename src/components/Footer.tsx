import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="footer-year">&copy; 2026 Liam Warren. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
