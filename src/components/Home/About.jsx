import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { triggerOnce: false });
  const imageInView = useInView(imageRef, { triggerOnce: false });

  return (
    <div className="py-4 px-6 bg-darkColor2">
      <motion.h2
        className="text-center text-3xl text-lightColor1 my-12 font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        Welcome to Online Voting
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mx-auto px-6 md:px-12">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-lightColor1 text-justify mb-5">
            We are committed to revolutionizing the democratic process through innovative online voting solutions.
            Our platform is designed to empower individuals and organizations by providing a secure, accessible, and transparent voting experience.
          </p>
          <p className="text-lightColor1 text-justify">
            We're delighted to have you join us in shaping the future through the power of your vote. Our online voting
            platform has been designed to make the voting process convenient, secure, and accessible to all eligible
            participants. Whether you're casting your vote for local elections, national initiatives, or organizational
            decisions, your voice matters.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="../images/about/voting7.jpg"
            alt="Voting"
            className="w-full h-full object-cover rounded-lg shadow-lg mx-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
