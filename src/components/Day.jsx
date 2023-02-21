import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIndex }) {
  const [dayEvents, setDayEvents] = useState([]);

  const { setDaySelected, 
          setShowEvModal, 
          savedEv, 
          setSelectedEv } =
    useContext(GlobalContext);
 
    useEffect(() => {
    const events = savedEv.filter(
      (e) => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEv, day]);


  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-googlebl text-gray-50 rounded-full w-7"
      : "text-gray-600";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1 font-bold text-googlegrn">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEvModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEv(evt)}
            className={`${evt.label} p-1 mr-3 text-white text-sm font-medium rounded-xl mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
