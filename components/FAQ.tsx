import React from 'react';
import Accordion from './utils/accordion'; // Make sure to import the Accordion component

export default function FAQ() {
  return (
    <section className="relative bg-slate-50">

{/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-bold" data-aos="fade-up" data-aos-delay="200">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400" data-aos="fade-up" data-aos-delay="200"> 
              Everything you need to know about the product and billing.
            </p>
          </div>

          {/* Accordion items */}
          <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-none px-16" data-aos="fade-up" data-aos-delay="250">
            <ul>
              <Accordion title="What is Nfticks?" active={true}>
                Nfticks is a revolutionary NFT ticketing platform that allows you to create, sell, and manage event tickets as NFTs on the blockchain.
              </Accordion>
              <Accordion title="How do I purchase tickets on Nfticks?">
                Purchasing tickets on Nfticks is simple. Just browse the available events, choose the ticket you want, and follow the payment process.
              </Accordion>
              <Accordion title="What payment methods are accepted?">
                Nfticks currently accepts major cryptocurrencies like Ethereum (ETH) and Binance Coin (BNB) for purchasing event tickets.
              </Accordion>
              <Accordion title="Can I transfer my NFT ticket to someone else?">
                Yes, you can transfer your NFT ticket to another wallet address just like any other NFT. This allows you to easily sell, gift, or trade your ticket.
              </Accordion>
              <Accordion title="What happens if the event is canceled?">
                In the event of a cancellation, Nfticks will initiate a refund process for the purchased NFT tickets, and the corresponding cryptocurrency will be returned to the buyers.
              </Accordion>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
