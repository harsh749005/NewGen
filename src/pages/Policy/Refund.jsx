import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Refund = () => {
  return (
    <>
    <Navbar />
    <div className="h-100vh  w-full flex flex-col gap-5 mb-10">
      <div className="mt-5"></div>
      <div className=" pt-10 relative">
        <div className="w-[90%] h-[400px] m-auto relative z-20">
          <img
            className="object-cover h-full w-full rounded"
            src="https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h1 className="text-6xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold z-50">
          Refund Policies
        </h1>
        <div className="w-full h-[400px] bg-blue-400 absolute bottom-[-42px]  rounded"></div>
      </div>
      <div className="mt-10 w-[90%] m-auto">
        <h1 className='font-medium text-4xl '>Refund Policy</h1>
        <p className="mt-10">
          <ul className=" list-decimal font-['Kanit',serif] text-lg font-light flex flex-col gap-2">
            <li>
              In case of any additional or error payments made by the
              candidate, refunds could be processed in not less than ten
              working days.
            </li>

            <li>
              Kindly take a snapshot of the payment confirmation page while
              making the payment.
            </li>
            <li>
              Cancellation of registration without any valid reason is not
              permissible.
            </li>
            <li>
              Change of mode of registration (Physical to online) should be
              informed at least 30 days in advance to the conference dates
            </li>
            <li>
              Authors are advised to share their grievance To:
              editor.sciconf@gmail.com cc: newgenresearchconsultancy@gmail.com
              along with the snapshot of the payment confirmation page
              (obtained while making the payment).
            </li>
          </ul>
        </p>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Refund
