import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./HomeLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeLayout />
    </>
  );
}

export default App;
