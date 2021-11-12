import * as React from "react";

//components
import Navigation from "../components/Navigation";
import GenskabProject from "../components/GenskabProject";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Genskab</title>
        <Navigation />
        <GenskabProject />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
