import React from 'react';
import { FaReact, FaReacteurope } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiFramer, SiGithub, SiGraphql, SiJenkins, SiMongodb, SiNextdotjs, SiPrisma, SiReactquery, SiRedux, SiTailwindcss, SiTrpc, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion'

const techVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 }, staggerChildren: 0.05 },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};


const technologies = [
  { name: 'HTML', icon: <IoLogoHtml5 />, color: 'red' },
  { name: 'CSS', icon: <IoLogoCss3 />, color: 'blue' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'yellow' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'blue' },
  { name: 'React', icon: <FaReact />, color: 'blue' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'black' },
  { name: 'Express.js', icon: <SiExpress />, color: 'green' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'green' },
  { name: 'Redux', icon: <SiRedux />, color: 'purple' },
  { name: 'GraphQL', icon: <SiGraphql />, color: 'purple' },
  { name: 'React Query', icon: <SiReactquery />, color: 'red' },
  { name: 'Prisma', icon: <SiPrisma />, color: 'blue' },
  {
    name: 'GitHub', icon: <SiGithub />, color
      : 'black'
  },
  { name: 'Jenkins', icon: <SiJenkins />, color: 'red' },
  { name: 'Framer Motion', icon: <SiFramer />, color: 'orange' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'blue' },
  { name: 'TRPC', icon: <SiTrpc />, color: 'purple' },
];

const TechStack = () => {
  return (
    <div className='my-10 w-full border-neutral-500'>
      <div className='text-3xl lg:text-5xl w-10/12 p-4'>
        <motion.div
          initial='initial'
          exit='exit'
          whileInView='animate'
          variants={techVariants}
        >
          My development stack is focused on performance & accessibility with delightful interactions.
        </motion.div>
      </div>
      <div className='p-4 flex flex-wrap gap-3'>
        {technologies.map((tech, index) => (
          <motion.div key={index}
            transition={{
              delay: 0.05 * index, ease: 'easeIn'
            }}
            initial={{ opacity: 0, x: -15, }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15, }}
            className={`rounded-full flex border-2 hover:text-white hover:bg-${tech.color}-500 hover:border-${tech.color}-500 duration-150 border-black px-3 py-2 items-center gap-1`}
          >
            {tech.icon}
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
