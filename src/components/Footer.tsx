import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p>
        Designed & Built with <Heart size={16} className="heart-icon" /> by Your Name
      </p>
      <p className="footer-year">&copy; 2025</p>
    </motion.footer>
  );
};

export default Footer;
