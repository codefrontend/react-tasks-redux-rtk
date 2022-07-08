import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import List from "./pages/List";
// import TaskEdit from "./pages/TaskEdit";

function App() {
  return (
    <div className="site text-slate-400">
      <div className="md:container">
        <div className="w-3/6 mx-auto py-8">
          <Router>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/lista" element={<List />} />
              <Route path="/edit/:id" element={<TaskEdit />} /> */}
              <Route path="/" element={<List />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
