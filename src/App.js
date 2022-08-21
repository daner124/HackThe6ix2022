import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react'
// import HomePage from './components/HomePage/HomePage';
import DailyCheckUp from './components/DailyCheckUp/DailyCheckUp';
import Friends from './components/Friends/Friends';
import Insights from './components/Insights/Insights';

function App() {

  const [pageDisplayed, setPageDisplayed] = useState("dailyNavElem")

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setPageDisplayed={setPageDisplayed}></Navbar>
      </header>

      {/* {(pageDisplayed === "homeNavElem") ? <HomePage /> : null} */}
      {(pageDisplayed === "dailyNavElem") ? <DailyCheckUp /> : null}
      {(pageDisplayed === "friendsNavElem") ? <Friends /> : null}
      {(pageDisplayed === "insightsNavElem") ? <Insights /> : null}
    </div>
  );
}

export default App;
