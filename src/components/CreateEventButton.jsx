import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";

function CreateEventButton() {

  const { setShowEvModal } = useContext(GlobalContext);

  return (
    <div>
      <button
        onClick={() => setShowEvModal(true)}
        className="border p-2 rounded-full flex items-center shadow-xl hover:shadow-md active:shadow-inner">
        <FaPlus className="w-7 h-7 text-googlebl " />
        <span className="pl-3 pr-7 font-bold text-lightb"> Create</span>
      </button>
    </div>
  );
}

export default CreateEventButton;
