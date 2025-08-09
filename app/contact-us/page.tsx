import { Linkedin, MapPin } from 'lucide-react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';

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
        className="text-white py-[6rem] px-5 md:px-[4rem]  mb-6"
      >
        <p className="text-[28px] md:text-[36px] py-2 border-y-[1px] border-[#ececec] w-fit font-semibold">Contact Us</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-8 max-w-[900px] mx-auto px-5 pb-10">
        {/* Contact Info */}
        <div className="flex-1 text-center flex flex-col items-center space-y-3">
          <div data-aos="fade-up"
            data-aos-delay="500" className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8133662.920782439!2d-2.1862792968749947!3d5.490236007479131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259b03565895d%3A0x942027305c2068cb!2sAbjontech%20Solutions%20Limited!5e0!3m2!1sen!2sng!4v1754730137131!5m2!1sen!2sng"
              className="w-full h-[400px]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <MapPin data-aos="fade-up"
            data-aos-delay="500" className="text-[#ff0022]" />
          <p data-aos="fade-up"
            data-aos-delay="500" className="text-[#4e4e4e] text-[16px] font-semibold">Abjontech Solutions Limited</p>
          <p data-aos="fade-up"
            data-aos-delay="500" className="text-[14px] font-normal">
            Plot 49, MCC Road, Ikenegbu Layout, Owerri, Imo State, Nigeria
          </p>
          <div data-aos="fade-up"
            data-aos-delay="500" className='flex items-center gap-5'>
            <a
              href="https://+2348035302307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-green-600 flex items-center justify-center text-white hover:bg-green-500 transition"
            >
              <FaPhone className='text-[#FFFFFF] text-[22px]' />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100083553543663"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition">
              <FaFacebookF className='text-[#FFFFFF] text-[22px]'/>
            </a>
            <a
              href="https://wa.me/2348035302307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-[#FFFFFF] text-[22px]" />
            </a>
            <a href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] rounded-[8px] bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition">
              <FaInstagram className='text-[#FFFFFF] text-[22px]' />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 space-y-5">
          <div data-aos="fade-up"
            data-aos-delay="500">
            <label htmlFor="name" className="text-[14px] text-[#4e4e4e] font-medium block mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 text-[14px] placeholder:text-[#cfcfcf] text-[#4e4e4e] border border-[#ececec] outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div data-aos="fade-up"
            data-aos-delay="500">
            <label htmlFor="email" className="text-[14px] text-[#4e4e4e] font-medium block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 text-[14px] placeholder:text-[#cfcfcf] text-[#4e4e4e] border border-[#ececec] outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div data-aos="fade-up"
            data-aos-delay="500">
            <label htmlFor="subject" className="text-[14px] text-[#4e4e4e] font-medium block mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full text-[#4e4e4e] text-[14px] placeholder:text-[#cfcfcf] px-4 py-3 border border-[#ececec] outline-none"
              placeholder="Subject of your message"
            />
          </div>

          <div data-aos="fade-up"
            data-aos-delay="500">
            <label htmlFor="message" className="text-[14px] text-[#4e4e4e] font-medium block mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 h-[200px] border text-[14px] placeholder:text-[#cfcfcf] text-[#4e4e4e] border-[#ececec] outline-none resize-none"
              placeholder="Write your message here"
            />
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="500"
            className="inline-block cursor-pointer bg-black text-white px-6 py-3 font-medium hover:bg-[#333] transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;