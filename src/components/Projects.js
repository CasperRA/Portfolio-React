import React from "react";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <ScrollContainer className="scroll-container">
        <div>
          <h1>Nice</h1>
        </div>
        <div>
          <h1>Nice</h1>
        </div>
        <div>
          <h1>Nice</h1>
        </div>
      </ScrollContainer>
    </div>
  );
}

export default Projects;
