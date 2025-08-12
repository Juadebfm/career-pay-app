import React from "react";
import HeroHome from "../components/HeroHome";
import Manage from "../components/Manage";
import Catch from "../components/Catch";
import Results from "../components/Results";
import OurPartners from "../components/OurPartners";
import Help from "../components/Help";

const Home = () => {
  return (
    <section>
      <HeroHome />
      <Manage />
      <Catch />
      <Results />
      <OurPartners />
      <Help />
    </section>
  );
};

export default Home;
