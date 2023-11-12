'use client'

import { useState, useRef, useEffect } from 'react'

type AccordionpProps = {
  children: React.ReactNode
  tag?: string
  title: string
  active?: boolean
}

export default function Accordion({
  children,
  tag = 'li',
  title,
  active = false
}: AccordionpProps) {

  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
  const accordion = useRef<HTMLDivElement>(null)
  const Component = tag as keyof JSX.IntrinsicElements

  useEffect(() => {
    setAccordionOpen(active)
  }, [accordion])

  return (
    <Component className=' border-b border-gray-200'>
      <button
        className="flex justify-between items-center w-full text-lg font-medium text-left py-5"
        onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
        aria-expanded={accordionOpen}
      >
        
        <span className='text-white
        text-lg
md:text-2xl
font-normal
font-poppins
leading-[42px] '>{title}</span>
        <svg className="w-4 h-4 fill-current text-white shrink-0 mr-8 -ml-12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
        </svg>
      </button>
      <div
        ref={accordion}
        className="text-gray-700
        text-lg
        md:text-xl
        font-light
        font-poppins
        leading-[25px]
        md:leading-[42px]  overflow-hidden transition-all duration-300 ease-in-out"
        style={accordionOpen ? { maxHeight: accordion.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <p className="pb-5">{children}</p>
      </div>
    </Component>
  )
}
