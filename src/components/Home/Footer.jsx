import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkColor2 text-lightColor1 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">SecureVote</h2>
          <p className="text-sm text-gray-300">
            Empowering transparent and secure digital democracy.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Get Involved</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="mailto:support@election.com" className="hover:text-white">Become a Volunteer</a></li>
            <li><a href="mailto:press@election.com" className="hover:text-white">Media Inquiries</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/donate" className="hover:text-white">Donate</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">support@securevote.com</p>
          <p className="text-sm text-gray-300">+91 98765 43210</p>
          <p className="text-sm text-gray-300">Medi-Caps University, Indore</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="mailto:support@securevote.com" className="hover:text-white"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SecureVote. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
