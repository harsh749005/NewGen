import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PolicyMenuMd from "../../components/PolicyMenuMd";
const PaymentPolicy = () => {
  return (
    <>
    
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />
<PolicyMenuMd/>
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
            Payment Policy
          </h1>
          <div className="w-full h-[400px] bg-blue-400 absolute bottom-[-42px]  rounded"></div>
        </div>
        <div className="mt-10 w-[90%] m-auto">
          <h1 className="font-medium text-4xl ">
            ONLINE REGISTRATION AND PAYMENT POLICY
          </h1>
          <div className="mt-10 flex flex-col gap-5">
            <div className="">
              <p className="font-medium text-xl">
                Instructions for Author(s) Registration & Payment of
                Registration Fee
              </p>
              <ul className=" list-decimal font-['Kanit',serif] text-lg font-light flex flex-col gap-2 mt-2">
                <li>
                  Each paper must be at least registered by one author for
                  presentation in the conference getting it published in
                  Springer.
                </li>
                <li>
                  Registration fee for each category has been defined in the
                  Registration Fee table. No registration will be confirmed
                  until payment is received.
                </li>
                <li>
                  Additional Paper Registration and Co-author registration
                  applies as mentioned in table above.
                </li>
                <li>
                  If more than one author (co-author) has to register for the
                  same paper; they shall register and make payment separately as
                  per the fee detailed for ‘Co-Author Registration’.
                </li>
                <li>
                  Kindly pay the conference registration fee through online
                  mode. The online registration process is managed by NewGen
                  Research Consultancy.
                </li>
                <li>
                  Paper has to be presented in the conference virtually (online)
                  or physically (offline) based on the selected mode by the
                  presenter and paying the applicable registration fee.
                </li>
                <li>
                  Registration fee can be paid by Card through the payment
                  gateway provided. Kindly note that the card details will not
                  be accepted via email.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-medium text-4xl">
                Registration Fee (Physical Mode):
              </h1>
              <p className=" list-decimal font-['Kanit',serif] text-lg font-light mt-5">
                This fee includes access to Inaugural Session, Keynotes/Invited
                Lectures, Oral Paper Presentation Sessions, Networking,
                Conference Lunch and Refreshment, Conference Kit,
                Participation/Presentation Certificate. The conference is
                non-residential and delegates are kindly requested to make their
                own arrangement for accommodation.
              </p>
            </div>
            <div>
              <h1 className="font-medium text-4xl">
                Registration Fee (Online Mode):
              </h1>
              <p className=" list-decimal font-['Kanit',serif] text-lg font-light mt-5">
                This fee includes access to Inaugural Session, Keynotes/Invited
                Lectures, Oral Paper Presentation Sessions in online mode,
                Participation/Presentation Certificate (through e-mail after the
                completion of conference).{" "}
              </p>
              <p className=" list-decimal font-['Kanit',serif] text-lg font-light mt-5">
                Registration must be paid and confirmed before the deadline. We
                may revise our terms and conditions as per the government norms,
                for example to reflect changes in relevant laws or regulatory
                requirements or improvements.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPolicy;
