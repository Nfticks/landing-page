import React from 'react';

export default function Comparison() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Nfticks vs. Traditional Market
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-none">
            <div className="flex gap-8">

              {/* Light background card */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-lg bg-blue-100">
                <img src="/images/nfticks.png" alt="Nfticks" className="w-20 h-20 mb-4" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Nfticks</h4>
                <p className="text-gray-600 text-center">
                  Explore the future of NFT ticketing with seamless transactions, instant access, and high scalability.
                </p>
              </div>

              {/* Dark background card */}
              <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg text-white">
                <img src="/images/traditional-market.png" alt="Traditional Market" className="w-20 h-20 mb-4" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-2">Traditional Market</h4>
                <p className="text-gray-300 text-center">
                  Experience the legacy of traditional ticketing methods with limitations and less flexibility.
                </p>
              </div>
              
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
  )
}
