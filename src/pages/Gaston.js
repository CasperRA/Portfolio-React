import * as React from "react";

//components
import Navigation from "../components/Navigation";
import GastonProject from "../components/GastonProject";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Gaston Media</title>
        <Navigation />
        <GastonProject />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
