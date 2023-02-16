import { MdDragHandle, MdSchedule, MdSegment } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { IoIosColorPalette } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClasses = [
  "bg-pink-500",
  "bg-indigo-500",
  "bg-yellow",
  "bg-googlegrn",
  "bg-blue-500",
  "bg-red",
];

function EventModal() {
  const { setShowEvModal, daySelected, selectedEv, dispatchCalendEv } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEv ? selectedEv.title : "");
  const [descr, setDescr] = useState(selectedEv ? selectedEv.descr : "");
  const [selectedLbl, setSelectedLbl] = useState(
    selectedEv
      ? labelsClasses.find((lbl) => lbl === selectedEv.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEv = {
      title,
      descr,
      label: selectedLbl,
      day: daySelected.valueOf(),
      id: selectedEv ? selectedEv.id : Date.now(),
    };
    if (selectedEv) {
      dispatchCalendEv({ type: "update", payload: calendarEv });
    } else {
      dispatchCalendEv({ type: "push", payload: calendarEv });
    }

    setShowEvModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-xl shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <MdDragHandle />
          </span>
          <div className="flex">
            {selectedEv && (
              <span
                onClick={() => {
                  dispatchCalendEv({ type: "delete", payload: selectedEv });
                  setShowEvModal(false);
                }}
                className="text-gray-400 cursor-pointer"
              >
                <AiOutlineDelete />
              </span>
            )}
            <button onClick={() => setShowEvModal(false)}>
              <span className="text-gray-400">
                <GrFormClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue"
              type="text"
              name="title"
              placeholder="Add event title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="text-googlegrn">
              <MdSchedule />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="text-googlegrn">
              <MdSegment />
            </span>
            <input
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-googlebl"
              type="text"
              name="description"
              placeholder="Add a description"
              value={descr}
              required
              onChange={(e) => setDescr(e.target.value)}
            />
            <span className="text-googlegrn">
              <IoIosColorPalette />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLbl(lblClass)}
                  className={`${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLbl === lblClass && (
                    <span className="text-white text-sm">
                      <BsCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 px-6 py-2 rounded-xl text-white shadow-xl hover:shadow-md active:shadow-inner hover:bg-blue-600 "
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
