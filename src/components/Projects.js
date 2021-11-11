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
      <ScrollContainer className="carousel">
        <Link draggable="false" to="/NaestvedProvsti">
          <div className="carouselItem case1">
            <h2>Næstved Provsti</h2>
          </div>
        </Link>
        <Link draggable="false" to="/item2">
          <div className="carouselItem case2">
            <h2>Tension Therapy</h2>
          </div>
        </Link>
        <Link draggable="false" to="/item3">
          <div className="carouselItem case3">
            <h2>Case 3</h2>
          </div>
        </Link>
        <Link draggable="false" to="/item4">
          <div className="carouselItem case4">
            <h2>Case 4</h2>
          </div>
        </Link>
        <Link draggable="false" to="/item5">
          <div className="carouselItem case5">
            <h2>Case 5</h2>
          </div>
        </Link>
      </ScrollContainer>
    </div>
  );
}

export default Projects;
