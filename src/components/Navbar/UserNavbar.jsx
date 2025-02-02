import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, User, Shield, LogInIcon, Lock } from "lucide-react";
import { Button } from "@material-tailwind/react";
import Cookies from 'js-cookie';
import { Toaster, toast } from "react-hot-toast";
const UserNavbar = () => {
    const navigate = useNavigate();
    // State for mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        Cookies.remove('myCookie');
        toast.success("Logged Out Successfully");
        setTimeout(()=>{
            navigate('/')
        },1000);

    }

    return (
        <div className="text-darkColor2 bg-lightColor1">
        <Toaster />
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">
                    Online Voting System
                </Link>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6 text-darkColor2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Links (Desktop & Mobile) */}
                <div
                    className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-lightColor1 lg:bg-transparent w-full lg:w-auto transition-all duration-300 ${isOpen ? "top-10 left-0 p-6" : "top-[-500px] left-0"
                        }`}
                >
                    <Link
                        to="/User"
                        className="block py-2 px-4 hover:bg-darkColor2 hover:text-lightColor1 rounded lg:inline-block"
                    >
                        <Home className="inline mr-1" size={18} />
                        Home
                    </Link>
                    <Link
                        to="/Edit"
                        className="block py-2 px-4 hover:bg-darkColor2 hover:text-lightColor1 rounded lg:inline-block"
                    >
                        <User className="inline mr-1" size={18} />
                        Edit Profile
                    </Link>
                    <button
                        className="bg-lightColor1 text-darkColor2 shadow-none block py-2 px-4 hover:bg-darkColor2 hover:text-lightColor1 rounded lg:inline-block "
                        onClick={handleLogout}
                    >

                        <LogInIcon className="inline mr-1" size={18} />
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;
