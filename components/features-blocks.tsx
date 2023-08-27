import React from 'react';

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-bold">
              <span style={{ color: '#43D1A1' }}>3 Easy Steps to</span><br />
              Create Your First Ticket
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-md mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-14 rounded-lg" data-aos="fade-up" data-aos-delay="200" style={{ background: '#E6F0FF', width: '364px', height: '520px', flexShrink: 0 }}>
              <img src="/images/discord-icon.png" alt="Connect Discord" className="w-24 h-24 mb-6" />
              <h4 className="text-3xl font-bold leading-tight mb-8 text-black-300 text-center">Connect Discord</h4>
              <p className="text-center text-lg text-gray-700 px-2" >
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-14 rounded-lg" data-aos="fade-up" data-aos-delay="300" style={{ background: '#EFF5FF', width: '364px', height: '520px', flexShrink: 0 }}>
              <img src="/images/ticket.png" alt="Create Tickets" className="w-24 h-24 mb-6" />
              <h4 className="text-3xl font-bold leading-tight mb-8 text-black-300 text-center">Create <br></br> Tickets</h4>
              <p className="text-gray-700 text-center text-lg px-2">
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-14 rounded-lg" data-aos="fade-up" data-aos-delay="400" style={{ background: '#F6FAFF', width: '364px', height: '520px', flexShrink: 0 }}>
              <img src="/images/shareing.png" alt="Share Your Event" className="w-24 h-24 mb-6" />
              <h4 className="text-3xl font-bold leading-tight mb-8 text-black-300 text-center">Share Your Event</h4>
              <p className="text-gray-700 text-center text-lg px-2">
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>

          </div>

          {/* Join Discord button */}
          <div className="text-center mt-12">
            <a
              href="https://discord.gg/6ANZ43UD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-6 text-white rounded-full font-bold shadow-md transition duration-300"
              style={{ backgroundColor: '#7854F7' }}
            >
              JOIN DISCORD
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
