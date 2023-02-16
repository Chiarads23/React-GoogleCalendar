import React from "react";

 const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEvModal: false,
    setShowEvModal: () => {},
    dispatchCalendEv: ({type, payload}) => {},
    savedEv: [],
    selectedEv: null,
    setSelectedEv: () => {},
    // labels: [],
    // setLabels: () => {}
})

export default GlobalContext;