import { Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Footer from "../Footer";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
