import React from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Button } from '@material-tailwind/react';
import { User, User2, Calendar, MessageCircleCode, PhoneCall, Map, MapPin, Key, Lock, LockKeyhole, Mail, Image, IdCard } from 'lucide-react';
import { BASE_URL } from '../helper';
import Cookies from 'js-cookie';
import emailjs from 'emailjs-com';
import OtpModal from '../components/utilities/OtpModal';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [voterState, setVoterState] = useState(null);

  const handleOtpVerification = (isValid) => {
    if (isValid) {
      setShowOtpModal(false);
      toast.success("OTP verified successfully.");
      navigate('/User', { state: { voterst: voterState } });
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };


  const handleLogin = async () => {
    setLoading(true);
    try {
      // Step 1: Send login request to validate username and password
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      const voterst = response.data.voterObject;
      setVoterState(voterst);

      // if(response.data.success){
      //   navigate('/User', { state: { voterst } })
      // }

      if (response.data.success) {
        // Step 2: Generate a random OTP
        const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
        setGeneratedOtp(otp);

        // Step 3: Use EmailJS to send the OTP to the user's email
        const emailParams = {
          to_email: username, // Assuming 'username' is the email
          otp,
        };

        const emailResponse = await emailjs.send(
          'service_nxpm74r', // Replace with your EmailJS service ID
          'template_so5nfd8', // Replace with your EmailJS template ID
          emailParams,
          'AX5QPEWUDd7UZrPe9' // Replace with your EmailJS public key
        );

        if (emailResponse.status === 200) {
          toast.success("OTP sent to your email. Please verify.");
          setShowOtpModal(true)

        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } else {
        toast.error("Invalid details or voter not registered.");
      }
    } catch (error) {
      toast.error("Error in Login Voter");
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='bg-lightColor1'>
      <Navbar />
      <Toaster />
      {showOtpModal && (
        <OtpModal
          generatedOtp={generatedOtp}
          onClose={() => setShowOtpModal(false)}
          onVerify={handleOtpVerification}
        />
      )}

      <div className="flex flex-col items-center min-h-screen bg-lightColor1">
        <section className="flex flex-col items-center justify-center flex-1 w-full px-4 md:px-8 lg:px-16">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
            {/* <p className="text-sm text-gray-500 mb-4">Use <span className="font-bold">user@gmail.com</span> as email and <span className="font-bold">123</span> as password</p> */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Sign-in Image */}
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <div className="max-w-xs">
                  <img src="../images/sign//signin-image.jpg" alt="Sign in illustration" className="w-full" />
                  <Link to="/Signup" className="text-darkColor2 font-bold hover:underline text-center block mt-4">Create an account</Link>
                </div>
              </div>

              {/* Sign-in Form */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-center mb-6 text-darkColor2">Sign In</h2>
                <div className="space-y-4">
                  <div className="flex items-center border-b border-darkColor2 px-3 py-2">
                    <Mail className='inline mr-3  text-darkColor2' size={16}></Mail>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      className="flex-1 bg-transparent outline-none text-darkColor2 placeholder-mediumColor"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center border-b border-darkColor2 px-3 py-2">
                    <LockKeyhole className='inline mr-3  text-darkColor2' size={16}></LockKeyhole>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      className="flex-1 bg-transparent outline-none text-darkColor2 placeholder-mediumColor"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center">

                    <Button
                      onClick={handleLogin}
                      disabled={loading}
                      className={`w-full px-6 py-3 text-lightColor1 rounded-lg transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-darkColor1 hover:bg-darkColor2'}`}
                    >
                      {loading ? (
                        'Logging In...'
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Login
