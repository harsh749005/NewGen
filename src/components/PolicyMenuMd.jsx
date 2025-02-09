import React from 'react'
import { Link } from 'react-router-dom'

const PolicyMenuMd = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-10 lg:hidden bg-blue-500 py-10'>
        <Link to="/paymentPolicy" className="text-[12px] cursor-pointer font-['Kanit',serif] font-light text-white hover:text-blue-500 ">
        Payment Policy
        </Link>
        <Link to="/privacyPolicy" className="text-[12px] cursor-pointer font-['Kanit',serif] font-light text-white hover:text-blue-500 ">
        Privacy Policy
        </Link>
        <Link to="/publicationPolicy" className="text-[12px] cursor-pointer font-['Kanit',serif] font-light text-white hover:text-blue-500 ">
        Publication Policy
        </Link>
        <Link to="/refundPolicy" className="text-[12px] cursor-pointer font-['Kanit',serif] font-light text-white hover:text-blue-500 ">
         Refund Policy
        </Link>
      
    </div>
  )
}

export default PolicyMenuMd
