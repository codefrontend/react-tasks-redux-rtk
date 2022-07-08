import { useDispatch } from "react-redux";
import { deleteTask, completedTask } from "../features/slices/taskSlice";
import { MdDelete, MdOutlineNorth } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";

const CompletedList = ({ id, title, complete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  const handleRestore = () => {
    dispatch(
      completedTask({
        id: id,
        type: "restore",
      })
    );
  };

  const animations = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -30, opacity: 0 },
    transition: { type: "tween", stiffness: 1000, damping: 500 },
  };

  return (
    <AnimatePresence>
      <motion.div {...animations} layout>
        <div className="item-list task-completed flex justify-between items-center ">
          <h3>
            <span className="text-gray-500 line-through">{title}</span>
          </h3>
          <div className="flex">
            <button
              onClick={handleRestore}
              className="px-2 py-1 mr-2 bg-green-600/50 hover:bg-green-600 transition duration-300 text-white rounded-md"
            >
              <MdOutlineNorth size={"1.15em"} />
            </button>
            <button
              onClick={handleDelete}
              className="px-2 py-1 bg-rose-700/50 hover:bg-rose-700 transition duration-300 text-white rounded-md"
            >
              <MdDelete size={"1.15em"} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompletedList;
