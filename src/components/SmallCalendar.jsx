import { getMonth } from "../utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import React from "react";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

function SmallCalendar() {
  //local state
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);
  function handlePrevMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
  }

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slctDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-googlebl text-gray-50 rounded-full";
    } else if (currDay === slctDay){
        return 'bg-yellow rounded-full text-[#2463eb] font-bold'
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between items-center">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 mx-2 hover:text-googlebl">
              <FaAngleLeft />
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-gray-600 mx-2 hover:text-googlebl">
              <FaAngleRight />
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span
            key={i}
            className="text-sm font-bold text-googlegrn py-1 text-center"
          >
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i, ì) => (
          <React.Fragment key={i}>
            {row.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setDaySelected(day)
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallCalendar;
