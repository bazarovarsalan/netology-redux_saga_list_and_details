import "./App.css";
import { Routes, Route } from "react-router";
import ServiceList from "./components/ServiceList";
import ServiceByID from "./components/ServiceByID";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/:id/details" element={<ServiceByID />} />
      </Routes>
    </div>
  );
}

export default App;
