import React from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Logos from "./components/logos";
import MissionSection from "./components/MissionSection";
import RunningText from "./components/RunningText";

const HomeLayout = () => {
  return (
    <>
      <Header />

      <IntroSection />
      <Logos />
      <MissionSection />
      <RunningText />
    </>
  );
};

export default HomeLayout;
