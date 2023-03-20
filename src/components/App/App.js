import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Training from "../../pages/Training";
import Publications from "../../pages/Publications";
import People from "../../pages/People";
import Contact from "../../pages/Contact";
import Person from "../Person";
import Error from "../../pages/Error/Error";
import Footer from "../Footer";
import "../../App.scss";
import React from "react";
// testing initial commit and add front-end branch
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/training" element={<Training />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="/publications" element={<Publications />} />
        <Route exact path="/people/staff/:name" element={<Person />} />
        <Route exact path="/people/student/:name" element={<Person />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
