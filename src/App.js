import { Routes, Route } from "react-router-dom";
import BasicForm from "./pages/BasicForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/basic-form" element={<BasicForm />} />
      </Routes>
    </div>
  );
}

export default App;
