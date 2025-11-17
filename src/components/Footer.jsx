import React, { useState } from "react";
import { FaTwitter, FaYoutube, FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/flogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }

    try {
      const response = await fetch("https://webapp.ohcargo.com/newsletter.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      });

      const result = await response.text();
      alert(result);
      setEmail(""); 
    } catch (error) {
      alert("Subscription failed. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <footer className="bg-[#7D0E0E] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-x-10 gap-y-8">
        
        {/* Logo + Socials */}
        <div>
          <img src={logo} alt="OhCargo Logo" className="w-40 md:w-48" />
          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com/ohcargo" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-200 hover:text-gray-400 cursor-pointer" size={24} />
            </a>
            <a href="https://youtube.com/@ohcargo" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-200 hover:text-gray-400 cursor-pointer" size={24} />
            </a>
            <a href="https://www.linkedin.com/company/ohcargo-limited" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-gray-200 hover:text-gray-400 cursor-pointer" size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569076025615" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-200 hover:text-gray-400 cursor-pointer" size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-y-3 text-sm">
          <Link to="/services" className="font-semibold hover:text-gray-300">Services</Link>
          <Link to="/partner" className="font-semibold hover:text-gray-300">Partner with Us</Link>
          {/* <Link to="/sdgs" className="font-semibold hover:text-gray-300">SDG's</Link> */}
          <Link to="/blog" className="font-semibold hover:text-gray-300">Blog</Link>
          <Link to="/contact" className="font-semibold hover:text-gray-300">Contact</Link>
        </div>

        {/* Contacts */}
        <div className="text-sm">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center"><FaPhoneAlt className="mr-2" /> +254708304927</p>
          <p className="flex items-center"><FaWhatsapp className="mr-2" /><a href="https://wa.me/254703596486" className="underline" target="_blank" rel="noopener noreferrer">
          +254703596486</a></p>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> <a href="mailto:info@ohcargo.com" className="underline">info@ohcargo.com</a></p>
        </div>

        {/* Newsletter */}
        <div className="max-w-sm">
          <h3 className="text-lg font-semibold">Let's Connect</h3>
          <p className="text-sm mt-2">
          Subscribe to our email list and be the first to receive updates and news!
          </p>
          <div className="mt-4 flex flex-col items-start">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-black rounded bg-white"
            />
            <button 
              className="bg-[#16489A] text-white px-4 py-2 my-4 rounded-md border-none hover:text-black border"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <hr className="border-t border-gray-300 my-6" />
      <div className="text-center text-sm">
        © 2025 OhCargo, Inc. • <a href="#" className="underline">Community Guidelines</a> • <Link to="/terms" className="underline">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
