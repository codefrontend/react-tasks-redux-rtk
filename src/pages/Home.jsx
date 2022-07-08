import FormTask from "../components/TaskForm";
import ToDo from "../components/ToDo";
import Completed from "../components/Completed";

const Home = () => {
  return (
    <div>
      <h2 className="text-center text-white/50 text-4xl font-bold pb-8">
        TASKS
      </h2>
      <FormTask />
      <ToDo />
      <Completed />
    </div>
  );
};

export default Home;
