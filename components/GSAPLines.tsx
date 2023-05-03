import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';

export default function GSAPLines({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !played) {
      const element = ref.current;

      if (!element) {
        return;
      }

      const tl = gsap.timeline();
      const ourText = new SplitType(element, { types: 'lines, words, chars' });
      const chars = ourText.lines;
      tl.from(chars, {
        opacity: 0,
        duration: 1,
        ease: 'power4.inOut',
        yPercent: 100,
        stagger: 0.01,
      });

      setPlayed(true);
    }
  }, [inView, played]);

  return (
    <div ref={inViewRef}>
      <p ref={ref} className="our-text pb-12 h-fit">
        {text}
      </p>
    </div>
  );
}
