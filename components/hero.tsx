import React from 'react';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 to-white">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-1/2 py-12 md:py-16">
              <div className="px-4 md:px-8 text-center md:text-left">
               <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter text-black mb-4" data-aos="zoom-y-out">
                  Monetize Your Discord Channels with Our NFT Service Tickets
                </h1>
                <p className="text-md text-gray-400 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Our NFT Service Tickets offer a new way to monetize your Discord channels. Experience seamless transactions, instant access, and high scalability.
                </p>
                <div className="max-w-xs mx-auto md:max-w-none md:flex md:justify-start" data-aos="zoom-y-out" data-aos-delay="300">
                  <div className="mb-4 md:mb-0">
                    <a className="btn text-white bg-blue-300 hover:bg-blue-400 w-full md:w-auto" href="#0">Join Our Community</a>
                  </div>
                  
                  <div className="md:ml-4">
                    <a className="btn text-white bg-gray-800 hover:bg-gray-900 w-full md:w-auto" href="#0">Book a Call</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="md:w-1/2 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/images/g29.png')`, height: '400px' }}></div>
          </div>

          {/* Hero image */}
        </div>

      </div>
    </section>
  )
}
