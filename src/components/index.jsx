import React from "react";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Review from "./Reviews";
import Contact from "./Contact";

const index = () => {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Menu />
      <Gallery />
      <Review />
      <Contact />
    </div>
  );
};

export default index;
