

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6  border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            Stream-GPT
          </h2>
          <p className="text-sm font-semibold leading-relaxed">
            This project is built for educational and portfolio purposes.
            It is inspired by modern streaming platforms and demonstrates
            frontend development skills using React and Tailwind CSS.
          </p>
        </div>

      
      

        
        <div>
          <h3 className="text-white font-medium mb-3">Legal</h3>
          <p className="text-sm font-bold leading-relaxed">
            This website is NOT affiliated with, endorsed by, or connected
            to Netflix or any media company. No user credentials or personal
            data are stored or collected.
          </p>
        </div>

      </div>

      
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} StreamGPT • Built by Aman • All rights reserved
      </div>

    </footer>
  );
};

export default Footer;
