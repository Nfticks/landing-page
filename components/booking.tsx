import React from 'react';

export default function Booking() {
  return (
    <section className="relative bg-indigo-600 rounded-lg overflow-hidden my-6 mx-auto sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">

          {/* Items */}
          <div className="max-w-md mx-auto md:max-w-xl lg:max-w-none">
            <div className="flex gap-6">

              {/* First section */}
              <div className="relative flex flex-col items-center p-6 rounded-lg w-1/2">
                <img src="/images/mock.png" alt="Book a meeting" className="w-28 h-28 mb-3" />
                <h4 className="text-2xl font-bold leading-snug tracking-tight mb-2">Book a meeting</h4>
                <p className="text-gray-300 text-center text-base">
                  Join the future of ticketing.
                </p>
              </div>

              {/* Second section */}
              <div className="flex flex-col items-center p-6 w-1/2">
                {/*<div className="calendly-inline-widget" data-url="https://calendly.com/nfticks" style={{ width: '100%', height: '250px' }}></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              */}</div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
