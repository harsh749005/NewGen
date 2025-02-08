import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const PublicationPolicy = () => {
  return (
    <>
      <Navbar />
      <hr className="w-[90%] m-auto mt-2 text-gray-400" />

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
            Publication Policy
          </h1>
          <div className="w-full h-[400px] bg-blue-400 absolute bottom-[-42px]  rounded"></div>
        </div>
        <div className="mt-10 w-[90%] m-auto">
          <h1 className="font-medium text-4xl ">Publication Policy</h1>
          <div className="mt-10 flex flex-col gap-5">
            <p className="font-['Kanit',serif] text-lg font-light">
              Publication of papers is solely dependent upon the author’s
              response to queries and proofreading during the production stage.
              Publishers or Conference Organizers can decline to publish the
              conference paper that does not meet their quality standards.
            </p>
            <p className="font-['Kanit',serif] text-lg font-light">
              We do not claim or guarantee that any papers will be indexed in
              any database. Indexing services evaluate conference papers and
              independently determine what they will index. The procedures for
              the same are dynamic and are liable to change from time-to-time.
            </p>
            <p className="font-['Kanit',serif] text-lg font-light">
              The publication time for the papers received is not fixed. It may
              take up to 6-9 months from the date of completion of the
              conference or even more for further processing. The same can also
              be extended due to unavoidable circumstances or as per the
              publisher requirements or delayed response by authors to
              publishers’ queries.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PublicationPolicy;
