//lib
import { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

export const ScrollRevealContainer = ({ children, move }) => {
  const sectionRef = useRef(null);
  console.log(sectionRef);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 700,
        opacity: 0,
        origin:
          move === 'left'
            ? 'left'
            : move === 'right'
            ? 'right'
            : move === 'top'
            ? 'top'
            : 'bottom',
        distance: '100px',
      });
  }, [sectionRef, move]);

  return (
    <div style={{ width: '100%' }} ref={sectionRef}>
      {children}
    </div>
  );
};
