import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../helper";
import RecentResults from "./RecentResult";
const ElectionsOverview = () => {
    const [elections, setElections] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/getElections`)
            .then((res) => {
                setElections(res.data.elections || []);
                console.log(res.data.elections)
            })
            .catch((err) => console.error("Error fetching elections: ", err));
    }, []);

    const upcomingElections = [
        { title: "Student Council Elections", date: "May 10, 2025" },
        { title: "Municipal Elections", date: "June 2, 2025" },
    ];

    const pastResults = [
        { title: "Tech Club President", date: "March 15, 2025", winner: "Aarav Mehta" },
        { title: "City Ward 4 Election", date: "Feb 20, 2025", winner: "Priya Kapoor" },
    ];

    return (
        <div className="my-12 px-4">
            <motion.h2
                className="text-3xl text-center font-bold text-darkColor2 mb-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Elections Overview
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upcoming Elections */}
                <motion.div
                    className="bg-darkColor2 text-lightColor1 rounded-xl shadow-md p-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Upcoming Elections</h3>
                    <ul className="space-y-3">
                        {elections.map((election, index) => (

                            <li key={index} className="p-3 bg-white rounded-md shadow-sm">

                                <p className="font-medium text-darkColor2">{election.name}</p>
                                <p
                                    className={`text-sm font-semibold 
                                                ${election.upcoming === "upcoming" ? "text-red-600" : ""}
                                                ${election.upcoming === "ongoing" ? "text-yellow-600" : ""}
                                                ${election.upcoming === "completed" ? "text-green-600" : ""}
                                    `}
                                >
                                    {election.upcoming}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {new Date(election.date).toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>

                            </li>
                        ))}

                    </ul>
                </motion.div>

                {/* Election Results */}
                <RecentResults elections={elections}/>
            </div>
        </div>
    );
};

export default ElectionsOverview;
