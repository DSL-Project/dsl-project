import { Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Footer from "../Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Digital Society Lab</h1>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
