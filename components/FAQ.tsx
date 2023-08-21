import React from 'react';
import Accordion from './utils/accordion'; // Make sure to import the Accordion component

export default function FAQ() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>

          {/* Accordion items */}
          <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-none px-16">
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
