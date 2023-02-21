import logo from "../assets/logo.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

function Header() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button
        onClick={handleReset}
        className="border rounded-xl py-2 px-4 mr-5 font-bold text-gray-600 shadow-xl hover:text-googlebl active:shadow-inner"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className=" cursor-pointer text-gray-600 mx-2 ">
          <FaAngleLeft className="hover:text-googlebl" />
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className=" cursor-pointer text-gray-600 mx-2 ">
          <FaAngleRight className="hover:text-googlebl"/>
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default Header;
