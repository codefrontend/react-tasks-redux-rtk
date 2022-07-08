import { useSelector } from "react-redux";
import ToDoList from "./ToDoList";
import EmptyList from "./EmptyList";

const ToDo = () => {
  const tasks = useSelector((state) => state.tasks.taskItems);
  const tasksToDo = tasks.filter((task) => task.completed === false);

  return (
    <div>
      <h2 className="title-c">TO DO</h2>
      <div>
        {tasksToDo.length === 0 ? (
          <EmptyList text="All tasks completed" />
        ) : (
          tasksToDo.map((task) => {
            return <ToDoList key={task.id} {...task} />;
          })
        )}
      </div>
    </div>
  );
};

export default ToDo;
