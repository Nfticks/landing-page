import React from 'react';

export default function Booking() {
  return (
    <section className="relative rounded-lg overflow-hidden my-6 mx-auto sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
      <h2 className="h2 font-bold text-center mb-4" data-aos="fade-up" data-aos-delay="200">Book a Meeting</h2>
      <p className="text-center text-gray-400 mb-6" data-aos="fade-up" data-aos-delay="200">
        Schedule a meeting with us to discuss how we can help you with your needs.
      </p>
      <div className="calendly-inline-widget" data-url="https://calendly.com/nfticks/30min?hide_gdpr_banner=1" data-aos="fade-up" data-aos-delay="250" style={{ width: '100%', height: '80vh' }} ></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </section>
  );
}
