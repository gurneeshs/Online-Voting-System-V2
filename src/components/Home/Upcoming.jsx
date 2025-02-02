import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    y: direction === 'top' ? -30 : direction === 'bottom' ? 30 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const UpcomingFeatures = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-8 p-4 bg-darkColor2">
      <motion.h2
        className="text-3xl font-bold text-lightColor1 text-center mb-9 mt-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeInOut' }}

      >Upcoming Features</motion.h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-14">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-lightColor1 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            custom={feature.direction}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
          >
            <h5 className="text-lg font-semibold text-center mb-2 text-darkColor2">{feature.title}</h5>
            <p className="text-gray-700 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Mobile OTP',
    description: 'We will implement a one-time password sent to voters\' mobile phones for secure authentication.',
    direction: 'left',
  },
  {
    title: 'Face Matching during Voting',
    description: 'Enhance security by verifying voter identity through facial recognition during the voting process.',
    direction: 'top',
  },
  {
    title: 'State Wise Voters Graph',
    description: 'Visual representation of voter distribution across different states.',
    direction: 'right',
  },
  {
    title: 'Voters Graph According to Age Groups',
    description: 'Display the distribution of voters segmented by various age groups.',
    direction: 'left',
  },
  {
    title: 'Votes of Candidates Graph according to states',
    description: 'Visualize the number of votes each candidate has received, broken down by state.',
    direction: 'bottom',
  },
  {
    title: 'Responsive Design',
    description: 'Ensure the voting platform adapts seamlessly to different screen sizes for an optimal user experience on mobile devices.',
    direction: 'right',
  },
];

export default UpcomingFeatures;
