"use client"
import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Booking() {
  return (
    <section className='my-5'>
      <h2 className="h2 font-bold text-center mb-4 text-white px-3" data-aos="fade-up" data-aos-delay="200">Book a Meeting</h2>
      <p className="text-center text-gray-400 mb-6" data-aos="fade-up" data-aos-delay="200">
        Schedule a meeting with us to discuss how we can help you with your needs.
      </p>
      {/* <InlineWidget url="https://calendly.com/nmiliali8" pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}} />
      <InlineWidget
          url={'https://calendly.com/nmiliali8'}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            
          }}
          

        />{' '} */}
      
      <div className="calendly-inline-widget px-3" data-url="https://calendly.com/nfticks/30min?hide_gdpr_banner=1" data-aos="fade-up" data-aos-delay="250" style={{ width: '100%', height: '80vh' }} ></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    
        
      </section>
  );
}
