import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../helper";

const UpcomingElections = ({ voteStatus }) => {
    const navigate = useNavigate();
    const [elections, setElections] = useState([]);

    useEffect(() => {
        // Fetch elections from the database (replace 'YOUR_API_ENDPOINT' with your actual endpoint)
        const fetchElections = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/getElections`); // Update with your API endpoint
                setElections(response.data);
            } catch (error) {
                console.error("Error fetching elections:", error);
            }
        };

        fetchElections();
    }, []);

    const fadeInVariants = (direction) => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    });

    return (
        <div className="bg-lightColor1 py-16 px-4 w-full">
            <Toaster />
            <motion.h2
                variants={fadeInVariants("top")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-center text-darkColor2 mb-8"
            >
                Upcoming Elections
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
                {elections.length > 0 ? (
                    elections.map((election, index) => (
                        <motion.div
                            key={election.id}
                            variants={fadeInVariants(index % 2 === 0 ? "top" : "bottom")}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="bg-darkColor2 shadow-lg rounded-lg p-8 py-10 max-w-sm md:w-1/3"
                        >
                            <h3 className="text-xl font-semibold text-lightColor1 mb-4">
                                {election.name}
                            </h3>
                            <p className="text-lightColor1 text-sm mb-4">
                                {election.description}
                            </p>
                            <Button
                                className="bg-lightColor1 text-darkColor2 px-4 py-3 mx-auto rounded hover:bg-lightColor2 transition duration-300"
                                onClick={() => {
                                    if (voteStatus) {
                                        toast("You Have Already Voted");
                                    } else {
                                        navigate(`/vote?electionId=${election._id}`);
                                    }
                                }}
                            >
                                Participate/Vote
                            </Button>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-darkColor2 text-lg">No upcoming elections available.</p>
                )}
            </div>
        </div>
    );
};

export default UpcomingElections;