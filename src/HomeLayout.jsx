import React from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Logos from "./components/logos";
import MissionSection from "./components/MissionSection";
import RunningText from "./components/RunningText";
import SolutionsWithPurpose from "./components/SolutionsWithPurpose";
import ScienceBehindServices from "./components/ScienceBehindServices";
import Footer from "./components/Footer";
import Videosection from "./components/Videosection";
import TransformNow from "./components/TransformNow";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <Logos />
      <MissionSection />
      <RunningText />
      <SolutionsWithPurpose />
      <ScienceBehindServices />
      <Videosection />
      <TransformNow />
      <Footer />
    </>
  );
};

export default HomeLayout;
