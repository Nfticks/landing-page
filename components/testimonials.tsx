import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative max-w-6xl mx-auto">

<div className="max-w-3xl mx-auto text-center py-12 md:pb-20">
            <h2 className="text-white
text-4xl
font-bold
font-poppins
leading-[46.80px]
tracking-wide " data-aos="fade-up" data-aos-delay="200">
            Nfticks vs. Traditional Market
            </h2>
           
          </div>
      
          User Experience
<div className="relative overflow-x-auto px-3">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-[24px] overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 border-r dark:bg-gray-800 dark:border-gray-700">
                   
                </th>
                <th scope="col" className="px-6 py-8 border-r dark:bg-gray-800 dark:border-gray-700">
                    <span className='text-indigo-500
                    
                      text-[40px]
                      font-bold'>
                      NFTICKS
                      </span>
                      <span className='text-gray-400
                      text-sm
                      font-medium
                      leading-tight mx-2 '>
                      BOT
                        </span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className='text-slate-950
                      text-[40px]
                      font-bold'>
                      Traditional
                      </span>
                      <span className='text-gray-400
                      text-sm
                      font-medium
                      leading-tight mx-2 '>
                      Market
                        </span>
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b border-r dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="w-[297px] border-r dark:bg-gray-800 dark:border-gray-700 px-6 py-8 text-zinc-800
text-lg
font-medium
font-inter
leading-relaxed ">
                Payment verification 
                </th>
                <td className="px-6 py-4 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
        text-sm
        font-medium
        font-inter
        leading-tight ">
                    Automated through blockchain tehnology. The NFT serves as proof or purchase
                </td>
                <td className="px-6 py-4">
                Manual process. The server creator <br></br>
                  needs to verify each payment individually
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="w-[297px] px-6 py-8 text-zinc-800 border-r dark:bg-gray-800 dark:border-gray-700
text-lg
font-medium
font-inter
leading-relaxed ">
                Payment verification 
                </th>
                <td className="px-6 py-4 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
        text-sm
        font-medium
        font-inter
        leading-tight ">
                    Automated through blockchain tehnology. The NFT serves as proof or purchase
                </td>
                <td className="px-6 py-4 border-r dark:bg-gray-800 dark:border-gray-700 font-inter">
                Manual process. The server creator <br></br>
                  needs to verify each payment individually
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="w-[297px] px-6 py-8 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
text-lg
font-medium
font-inter
leading-relaxed ">
                Microsoft Surface Pro
                </th>
                <td className="px-6 py-4 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
        text-sm
        font-medium
        font-inter
        leading-tight ">
                    Instantaneous. As soon as the NFT is purchased, the user can join the private channels.
                </td>
                <td className="px-6 py-4 font-inter">
                Time-consuming. The user must wait for the server creator to verify the payment and grant access.
                </td>
                
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="w-[297px] px-6 py-8 text-zinc-800 border-r dark:bg-gray-800 dark:border-gray-700
text-lg
font-medium
font-inter
leading-relaxed ">
                User Experience
                </th>
                <td className="px-6 py-4 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
        text-sm
        font-medium
        font-inter
        leading-tight ">
                    Seamless. Users can purchase NFTs and gain access to private channels without any additional steps.</td>
                <td className="px-6 py-4">
                Time-consuming. The user must wait for the server creator to verify the payment and grant access.
                </td>
                
            </tr>

            <tr className="bg-white ">
                <th scope="row" className="w-[297px] h-[40px] px-6 py-8 text-zinc-800 border-r dark:bg-gray-800 dark:border-gray-700
text-lg
font-medium
font-inter
leading-relaxed ">
                
                </th>
                <td className="px-6 py-4 text-zinc-800
                border-r dark:bg-gray-800 dark:border-gray-700
        text-sm
        font-medium
        font-inter
        leading-tight ">
                </td>
                <td className="px-6 py-4">
                </td>
                
            </tr>
            
            
        </tbody>
    </table>
</div>

    </section>
  )
}