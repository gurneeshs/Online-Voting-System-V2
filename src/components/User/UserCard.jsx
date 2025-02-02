import React from 'react';

export default function UserCard({ voter }) {
    return (
        <div className="flex justify-center rounded-lg bg-lightColor1">
            <div className="bg-lightColor1 shadow-lg  rounded-lg overflow-hidden w-full sm:w-96">
                <div className="flex flex-col p-7">
                    <div className="w-24 h-24 rounded-full items-center mx-auto overflow-hidden bg-gray-200">
                        {voter.image ? (
                            <img src={voter?.image} alt="voter" className="w-full h-full object-cover" />
                        ) : (
                            <p className="flex items-center justify-center h-full text-gray-500 text-sm">
                                No Image
                            </p>
                        )}
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-bold text-darkColor2">
                            Name: {voter.firstName} {voter.lastName}
                        </p>
                        <p className="text-sm font-bold text-darkColor2 my-3">Age: {voter.age}</p>
                        <p className="text-sm font-bold text-darkColor2 my-3">Phone: {voter.phone}</p>
                        <p className="text-sm font-bold text-darkColor2 my-3">VoterID: {voter.voterid}</p>
                        <p className="text-sm font-bold text-darkColor2 my-3">
                            Voter Status:{" "}
                            {voter.voteStatus ? (
                                <span className="text-green-600">Voted</span>
                            ) : (
                                <span className="text-red-600">Not Voted</span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
