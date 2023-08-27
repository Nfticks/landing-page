"use client";
import React, { useState } from 'react';



export default function Newsletter() {

  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control the popup
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 200) {
      // Success: Show the popup
      setShowPopup(true);
      setEmail('');
      setError('');
    } else {
      // Error: Get error message from response and display it
      const data = await response.json();
      setError(data.error);
    }
  };

  return (
    <section id="whitelist-section" className="relative max-w-full mx-auto px-4 sm:px-6 bg-blue-100">
      <div className="py-12 mx-auto sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
        <div className="rounded py-4 px-8" data-aos="zoom-y-out">
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <div className="text-center lg:text-left lg:max-w-xl mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold text-black mb-2">Subscribe to whitelist or join our  <br></br> Discord to get our best promo first.</h3>
              <img src="/images/Line_Chart.png" alt="arrow" className="w-3/4 pt-3 mx-auto lg:mx-0" />
            </div>
            <div className="flex flex-col sm:flex-row justify-around  lg:mx-0">
              <div className="relative text-gray-600">
                <input
                  type="email"
                  name="search"
                  placeholder="Email address ... "
                  className="bg-white w-[645px] h-12 px-5 pr-20 rounded-full text-sm focus:ring-violet-300 focus:border-violet-300 border-transparent"
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <button
                  type="submit"
                  className="absolute right-0 top-0 btn text-base text-white rounded-full font-bold shadow-md"
                  style={{ backgroundColor: '#7854F7' }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              {error && <p className='text-red-500'>{error}</p>}
            </div>
            
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-opacity-75 transition-opacity duration-500">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">Subscription received!</p>
            <p className="text-sm text-gray-600">Thank you for subscribing to our newsletter.</p>
            <button
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
