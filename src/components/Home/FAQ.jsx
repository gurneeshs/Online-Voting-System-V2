import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "How does Online Voting Systme Work?",
            answer: "Our online voting system is like magic, but legal. Simply cast your vote with a click!",
        },
        {
            question: "Is this System Secure ?",
            answer: "Fort Knox is jealous of our security measures. Your vote is safer than a squirrel's acorn stash.",
        },
        {
            question: "Can I change my Vote ?",
            answer: "Once you've voted, it's set in stone. Choose wisely, like your life depends on it!",
        },
        {
            question: "Can I Vote ?",
            answer: "If you're human and not a robot and you are 18 above, congratulations, you're eligible to vote!",
        },
        {
            question: "What if I forget to Vote ?",
            answer: "Forgetfulness is not an option here. Set a reminder, tattoo it on your forehead, just don't miss out!",
        },

    ];

    return (
        <div className="relative min-w-full bg-lightColor1 px-6 pt-10 pb-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="mt-5 text-center text-3xl font-bold tracking-tight md:text-3xl text-darkColor2"
                    >
                        FAQ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-3 text-lg text-darkColor2 md:text-xl"
                    >
                        Frequently asked questions
                    </motion.p>
                </div>
                <div className="mx-auto mt-8 grid max-w-4xl divide-y divide-neutral-200 bg-darkColor2 px-5 text-lightColor1">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            className="py-5 my-2"
                        >
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span className='font-bold'>{faq.question}</span>
                                    <span className="transition group-open:rotate-180 font-bold">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="30"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                    {faq.answer}
                                </p>
                            </details>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
