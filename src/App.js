import TopComponent from "./components/top";
import BottomComponent from "./components/bottom";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [group, setGroup] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [activeScroll, setActiveScroll] = useState(false);

  function handleOnWheel(event) {
    console.log("App.js", event.deltaY);
    !activeScroll && setDeltaY(event.deltaY);
    setActiveScroll(true);
    setTimeout(() => setActiveScroll(false), 500);
  }

  return (
    <div className="App" onWheel={(event) => handleOnWheel(event)}>
      <TopComponent props={{ group, setGroup, deltaY, setDeltaY }} />
      <BottomComponent props={{ group, setGroup, deltaY, setDeltaY }} />
    </div>
  );
}

export default App;
