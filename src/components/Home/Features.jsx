import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Features = () => {

  return (
    <div className="my-8">
      <motion.h2
        className="text-center text-3xl font-bold text-darkColor2 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 1 }}
      >
        Features
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Feature 1 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefLeft}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4">Security</h5>
          <p className="">
            We prioritize the security and integrity of every vote cast on our platform. Our robust security measures
            ensure that each vote is counted accurately and remains confidential.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefTop}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4 ">Accessibility</h5>
          <p className="">
            We strive to make voting accessible to all individuals, regardless of their location or physical abilities.
            Our online platform allows users to participate in elections from the comfort of their own homes.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefRight}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4">Transparency</h5>
          <p className="">
            We believe in transparency throughout the voting process. Users can verify their votes and view election
            results in real-time, fostering trust and confidence in the electoral process.
          </p>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefLeft}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4 ">User-Friendly Interface</h5>
          <p className=" ">
            Our intuitive interface makes it easy for users to navigate the voting process, ensuring a seamless and
            enjoyable experience for all participants.
          </p>
        </motion.div>

        {/* Feature 5 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefBottom}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4">Customization</h5>
          <p className="">
            We offer flexible solutions to meet the unique needs of each election. Whether it's a national election,
            corporate poll, or community survey, our platform can be customized to suit any requirements.
          </p>
        </motion.div>

        {/* Feature 6 */}
        <motion.div
          className="bg-darkColor2 text-lightColor1 p-6 rounded-xl shadow-lg relative transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl hover:bg-lightColor2 hover:text-darkColor2"
          // ref={revealRefRight}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h5 className="text-center font-bold mb-4 text-lightColor1">Security</h5>
          <p className="text-lightColor1">
            We prioritize the security and integrity of every vote cast on our platform. Our robust security measures
            ensure that each vote is counted accurately and remains confidential.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
