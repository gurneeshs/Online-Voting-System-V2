import React from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Button } from '@material-tailwind/react';
import { User, User2, Calendar, MessageCircleCode, PhoneCall, Map, MapPin, Key, Lock, LockKeyhole, Mail, Image, IdCard } from 'lucide-react';
import { BASE_URL } from '../helper';
import emailjs from 'emailjs-com';
import OtpModal from '../components/utilities/OtpModal';

const stateCityMapping = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Arunachal Pradesh": ["Itanagar", "Tawang"],
  "Assam": ["Guwahati", "Dibrugarh"],
  "Bihar": ["Patna", "Gaya"],
  "Chhattisgarh": ["Raipur", "Bhilai"],
  "Goa": ["Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat"],
  "Haryana": ["Chandigarh", "Gurugram"],
  "Himachal Pradesh": ["Shimla", "Manali"],
  "Jharkhand": ["Ranchi", "Jamshedpur"],
  "Karnataka": ["Bengaluru", "Mysore"],
  "Kerala": ["Thiruvananthapuram", "Kochi"],
  "Madhya Pradesh": ["Bhopal", "Indore"],
  "Maharashtra": ["Mumbai", "Pune"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Punjab": ["Amritsar", "Ludhiana"],
  "Rajasthan": ["Jaipur", "Udaipur"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur"],
  "Uttarakhand": ["Dehradun", "Haridwar"],
  "West Bengal": ["Kolkata", "Darjeeling"],
};

const Signup = () => {
  const navigate = useNavigate();

  

  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const handleOtpVerify = async (isValid) => {
    if (isValid) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }

        const response = await axios.post(`${BASE_URL}/createVoter`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          toast.success("Voter Created Successfully. Redirecting...");
          setTimeout(() => {
            navigate('/Login');
          }, 2000);
        } else {
          toast.error("Invalid Details");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error creating voter.");
      } finally {
        setShowOtpModal(false);
      }
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    city: '',
    state: '',
    dob: '',
    voterid: '',
    phone: '',
    image: null,
    email: '',
    pass: '',
    re_pass: ''
  });

  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dob') {
      const age = calculateAge(value);
      setFormData({
        ...formData,
        [name]: value,
        age: age
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const cities = stateCityMapping[formData.state] || [];

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (formData.pass !== formData.re_pass) {
      alert('Passwords do not match');
      setLoading(false);
      return;
    }
    setAge(calculateAge(formData.dob));
    if (age < 18 && age >= 1) {
      alert('You are not eligible to register')
      setLoading(false);
      return;
    }


    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      setGeneratedOtp(otp);

      // Step 3: Send OTP to the user's email using EmailJS
      const emailParams = {
        to_email: formData.email, // Assuming `formDataToSend` contains the user's email
        otp,
      };

      const emailResponse = await emailjs.send(
        'service_nxpm74r', // Replace with your EmailJS service ID
        'template_so5nfd8', // Replace with your EmailJS template ID
        emailParams,
        'AX5QPEWUDd7UZrPe9' // Replace with your EmailJS public key
      );

      if (emailResponse.status === 200) {
          setShowOtpModal(true);
          toast.success("OTP sent to your email. Please verify.");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    }
    catch (error) {
      console.error(error);
      toast.error("Error in Creating Voter");
    } finally {
      setLoading(false);
      // setShowOtpModal(false);
    }
  };

  return (
    <div className='bg-lightColor1'>


      <Navbar />
      <div><Toaster /></div>
      <section className="min-h-screen bg-lightColor1 flex flex-col items-center justify-center px-4">
      {showOtpModal && (
        <OtpModal
          // otpInput={otpInput}
          generatedOtp={generatedOtp}
          // setOtpInput={setOtpInput}
          onClose={() => setShowOtpModal(false)}
          onVerify={handleOtpVerify}
        />
      )}

        <div className='w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg m-3 '>
          <h2 className="text-3xl font-bold text-center text-darkColor2 mb-6">New Registration</h2>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 space-y-1">
              <form method="POST" encType="multipart/form-data" className="space-y-3" id="register-form">
                <div className="flex">
                  <User className='inline mr-3 mt-3 text-darkColor2' size={21}></User>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <User2 className='inline mr-3 mt-3 text-darkColor2' size={21} />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <MapPin className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <select
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  >
                    <option value="" disabled className="text-lightColor2">
                      Select Your State
                    </option>
                    {Object.keys(stateCityMapping).map((state) => (
                      <option key={state} value={state} className="text-darkColor2">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex">
                  <Map className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <select
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  >
                    <option value="" className='text-lightColor2'>Select Your City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex">
                  <Calendar className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <IdCard className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="number"
                    name="voterid"
                    id="voterid"
                    value={formData.voterid}
                    onChange={handleChange}
                    placeholder="Voter ID"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex ">
                  <PhoneCall className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <Image className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleFileChange}
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <Mail className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <Lock className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    value={formData.pass}
                    onChange={handleChange}
                    placeholder="Password"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <LockKeyhole className='inline mr-3 mt-3 text-darkColor2' size={21} />

                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    value={formData.re_pass}
                    onChange={handleChange}
                    placeholder="Repeat Password"
                    className="bg-white w-full border-b border-darkColor2 px-4 py-2 text-darkColor2 placeholder-darkColor2 focus:outline-none"
                    required
                  />
                </div>
                <div>

                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-darkColor2 text-lightColor1 rounded px-4 py-4 hover:bg-darkColor1 focus:outline-none focus:ring focus:ring-blue-500"
                  >
                    {loading ? "Registering...." : "Register"}
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <Link to="/Login" className="text-darkColor2 hover:underline">
                  I am already a member
                </Link>
              </div>
            </div>
            <div className="w-full px-10 lg:w-1/2 mt-6 lg:mt-0 mx-5">
              <img
                src="../images/sign/signup-image.jpg"
                alt="Registration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>
    </div>

  )
}

export default Signup
