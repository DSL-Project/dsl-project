//import useContentful from "../../hooks/useContenful";
//import PublicationCard from "../Publications/PublicationCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Publications = () => {
  return (
    <>
      <Header />

      {/* This is the Publications Banner section 
      //TODO: 1. will use a generic style format as all pages have this section; consider where to put wrapper
      */}
      <div>
        <h2>Publications</h2>
        <p>
          Section description faculty members in our department are actively
          exploring the implications of digital technology for both democratic
          and authoritarian regimes, as well as its transformative role in
          global governance.
        </p>
      </div>

      {/* This section will be dynamically rendered from CMS
       //TODO: may need to abstract the content below to a child component i.e. PublicationCard
       */}
      <div>
        <div>
          {/*
          //TODO: h3 (year) from: CMS - Publications (content model) - date (field)
           */}
          <h3>2023</h3>

          <div>
            {/* 
          //TODO: 1. h4 from CMS - Publications - publicationType
          //TODO: 2. anchor from CMS - Publications - url
          //TODO: 3. paragraph from CMS - Publications - title
          
          */}
            <h4>JOURNAL ARTICLE</h4>
            <a href="http://trybut.fail/dsl/publications/id:w848b1qb">🔗</a>
            <p>
              Conflicting Nationalisms: The Voice of the Subaltern in Mahasweta
              Devi's Bashai Tudu, by Alaknada Bagchi.
            </p>
            <div>
              <h5>Lab Author(s)</h5>
              {/* //TODO: author name from: CMS - Publications - authors which is linked to Persons (content model)
               */}
              <p>Clifton van der Linden</p>
            </div>
            <h5>Featured Projects(s)</h5>

            {/* 
            //TODO: project(s) from: CMS - Publications - projects which is linked to Projects (content model)
            */}
            <ol>
              <li>
                <a href="http://trybut.fail/dsl/research/project-one">
                  Bada Bing, Bada Boom: Microsoft Bing's Chinese Political
                  Censorship of Au...
                </a>
              </li>
              <li>
                <a href="http://trybut.fail/dsl/research/project-two">
                  GeckoSpy: Pegasus Spyware Used against Thailand's
                  Pro-Democracy Mov...
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <h3>1994</h3>
        <div>
          <div>
            <h4>POPULAR PRESS</h4>
            <a href="http://trybut.fail/dsl/publications/id:r3p7c8zp">🔗</a>
          </div>
          <div>
            <h5>Lab Author(s)</h5>
            <p>
              <span>Joshua Apostpolooulos</span>
              <span>Vass Bednar</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Publications;
