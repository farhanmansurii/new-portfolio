import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export default function GSAPLines({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();
          const ourText = new SplitType(element, { types: 'lines, words, chars' });
          const chars = ourText.lines;
          tl.from(chars, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            yPercent: 100,
            stagger: 0.01,
          });

          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <p ref={ref} className="our-text pb-12 h-fit">
      {text}
    </p>
  );
}
