import React from 'react';

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              <span style={{ color: '#43D1A1' }}>3 Easy Steps to</span><br />
              Create Your First Ticket
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-md mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-14 bg-blue-100 rounded-lg">
              <img src="/images/discord.png" alt="Connect Discord" className="w-20 h-20 mb-4" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Connect Discord</h4>
              <p className="text-gray-600 text-center">
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-14 bg-blue-100 rounded-lg">
              <img src="/images/ticket.png" alt="Create Tickets" className="w-20 h-20 mb-4" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Create Tickets</h4>
              <p className="text-gray-600 text-center">
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-14 bg-blue-100 rounded-lg">
              <img src="/images/share.png" alt="Share Your Event" className="w-20 h-20 mb-4" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Share Your Event</h4>
              <p className="text-gray-600 text-center">
                Our NFT Service Tickets offer a new way to monetize your Discord channels.
                Experience seamless transactions, instant access, and high scalability.
              </p>
            </div>

          </div>

          {/* Join Discord button */}
          <div className="text-center mt-12">
            <a
              href="https://discord.com/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold shadow-md hover:bg-purple-600 transition duration-300"
            >
              Join Discord
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
