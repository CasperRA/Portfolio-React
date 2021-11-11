import * as React from "react";

//components
import Hero from "../components/Hero";
import About from "../components/About";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Home Page</title>
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default IndexPage;
