import { Linkedin, MapPin } from 'lucide-react';
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Hero-Image-Engineering-Services%3Arad-3x2?ts=1748570118663&fit=constrain&dpr=off")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="text-white py-[6rem] px-5 md:px-[4rem] mb-6"
      >
        <p className="text-[28px] md:text-[36px] font-semibold">Contact Us</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-8 max-w-[900px] mx-auto px-5 pb-10">
        {/* Contact Info */}
        <div className="flex-1 text-center flex flex-col items-center space-y-3">
          <MapPin className="text-[#404df7]" />
          <p className="text-[#404df7] text-[16px] font-semibold">Abjontech Solutions Limited</p>
          <p className="text-[14px] font-normal">
            Plot 49, MCC Road, Ikenegbu Layout, Owerri, Imo State, Nigeria
          </p>
          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition"
            >
              <Linkedin className="w-[18px]" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 space-y-5">
          <div>
            <label htmlFor="name" className="text-[14px] font-medium block mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 border border-[#ececec] outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-[14px] font-medium block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-[#ececec] outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-[14px] font-medium block mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full px-4 py-3 border border-[#ececec] outline-none"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-[14px] font-medium block mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 h-[200px] border border-[#ececec] outline-none resize-none"
              placeholder="Write your message here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;