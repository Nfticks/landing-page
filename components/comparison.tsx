import React from 'react';

export default function Comparison() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nfticks vs. Traditional Market</h2>
          </div>

          <div className="flex gap-8">
            {/* First stack of cards */}
            <div className="stack">
              <div className="card shadow-md bg-white text-primary-content">
                <div className="card-body">
                <img src="/images/check.png" alt="Book a meeting" className="w-28 h-28 mb-3" />
                  <h2 className="card-title">Notification 1</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div> 
              <div className="card shadow bg-slate-50 text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 2</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div> 
              <div className="card shadow-sm bg-slate-100 text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 3</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
            </div>
            
            {/* Second stack of cards */}
            <div className="stack">
              <div className="card shadow-md bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 1</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div> 
              <div className="card shadow bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 2</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div> 
              <div className="card shadow-sm bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">Notification 3</h2> 
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
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
  );
}
