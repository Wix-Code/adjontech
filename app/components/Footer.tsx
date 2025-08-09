import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaPhone, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { links } from "../dummyData";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-12 px-10">
      <div className="max-w-[1000px] mx-auto flex-col flex md:flex-row justify-between gap-10">
        {/* Logo & Name */}
        <div className="flex flex-1 flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img className="w-[50px]" src="/pic/logo.jpg" alt="AbjonTech Logo" />
            <p className="font-semibold text-[22px]">AbjonTech</p>
          </Link>
          <p className="text-sm text-gray-300">
            Innovative solutions for your business needs.  
            Your trusted partner in technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 flex-col items-center md:items-start">
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-1 flex-col items-center md:items-start gap-4">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <div className="flex items-start gap-2 text-gray-300">
            <MapPin className="text-[#ff0022] mt-1" />
            <p className="text-sm">
              Plot 49, MCC Road, Ikenegbu Layout,  
              Owerri, Imo State, Nigeria
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="tel:+2348035302307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-green-600 flex items-center justify-center text-white hover:bg-green-500 transition"
            >
              <FaPhone className="text-[20px]" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100083553543663"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-[20px]" />
            </a>
            <a
              href="https://wa.me/2348035302307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-[20px]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-pink-500 flex items-center justify-center text-white hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-[20px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AbjonTech Solutions Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;