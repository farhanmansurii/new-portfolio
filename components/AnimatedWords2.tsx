import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWords2Props = {
  title: string;
  style: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation2 = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 0.8,
      },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span className={style} ref={ref}>
        {title.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial="initial"
            animate={ctrls}
            className="flex flex-col items-center justify-center overflow-hidden last:-mr-10"
            transition={{
              delayChildren: index * 0.2,
              staggerChildren: 0.02,
            }}
          >
            <motion.span
              className=" inline-block overflow-hidden pt-1 "
              variants={wordAnimation2}
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords2;
