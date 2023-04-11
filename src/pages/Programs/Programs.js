import React, { useEffect } from "react";
import { useGlobalContext } from "../../appContext";
import Banner from "../../components/Banner/Banner";
import { PROGRAMS } from "../../appConstants";
import LoadingState from "../../components/LoadingState/LoadingState";

const Programs = () => {
  const { programsBody, programsTitle, response, setQuery, isLoading } =
    useGlobalContext();

  useEffect(() => {
    window.addEventListener("beforeunload", setQuery(PROGRAMS));
    return () => {
      window.removeEventListener("beforeunload", setQuery(PROGRAMS));
    };
  }, [setQuery]);

  if (isLoading) {
    return <LoadingState />;
  }
  if (response === undefined || response.length < 1) {
    return <Banner title={programsTitle} info={programsBody} />;
  }

  return (
    <div className="programs">
      <Banner title={programsTitle} info={programsBody} />

      {response.map((program, id) => {
        const { title, description, leadToUrl, url } = program;

        return (
          <div key={id} className="programs-border">
            <div className="programs-wrapper wrapper">
              <div key={id} className="programs-container">
                <h2 className="programs-title">{title}</h2>
                <p className="regular-16 programs-description">{description}</p>
                <p className="bold-16 programs-link">
                  {leadToUrl}&nbsp;
                  <a className="programs-anchor" href={url}>
                    {url !== undefined && url.slice(8)}
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Programs;
