//lib
import { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  children: JSX.Element | string | React.ReactNode;
  move: string;
}

export const ScrollRevealContainer: React.FC<Props> = ({ children, move }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 1000,
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
