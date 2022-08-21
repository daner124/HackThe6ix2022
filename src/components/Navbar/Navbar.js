import React from 'react';
import { useState } from 'react'

const Navbar = ({setPageDisplayed}) => {

  const [activeClass, setActiveClass] = useState("dailyNavElem")

  function navbarClickFunc(navElem) {
    setActiveClass(navElem)
    setPageDisplayed(navElem)
  }

  return (
    <>
      <div id="myTopnav" className="topnav">
        {/* <a id="homeNavElem" className={activeClass==="homeNavElem" ? "activeNav" : null} href="#home" onClick={() => navbarClickFunc("homeNavElem")}>Home</a> */}
        <a id="dailyNavElem" className={activeClass==="dailyNavElem" ? "activeNav" : null} href="#dailyCheckUp" onClick={() => navbarClickFunc("dailyNavElem")}>Daily Check Up</a>
        <a id="friendsNavElem" className={activeClass==="friendsNavElem" ? "activeNav" : null} href="#friends" onClick={() => navbarClickFunc("friendsNavElem")}>Friends</a>
        <a id="insightsNavElem" className={activeClass==="insightsNavElem" ? "activeNav" : null} href="#insights" onClick={() => navbarClickFunc("insightsNavElem")}>Insights</a>
      </div>
    </>
  );
};

export default Navbar;
