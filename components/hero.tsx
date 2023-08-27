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


      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="flex flex-col md:flex-row ">
            {/* Left Section */}
            <div className="md:w-[670px]">
              <div className="px-4 md:px-8 text-center md:text-left">
                <h1
                  className="text-4xl font-extrabold leading-tighter tracking-tighter text-black mt-8"
                  data-aos="zoom-y-out"
                  style={{
                    color: '#272D4E',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '60px', /* 117.188% */
                  }}
                >
                  Monetize Your Discord Channels with Our NFT Service Tickets .
                </h1>
                <p
                  className="text-md text-gray-400 mb-8 font-roboto mt-2 pr-10"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                  style={{
                    color: '#94A2B3',
                   
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '25px',
                  }}
                >
                  Our NFT Service Tickets offer a new way to monetize your Discord channels. Experience seamless transactions, instant access, and high scalability.
                </p>
                <div className="max-w-xs mx-auto md:max-w-none md:flex md:items-center justify-start" data-aos="zoom-y-out" data-aos-delay="300">
                <div className="mb-4 md:mb-0">
                  <a
                    className="btn text-base px-16 pb-10 pt-4 text-white text-white rounded-full font-bold shadow-md flex items-center"
                    style={{ backgroundColor: '#7854F7' }}
                    href="https://discord.gg/6ANZ43UD"
                  >
                    JOIN OUR COMMUNITY
                  </a>
                </div>

                <div className="md:ml-4">
                  <p className="font-bold text-gray-500">OR</p>
                </div>

                <div className="md:ml-4">
                  <a
                    className="text-blue-500 hover:underline w-full md:w-auto font-bold flex items-center"
                    href="#0"
                  >
                    Book a Call
                    <svg
                      className="ml-2 h-4 w-4 text-blue-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              </div>
            </div>

            <div className='md:w-1/6'>

            </div>
            
            
            {/* Right Section */}
            <div
              className="md:w-2/5 bg-cover bg-no-repeat bg-center"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                backgroundImage: `url('/images/g29.png')`,
                backgroundSize: 'cover',  // Add this line to adjust background size
                backgroundPosition: 'center center',  // Add this line to adjust background position
                height: '600.57px'
              }}
            ></div>
            </div>

          {/* Hero image */}
        </div>

      </div>
    </section>
  )
}
