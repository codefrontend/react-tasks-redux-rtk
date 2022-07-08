import { useDispatch } from "react-redux";
import { completedTask } from "../features/slices/taskSlice";
import { Link } from "react-router-dom";

import { MdModeEdit } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ToDoList = ({ id, title, complete }) => {
  const dispatch = useDispatch();

  const handleComplete = (e) => {
    dispatch(
      completedTask({
        id: id,
        type: "complete",
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
        <div
          className="task item-list flex justify-between cursor-pointer transition drop-shadow"
          onClick={handleComplete}
        >
          LISTA 1
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToDoList;
