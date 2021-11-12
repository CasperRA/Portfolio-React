import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProvstiProject() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-24 text-prim-provsti lg:text-6xl lg:text-left lg:pl-8">
        Næstved Provsti
      </h1>
      <div className="w-full flex flex-col">
        <div className=" text-center lg:text-left lg:px-8 lg:w-1/2">
          <h2 className="text-xl font-semibold pt-2 lg:pt-4 ">
            Digitization of a church
          </h2>
          <p className="pt-6 px-8 lg:px-0 lg:pt-8 lg:w-2/3">
            When working on digitizing Næstved Provsti, we had a target audience
            of teenagers to young adults. Therefore to meet the expectation of
            the young, we wanted to create a modern website and new image for
            the church. <br /> <br />
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProvstiProject;
