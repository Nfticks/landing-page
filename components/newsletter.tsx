import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-8 md:py-12 mx-auto sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
      <div className="max-w-full mx-auto px-4 sm:px-6 bg-blue-100">
        <div className="">

          {/* CTA box */}
          <div className="relative rounded py-8 px-6 md:py-12 md:px-8 " data-aos="zoom-y-out">

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content - Text */}
              <div className="text-center lg:text-left lg:max-w-xl mb-6 lg:mb-0">
                <h3 className="h4 text-black mb-2">Subscribe to whitelist or join our Discord to get our best promo first.</h3>
              </div>

              {/* CTA form */}
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                <input type="email" className="form-input w-full appearance-none border border-gray-200 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
