import React from "react";
import Header from "./Header";
import Home from "./Policy/Home";
import About from "./Policy/About";
import Contact from "./Policy/Contact";
import PolicyData from "./Policy/PolicyData";

const Policy = () => {
  return (
    <div className="about_policy">
      <header
        className="sticky top-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgb(240, 163, 191), rgb(168, 110, 212))",
        }}
      >
        <Header />
      </header>
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="policy">
          <div className="flex justify-center"><PolicyData /></div>
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Policy;
