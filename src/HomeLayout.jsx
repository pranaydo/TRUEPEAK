import React from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Logos from "./components/logos";
import MissionSection from "./components/MissionSection";
import RunningText from "./components/RunningText";
import ScienceBehindServices from "./components/ScienceBehindServices";
import Footer from "./components/Footer";
import Videosection from "./components/Videosection";
import TransformNow from "./components/TransformNow";
import TestimonialShowcase from "./components/Testimonial";
import GSAPCardStack from "./components/SolutionsWithPurpose.jsx";

const HomeLayout = () => {
  // const cardsData = [
  //   { id: 1, content: <p>Card 1</p> },
  //   { id: 2, content: <p>Card 2</p> },
  //   { id: 3, content: <p>Card 3</p> },
  //   { id: 4, content: <p>Card 4</p> },
  //   { id: 5, content: <p>Card 5</p> },
  // ];

  return (
    <>
      <Header />
      <IntroSection />
      <Logos />
      <MissionSection />
      <RunningText />
      <GSAPCardStack />
      <ScienceBehindServices />
      <TestimonialShowcase />
      <Videosection />
      <TransformNow />
      <Footer />
    </>
  );
};

export default HomeLayout;
