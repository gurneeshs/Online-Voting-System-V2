import { motion } from "framer-motion";

const formatLocalDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const RecentResults = ({ elections }) => {
  const pastResults = elections
    .filter(e => e.upcoming === "completed")
    .map(election => {
      const winner = election.candidates.reduce((max, candidate) =>
        candidate.votes > max.votes ? candidate : max,
        election.candidates[0]
      );

      return {
        title: election.name,
        date: formatLocalDate(election.date),
        winner: winner.fullName,
        party: winner.party
      };
    });

  return (
    <motion.div
      className="bg-darkColor2 text-lightColor1 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-xl font-semibold mb-4">Recent Results</h3>
      <ul className="space-y-3">
        {pastResults.length === 0 ? (
          <p className="text-gray-400">No past results available.</p>
        ) : (
          pastResults.map((result, index) => (
            <li key={index} className="p-3 bg-white rounded-md shadow-sm">
              <p className="font-medium text-darkColor2">{result.title}</p>
              <p className="text-sm text-gray-600">{result.date}</p>
              <p className="text-sm font-semibold text-green-700">
                Winner: {result.winner}
              </p>
              <p className="text-sm font-semibold text-green-700">
                Party: {result.party}
              </p>

            </li>
          ))
        )}
      </ul>
    </motion.div>
  );
};

export default RecentResults;
