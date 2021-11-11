import * as React from "react";

//components
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Home Page</title>
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
};

export default IndexPage;
