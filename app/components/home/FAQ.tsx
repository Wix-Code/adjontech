"use client";

import { faqs } from '@/app/dummyData';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-5 px-4">
      <div className="max-w-[900px] mx-auto">
        <p className="md:text-2xl text-[20px] font-semibold mb-6">Frequently Asked Questions (FAQ)</p>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}
              className="px-5 py-4 rounded-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <p className="font-medium">{faq.question}</p>
                <ChevronDown
                  className={`transition-transform text-[#4e4e4e] w-[16px] duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {activeIndex === index && (
                <p className="mt-3 text-sm text-[#4e4e4e]">{faq.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;