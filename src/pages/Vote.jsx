import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import UserNavbar from "../components/Navbar/UserNavbar";
import { BASE_URL } from "../helper";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Vote = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const electionId = query.get('electionId');
  // const { electionId } = useParams();
  // console.log(electionId)
  const voterId = Cookies.get("myCookie");
  const [candidates, setCandidates] = useState([]);
  const [voter, setVoter] = useState({});
  const [election, setElection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch election data by ID
    axios
      .get(`${BASE_URL}/getElection/${electionId}`)
      .then((response) => {
        if (response.data.success) {
          // console.log(response.data.election)
          setElection(response.data.election);
        }

        // Fetch candidate details using IDs from the election document
        const candidateIds = response.data.election.candidates;
        return axios.post(`${BASE_URL}/getCandidatesByIds`, { ids: candidateIds });
      })
      .then((response) => setCandidates(response.data.candidates))
      .catch((err) => console.error("Error fetching election or candidates: ", err));

    // Fetch voter data
    axios
      .get(`${BASE_URL}/getVoterbyID/${voterId}`)
      .then((response) => setVoter(response.data.voter))
      .catch((err) => console.error("Error fetching voter: ", err));
  }, [electionId, voterId]);

  const handleVote = (candidateId) => {
    if (voter.voteStatus) {
      alert("You have already voted.");
    } else {
      if (election.status != 'started') {
        alert("Election is Not Started Yet!!");
      }
      else {
        voter.voteStatus = true;
        axios
          .patch(`${BASE_URL}/voteForCandidate/${electionId}`, { candidateId })
          .then(() => setIsModalOpen(true))
          .catch((err) => console.error("Error voting: ", err));

        axios.patch(`${BASE_URL}/updateVoter/${voter._id}`, voter);
      }
    }
  };

  return (
    <div className="bg-darkColor2 min-h-screen">
      <UserNavbar />

      <div className="py-12 px-6">
        {election && (
          <>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-lightColor1 mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {election.name}
            </motion.h2>

            <motion.p
              className="text-center text-lg text-lightColor2 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {election.description}
            </motion.p>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <motion.div
              key={candidate._id}
              className="bg-lightColor1 shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="p-4 flex flex-col items-center">
                <img
                  src={candidate.img || "/default-avatar.png"}
                  alt={candidate.fullName}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-darkColor2 mb-2">
                  {candidate.fullName}
                </h3>
                <p className="text-darkColor1 text-sm mb-2"><span className="font-[600]">Party:</span> {candidate.party}</p>
                <p className="text-darkColor1 text-sm"><span className="font-[600]">Age:</span> {candidate.age}</p>

                {candidate.symbol && (
                  <img
                    src={candidate.symbol}
                    alt="Party Symbol"
                    className="w-16 h-16 mt-4"
                  />
                )}

                <Button
                  color=""
                  onClick={() => handleVote(candidate._id)}
                  className="mt-6 bg-darkColor2"
                >
                  Vote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              className="bg-white rounded-lg p-8 w-96 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Congratulations!</h2>
              <p className="text-gray-600 mb-6">You have successfully voted.</p>
              <Button color="green" onClick={() => {
                setIsModalOpen(false)
                navigate('/User');
                }}>
                OK
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vote;
