import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { BASE_URL } from '../helper';
import { Button } from '@material-tailwind/react';
import { User, Mail, PhoneCall, MapPin, Calendar } from 'lucide-react';
import Cookies from 'js-cookie';
import UserNavbar from '../components/Navbar/UserNavbar';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { voterst } = location.state || {};

  const setCookie = () => {
    Cookies.set('myCookie', voterst.id, { expires: 7 }); // Set cookie for 7 days
  };


  if(!Cookies.get('myCookie')){
    setCookie();
  }
  const voterid = Cookies.get('myCookie');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    dob: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/getVoterbyID/${voterid}`);
        console.log(data.voter);
        if (data.success) {
          setFormData(data.voter);
        }
      } catch (error) {
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${BASE_URL}/editVoter/${voterid}`, formData);
      if (data.success) {
        toast.success("Profile updated successfully!");
        navigate('/User');
      } else {
        toast.error("Update failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-lightColor1 min-h-screen">
      <UserNavbar />
      <Toaster />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
        <h2 className="text-2xl font-bold text-darkColor2 mb-4 text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-darkColor2">First Name</label>
              <div className="flex items-center">
                <User className="mr-2 text-darkColor2" size={20} />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block text-darkColor2">Last Name</label>
              <div className="flex items-center">
                <User className="mr-2 text-darkColor2" size={20} />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-darkColor2">Email</label>
            <div className="flex items-center">
              <Mail className="mr-2 text-darkColor2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-darkColor2">Phone</label>
            <div className="flex items-center">
              <PhoneCall className="mr-2 text-darkColor2" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-darkColor2">State</label>
              <div className="flex items-center">
                <MapPin className="mr-2 text-darkColor2" size={20} />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block text-darkColor2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-b border-darkColor2 px-3 py-2 focus:outline-none"
                required
              />
            </div>
          </div>


          <Button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
