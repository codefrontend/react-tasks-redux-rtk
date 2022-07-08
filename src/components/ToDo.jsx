import { useSelector } from "react-redux";
import ToDoList from "./ToDoList";
import EmptyList from "./EmptyList";

const ToDo = () => {
  const tasks = useSelector((state) => state.tasks.taskItems);
  const tasksToDo = tasks.filter((task) => task.completed === false);

  return (
    <div>
      <h2 className="title-c">TO DO</h2>
      <div>TODO PE</div>
    </div>
  );
};

export default ToDo;
