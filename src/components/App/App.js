import { Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Footer from "../Footer";
import "./App.css";

// testing initial commit and add front-end branch
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
