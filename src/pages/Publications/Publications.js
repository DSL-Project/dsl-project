//import React, { useEffect, useState, useMemo } from "react";
//import useContentful from "../../hooks/useContenful";
//import PublicationCard from "../Publications/PublicationCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Publications = () => {
  // const [publications, setPublications] = useState([]);
  // const { getPublications } = useContentful();
  // const memorizedGetPublications = useMemo(() => {
  //   return getPublications();
  // }, []);

  // useEffect(() => {
  //   memorizedGetPublications.then(
  //     (response) => response && setPublications(response)
  //   );
  // }, []);
  return (
    <>
      <Header />
      <h2>Publications</h2>

      {/* {publications.map((publication, index) => (
        <PublicationCard key={index} publication={publication} />
      ))}  */}
      <Footer />
    </>
  );
};

export default Publications;
