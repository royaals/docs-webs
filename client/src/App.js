import "./App.css";
import Edit from "./components/Edit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/docs/${uuid()}`} />} />
        <Route path="/docs/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
