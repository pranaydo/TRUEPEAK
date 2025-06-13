import React from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Logos from "./components/logos";
import MissionSection from "./components/MissionSection";

const HomeLayout = () => {
  return (
    <>
      <Header />

      <IntroSection />
      <Logos />
      <MissionSection />
    </>
  );
};

export default HomeLayout;
