import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="site text-slate-400">
      <div className="md:container">
        <div className="w-3/6 mx-auto py-8">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
