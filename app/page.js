"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [thanks, setThanks] = useState(false);

  const handleYes = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "https://skygreenenergies.com/calculator"; // replace with your calculator URL
    }, 2000);
  };

  const handleNo = () => {
    setThanks(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center text-center px-6">
      
      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg mb-4">
        India’s Smartest Solar Savings Calculator ☀️
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl">
        Instantly know your <span className="text-green-400 font-semibold">system size</span>, 
        <span className="text-green-400 font-semibold"> subsidy</span>, 
        <span className="text-green-400 font-semibold"> payback</span> & lifetime savings.  
        Accurate. State-wise rules applied ✅
      </p>

      {/* Call to Action Box */}
      <div className="bg-black/80 border border-green-500 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.5)] p-10 max-w-lg w-full">
        
        {!loading && !thanks && (
          <>
            <p className="text-xl text-green-200 mb-6">Do you want to calculate your solar savings today?</p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleYes}
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-10 rounded-lg shadow-md transition text-lg"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-800 hover:bg-gray-700 text-green-400 border border-green-500 font-bold py-3 px-10 rounded-lg shadow-md transition text-lg"
              >
                No
              </button>
            </div>
          </>
        )}

        {/* Loader */}
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <div className="loader border-t-green-400 border-4 border-gray-700 rounded-full w-14 h-14 animate-spin mb-4"></div>
            <p className="text-green-300 text-lg">Redirecting you to SKYGREEN…</p>
          </div>
        )}

        {/* Thank You Message */}
        {thanks && !loading && (
          <div className="text-green-300 text-lg font-semibold">
            🙏 Thank you for visiting! <br />
            We hope to see you again in future.
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <p className="mt-12 text-gray-400 text-sm">
        Powered by <span className="text-green-400 font-semibold">SKYGREEN ENERGIES</span> | India’s Trusted Solar Brand
      </p>
    </div>
  );
}
