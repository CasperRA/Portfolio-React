import * as React from "react";

//components
import Navigation from "../components/Navigation";
import NordvestProject from "../components/NordvestProject";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <div>
        <title>Nordvest Ølbar</title>
        <Navigation />
        <NordvestProject />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
