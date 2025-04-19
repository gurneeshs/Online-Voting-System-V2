import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserNavbar from '../components/Navbar/UserNavbar';
import UpcomingElections from '../components/User/UpcomingElections';
import UserCard from '../components/User/UserCard';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { BASE_URL } from '../helper';
const User = () => {
  const location = useLocation();
  const { voterst } = location.state || {};
  const [singleVoter, setVoter] = useState([]);
  // console.log(voterst);

  const setCookie = () => {
    Cookies.set('myCookie', voterst.id, { expires: 7 }); // Set cookie for 7 days
  };


  if(!Cookies.get('myCookie')){
    setCookie();
  }
  const voterid = Cookies.get('myCookie');

  useEffect(() => {
    // const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      axios.get(`${BASE_URL}/getVoterbyID/${voterid}`)
        .then((response) => {
          setVoter(response.data.voter);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
  }, []); 

  return (
    <div className="flex flex-col min-h-screen bg-darkColor2">
      <UserNavbar />

      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-semibold text-lightColor1">
          Welcome <span className="text-lightColor1">{singleVoter.firstName}</span>
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row items-start justify-center py-5 px-4 md:px-8 gap-8">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <UserCard voter={singleVoter} />
        </motion.div>

        <motion.div
          className="bg-lightColor1 shadow-lg rounded-lg p-10 w-full md:w-2/3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-bold text-center mb-4 text-darkColor2">
            Welcome to <span className="text-darkColor2">Online Voting Platform</span>
          </h2>
          <h6 className="text-center text-darkColor1 mb-4">Exercise Your Right to Vote Anytime, Anywhere</h6>
          <p className="text-mediumColor text-justify">
            Welcome to our online voting platform, where your voice matters. With the convenience of modern technology, we bring democracy to your fingertips, enabling you to participate in important decisions and elections from the comfort of your own home. Our secure and user-friendly platform ensures that your vote is counted accurately and confidentially. Whether it's electing your local representatives, deciding on community initiatives, or participating in organizational polls, our platform empowers you to make a difference.
          </p>
        </motion.div>
      </div>

      <UpcomingElections voteStatus={singleVoter.voteStatus} />

    </div>
  );
};

export default User;
