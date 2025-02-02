import { React } from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
// import image1 from './CSS/image1.JPG';
// import image2 from './CSS/image2.jpg';

const Team = () => {
  const cardVariants1 = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  };
  const cardVariants2 = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-14 px-4 py-12 bg-darkColor2 pb-16">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-lightColor1 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        Our Team
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <motion.div
          className="bg-lightColor2 text-darkColor2 rounded-lg shadow-lg p-6 w-full md:w-1/3 flex flex-col items-center text-center"
          variants={cardVariants1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="../images/team/image1.JPG"
            alt="Gurneesh Singh"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-medium">
            Gurneesh Singh | <span className="text-darkColor2 ">MERN Stack Developer</span>
          </h3>
          <p className="text-sm mt-4 mb-6">
            Enthusiastic Software Developer with a BTech in Computer Science & Engineering, solid foundation in C++, Python, and JavaScript. Experienced in crafting engaging web experiences through projects like a Data Analysis System, Online Voting System, etc.
          </p>
          <div className="flex gap-4">
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://www.linkedin.com/in/gurneesh-singh-narang-770044230/"
              target="_blank"
              url="www.linkedin.com"
            />
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://github.com/gurneeshs"
              target="_blank"
              url="www.github.com"
            />
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://www.instagram.com/giriraj.ladha/"
              target="_blank"
              url="www.instagram.com"
            />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-lightColor2 text-darkColor2 rounded-lg shadow-lg p-6 w-full md:w-1/3 flex flex-col items-center text-center"
          variants={cardVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="../images/team/image2.jpg"
            alt="Girish Ladha"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-medium">
            Girish Ladha | <span className="text-darkColor2 ">MERN Stack Developer</span>
          </h3>
          <p className="text-sm mt-4 mb-6">
            Energetic Software Developer with a BTech in Computer Science & Engineering, proficient in C++, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot.
          </p>
          <div className="flex gap-4">
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://www.linkedin.com/in/girish-ladha-0a1598225/"
              target="_blank"
              url="www.linkedin.com"
            />
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://github.com/girishladha"
              target="_blank"
              url="www.github.com"
            />
            <SocialIcon
              className="hover:scale-110 transition-transform"
              style={{ height: '30px', width: '30px' }}
              href="https://www.instagram.com/giriraj.ladha/"
              target="_blank"
              url="www.instagram.com"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
