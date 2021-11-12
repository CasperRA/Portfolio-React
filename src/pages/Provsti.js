import * as React from "react";

//components
import Navigation from "../components/Navigation";
import ProvstiProject from "../components/ProvstiProject";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Næstved Provsti</title>
        <Navigation />
        <ProvstiProject />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
