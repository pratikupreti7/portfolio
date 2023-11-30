import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/images/PU2.png"
            alt="hero image"
            className=" rounded-full"
            width={100}
            height={100}
          />
        </Link>
        <h3 className="text-slate-400 text-lg">
          &quot;Success is not final, failure is not fatal: It is the courage to
          continue that counts.&quot; - Winston S. Churchill
        </h3>
      </div>
    </footer>
  )
}

export default Footer
