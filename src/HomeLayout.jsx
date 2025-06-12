import React from "react";
import Header from "./components/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold">Welcome to TruePeak</h1>
      <p className="mt-4 text-lg">
        Your one-stop solution for all your audio needs.
      </p>
    </div>
  );
};

export default HomeLayout;
