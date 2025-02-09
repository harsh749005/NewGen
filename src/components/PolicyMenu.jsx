import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PolicyMenu =()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative z-50 "
      onClick={() => setIsOpen(!isOpen)}

    >
      {/* Navbar Item */}
      <div className="flex items-center justify-center gap-2">
         <span className='font-["Kanit",serif] xl:text-xl font-light hover:text-blue-600 cursor-pointer select-none'>Policy</span>
        <FaAngleDown className={`rotate-${isOpen ? 180 : 0}`}/>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-[111111]" >
          <ul className="py-2">
              <li >
                <Link to='/termsConditions'
                  className="block px-4 py-2 text-black hover:text-blue-300 transition"
                >
                 Terms & Conditions
                </Link>
              </li>
              <li >
                <Link to='/refundPolicy'
                
                  className="block px-4 py-2 text-black hover:text-blue-300 transition"
                >
                 Refund Policy
                </Link>
              </li>
              <li >
                <Link to='/paymentPolicy'
                 
                  className="block px-4 py-2 text-black hover:text-blue-300 transition"
                >
                 Payment Policy
                </Link>
              </li>
              <li >
                <Link to='/privacyPolicy'
                  className="block px-4 py-2 text-black hover:text-blue-300 transition"
                >
                 Privacy Policy
                </Link>
              </li>
              <li >
                <Link to='/publicationPolicy'
                  className="block px-4 py-2 text-black hover:text-blue-300 transition"
                >
                Publication Policy
                </Link>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default PolicyMenu;