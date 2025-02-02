import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendingFailed = (msg) => toast.error(msg);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    if (!name || !email || !message) {
      sendingFailed("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        'service_nxpm74r',
        'template_so5nfd8',
        templateParams,
        'AX5QPEWUDd7UZrPe9'
      );

      toast.success('Your query has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      sendingFailed('There was an error sending your query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-8 px-4 sm:px-8 lg:px-16">
      <motion.h2
        className="text-3xl font-semibold text-darkColor2 mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      {/* <ToastContainer /> */}

      <motion.form
        className="w-full max-w-3xl bg-darkColor2 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-mediumColor bg-darkColor2 text-lightColor1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-mediumColor bg-darkColor2 text-lightColor1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-mediumColor bg-darkColor2 text-lightColor1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 font-bold text-darkColor2 bg-lightColor1 rounded hover:bg-lightColor2 focus:outline-none focus:ring focus:ring-blue-300"
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white mx-auto"></div>
          ) : (
            'Send'
          )}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
