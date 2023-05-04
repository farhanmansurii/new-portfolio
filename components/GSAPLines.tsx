import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function GSAPLines({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {

      const element = ref.current;

      if (!element) {
        return;
      }
    gsap.registerPlugin(ScrollTrigger)
      const ourText = new SplitType(element, { types: 'lines, words, chars' });
    const chars = ourText.lines;
    gsap.fromTo(
      chars,
      {
        y: 500,
        skewY: 10,
        clipRule: 'evenodd',
        opacity: 0
      },
      {
        y: -50,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: ' center',

        },
        skewY: 0,
        clipRule: 'nonzero',
        stagger: 0.04,
        ease: 'power4.out',
      }
    );


  }, []);

  return (
    <div >
      <p className="our-text pb-12 h-fit overflow-hidden">
        <span ref={ref}>

        {text}
        </span>
      </p>
    </div>
  );
}
