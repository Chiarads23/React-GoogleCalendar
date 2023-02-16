import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEvReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEvModal, setShowEvModal] = useState(false);
  const [selectedEv, setSelectedEv] = useState(null);
  // const [labels, setLabels] = useState([]);

  const [savedEv, dispatchCalendEv] = useReducer(
    savedEvReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEv));
  }, [savedEv]);

  // useEffect(() => {
  //   setLabels((prevLabels) => {
  //     return [...new Set(savedEv.map((ev) => ev.label))].map((label) => {
  //       const currentLabel = prevLabels.find((lbl) => lbl.label === label);
  //       return {
  //         label,
  //         checked: currentLabel ? currentLabel.checked : true,
  //       };
  //     });
  //   });
  // }, [savedEv]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(()=>{
if(!showEvModal) {
  setSelectedEv(null)
}
  }, [showEvModal])

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEvModal,
        setShowEvModal,
        dispatchCalendEv,
        savedEv,
        selectedEv,
        setSelectedEv,
        // labels,
        // setLabels
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
