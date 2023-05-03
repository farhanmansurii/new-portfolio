import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export default function GSAPLines({ text, style }: { text: string, style: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (ref.current) {
            const newLines = new SplitType(ref.current);
            gsap.fromTo(
              newLines.lines,
              { y: 200 },
              {
                duration: 1,
                y: 0,
                // opacity: 1,
                stagger: 0.1,
                ease: "power2",
              }
            );
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={style}>{text}</div>
  );
}
