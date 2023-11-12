import React from 'react';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';


export default function Hero() {
  return (
    <section className="relative  ">

      <div className="hidden md:block max-w-screen-2xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 mx-auto">

          {/* Section header */}
          <div className=" px-28 flex flex-col items-center md:flex-row bg-blend-color-dodge bg-opacity-40 bg-[#0F1FFF]  rounded-[19px] w-[1223px] h-[621px] mx-auto">
            {/* Left Section */}
            <div className="md:w-[670px]">
              <div className="text-center md:text-left">
                <h1
                  className="text-white
                  text-4xl
                  font-bold
                  font-poppins
                  leading-[46.80px] 
                  tracking-wide  mt-8"
                  data-aos="zoom-y-out"
                  
                >
                  Monetize Your Discord <br></br> Channels  with Our NFT <br></br> Service Tickets 
                </h1>
                <p
                  className="text-zinc-200
                  text-lg
                  font-semibold
                  font-poppins
                  tracking-wider
                  leading-[28px]  mb-8 mt-2 pr-10"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                  
                >
                  Revolutionizing ticketing with blockchain. Experience secure, transparent, and effortless access to events in our new era of harmonious tech integration.</p>
                <div className="max-w-xs mx-auto md:max-w-none md:flex md:items-center justify-start" data-aos="zoom-y-out" data-aos-delay="300">
                <div className="mb-4 md:mb-0">
                  <a
                    className="btn text-base tracking-[3px] px-6 text-indigo-500  bg-white rounded-full font-semibold  flex items-center"
                    
                    href="https://discord.gg/6ANZ43UD"
                  >
                    WHITEPAPER
                  </a>
                </div>

               

              </div>

              </div>
            </div>

            <div className='md:w-1/6'>

            </div>
            
            
            {/* Right Section */}
            <div
              className="hidden md:block lg:block md:w-2/5 bg-cover bg-no-repeat bg-center"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                backgroundImage: `url('/images/featured-image_.png')`,
                backgroundSize: 'cover',  // Add this line to adjust background size
                backgroundPosition: 'center center',  // Add this line to adjust background position
                height: '422.57px',
                width:'377px'
              }}
            ></div>
            </div>

          
        </div>

      </div>

      <div className="block md:hidden max-w-screen-2xl mx-auto px-4 sm:px-6 mt-32">

        {/* Hero content */}
        <div className="mx-auto">

          {/* Section header */}
          <div className=" px-2 py-4  flex flex-col items-center justify-center bg-opacity-40 bg-indigo-500  rounded-[19px]  mx-auto">
            {/* Left Section */}
            <div >
              <div className="text-center ">
                <h1
                  className="text-white
                  text-2xl
                  font-bold
                  font-poppins
                  leading-[36.80px] 
                  tracking-wide  mt-8"
                  data-aos="zoom-y-out"
                  
                >
                  Monetize Your Discord <br></br> Channels  with Our NFT <br></br> Service Tickets 
                </h1>
                <p
                  className="text-zinc-200
                  text-sm
                  font-normal
                  font-poppins
                  tracking-wider
                  leading-[22px]  mb-8 mt-2 "
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                  
                >
                  Revolutionizing ticketing with blockchain. Experience secure, transparent, and effortless access to events<br></br> in our new era of harmonious tech integration.</p>
                <div className="max-w-[240px] mx-auto " data-aos="zoom-y-out" data-aos-delay="300">
                  <a
                    className="btn text-sm tracking-[3px] text-indigo-500  bg-white rounded-full font-semibold  flex items-center"
                    
                    href="https://discord.gg/6ANZ43UD"
                  >
                    WHITEPAPER
                  </a>
                

               

              </div>

              </div>
            </div>

            
            
            
            
            </div>

          
        </div>

      </div>
    </section>
  )
}
