import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SplitType from "split-type";

type AnimatedBodyProps = {
  text: string;
  delay: number,
  className?: string;
  wordSpace?: string;
  charSpace?: string;
};

export default function AnimatedBody({
  text,
  delay,
  className,
  wordSpace,
  charSpace,
}: AnimatedBodyProps) {

  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const lines = text.split('\n').map((line, index) => (
    <span key={index}>{line}</span>
  ));




  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.8,
      },
    },
  };

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.7,
      },
    },
  };
  return (
    <>
      {lines.map((line, index) => (
        <motion.span
          className={className}
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={bodyAnimation}
          key={index}
          style={{ display: "block", marginBottom: wordSpace }}
        >
          {line}
        </motion.span>
      ))}
    </>
  );
}
