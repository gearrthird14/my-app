import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import AboutPage from "./components/aboutPage/aboutPage";
import MainPage from "./components/mainPage/mainPage";
import Skills from "./components/skills/skills";
import TopNav from "./components/topNav/topNav";
import Contact from "./components/contact/Contact";

export interface GlobalState {
  isShow: boolean;
  setShow: Function;
  isActive: boolean | number;
  setIsActive: Function;
}

function App(isVisible: any) {
  const [isActive, setIsActive] = useState(0);
  const [isShow, setShow] = useState(false);

  const GlobalState = {
    isShow,
    setShow,
    isActive,
    setIsActive,
  } as GlobalState;

  return (
    <div>
      <TopNav {...GlobalState} />
      <MainPage />
      <AboutPage />
      <Skills {...GlobalState} />
      <Contact />
    </div>
  );
}

export default App;
