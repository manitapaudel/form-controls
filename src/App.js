import { Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import BasicForm from "./pages/BasicForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/basic-form" element={<BasicForm />} />
      </Routes>
    </div>
  );
}

export default App;
