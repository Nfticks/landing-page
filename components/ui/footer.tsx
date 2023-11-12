import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-indigo-950 py-8">
      <div className="max-w-7xl mx-auto ">
        <div className="grid sm:grid-cols-12 gap-8">

          {/* Left section */}
          <div className="sm:col-span-12 lg:col-span-6">
            <div className="mb-4">
              <Logo imageSrc="/images/logo_white.png" />
            </div>
            <p className="text-sm text-gray-800 text-white px-2">
              Our NFT Service Tickets offer a new way to monetize your Discord channels.<br></br> Experience seamless transactions, instant access, and high scalability.
            </p>
          </div>

          {/* Right section */}
          <div className="sm:col-span-12 lg:col-span-6 flex justify-end">
          
            <div className="flex flex-col mb-4">
            
                <p className="text-white text-base font-bold mb-3">Follow us:</p>
              
            
              
            <ul className="flex ">
            <li  style={{
                backgroundColor: '#7854F7', 
                borderRadius: '50%', 
                padding: '10px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg>
            </li>

            <li className="ml-4 " style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                borderRadius: '50%', 
                padding: '10px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" fill="#fff" />
              </svg>
            </li>

            <li className="ml-4" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                borderRadius: '50%', 
                padding: '10px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path /* fill="currentColor"  */d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" fill="#fff"/></svg> 
            </li>

            <li className="ml-4" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                borderRadius: '50%', 
                padding: '10px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path /* fill="currentColor"  */d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z" fill="#fff"/></svg>
            </li>
 
          </ul>
            </div>
            
          </div>
          

        </div>

        {/* Bottom section */}

        <hr className="border-t border-white mt-8 mb-6" />

        {/* Bottom section */}
        <div className="text-center">
          <p className="text-white text-sm">
            COPYRIGHT NFTICKS.IO - 
            <Link href="/terms">TERMS & CONDITIONS</Link> 
            <span className="mx-2"></span>
            <Link href="/privacy">PRIVACY </Link>
            <span className="mx-2"></span>
            <Link href="/privacy">POLICY</Link>
          </p>
        </div>

        
        
      </div>
    </footer>
  )
}
