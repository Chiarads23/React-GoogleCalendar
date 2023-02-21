import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import EventModal from "./components/EventModal";

import { getMonth } from "./utils";

import GlobalContext from "./context/GlobalContext";

import React, { useState, useEffect, useContext } from "react";



function App() {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
  const { monthIndex, showEvModal } = useContext(GlobalContext);

  useEffect(() => setCurrentMonth(getMonth(monthIndex)), [monthIndex]);


  return (
    //invisible parent
    <React.Fragment>
      {showEvModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
