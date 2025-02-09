import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PolicyMenuMd from "../../components/PolicyMenuMd";
const PrivacyToPolicy = () => {
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
            Privacy Policy
          </h1>
          <div className="w-full h-[400px] bg-blue-400 absolute bottom-[-42px]  rounded"></div>
        </div>
        <div className="mt-10 w-[90%] m-auto">
          <h1 className="font-medium text-4xl ">Privacy Policy</h1>
          <div className="mt-10">
            <p className="font-['Kanit',serif] text-lg font-light">
              This policy document highlights our privacy practices regarding
              personal information that we collect and store about you through
              this website and also for those personal Information that you
              provide us while participating in our conferences/events and
              campaigns.
            </p>
            <ul className=" list-disc font-['Kanit',serif] text-lg font-light flex flex-col gap-2 mt-2">
              <li>
                We process your personal information when it is necessary for
                the purposes of a legitimate interest pursued by us or a third
                party (when these interests are not overridden by your data
                protection rights). This applies in the following circumstances
                :
              </li>
              <ul className="list-decimal">
                <li>to identify you once you register on our website; and</li>
                <li>
                  to contact you and respond to your questions or requests;
                </li>
                <li>
                  to understand which parts of the website are visited and how
                  frequently; and
                </li>
              </ul>
              <li>
                to provide access to desirable content based on your
                preferences.The information supplied by you after the
                registration will be kept as a record and we are committed to
                data privacy will protect your personal information, wherever
                necessary.
              </li>
              <li>
                We may also share the personal information provided by you to
                our third-party service providers engaged in the conference held
                and to our co– sponsors for event purpose only.
              </li>
              <li>
                Except to the disclosure of the information to the above
                concerned parties, we will not disclose your personal
                information to any other third party without your consent.
              </li>
              <li>
                If you do not wish to get contacted in the future for event
                purposes, write to us via email to unsubscribe this service
                provided by us.
              </li>
              <li>
                If you choose not to provide your personal information that is
                mandatory to process your request, we may not be able to provide
                the corresponding service for publication-related communication
                from organizers or publishers in the future.
              </li>
              <li>
                The information of the reviewer body is highly considered to be
                confidential and cannot be disclosed at any point in time even
                if claimed or requested.
              </li>
              <li>
                The contact details and personal information of speakers agreed
                to be a part of our conference may be shared with event
                attendees. We may also post the information containing name,
                affiliation, email address, etc., with a photograph on our
                various conference websites for visitors knowledge attending a
                particular conference.
              </li>
              <li>
                We prohibit the creation of frames around all the web pages
                which alters and affects the visual presentation of any of our
                websites.
              </li>
              <li>
                Filming and photography may take place at the conference. You
                consent to your image and likeness being used in marketing and
                films without any payment to you. By attending a conference, you
                hereby have the absolute right and permission to use your
                photograph or video image in promotional materials and
                publicity. In addition, you hereby consent to waive any and all
                future claims, causes of actions, and/or demands against
                conference secretariat.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyToPolicy;
