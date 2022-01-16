import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Container } from './ScrollToTop.styles';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastPos, setLastPost] = useState(0);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastPos;

      if (yPos === 0) {
        setIsVisible(false);
        return;
      }

      setIsVisible(isScrollingUp);
      setLastPost(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastPos]);

  return (
    <Container>
      <motion.div
        className="ScrollContainer"
        animate={{ opacity: isVisible ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <button type="button" onClick={() => handleScrollToTop()}>
          <FaArrowUp />
        </button>
      </motion.div>
    </Container>
  );
}
