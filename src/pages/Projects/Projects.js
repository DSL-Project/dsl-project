import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "GeckoSpy",
      subtitle:
        "Pegasus Spyware Used against Thailand’s Pro-Democracy Movement",
      about:
        "Digital technologies are transforming civil society and democracy. Our dependencies on digital systems require new insights into how these technologies work and how civil society can engage them safely, equitably, purposefully, and in support of human dignity and collective action.",
      url: "http://www.digitalsocietylab.org/",
      status: "complete",
      date: "2020 - Present",
      tags: ["security", "politics", "hacking", "privacy"],
    },
    {
      title: "Bada Bing, Bada Boom",
      subtitle:
        "Microsoft Bing’s Chinese Political Censorship of Autosuggestions in North America",
      about:
        "Digital technologies are transforming civil society and democracy. Our dependencies on digital systems require new insights into how these technologies work and how civil society can engage them safely, equitably, purposefully, and in support of human dignity and collective action.",
      url: "http://www.digitalsocietylab.org/",
      status: "active",
      date: "2020 - Present",
      tags: ["security", "politics", "hacking"],
    },
  ];
  return (
    <div>
      {/* banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>Projects</h1>
          <p>
            This is a very insightful page about the exciting projects happening
            at the Digital Society Lab.
          </p>
        </div>
      </section>

      {/* rendering projects */}
      <article className="projects-list wrapper">
        {projects.map((project, id) => {
          const { title, subtitle, about, url, status, date, tags } = project;

          return (
            <a className="project-link" href={url} key={id}>
              <article className="project-card">
                <h2 className="project-card-heading">{title}</h2>
                <h3 className="project-card-subheading">{subtitle}</h3>
                <p className="project-card-intro">{about}</p>
                <div className="project-card-metadata">
                  <div className="status">
                    <div className="current-status">
                      {/* active-complete pargraph */}
                      <p className="status-label">{`${
                        status === "complete" ? "complete" : "active"
                      }`}</p>

                      {/* rendering svg */}
                      <div className="status-icon">
                        {/* insert dynamic svgs here */}
                        {status !== "complete" ? (
                          <div className="flashing">
                            <div className="snippet" data-title="dot-flashing">
                              <div className="stage">
                                <div className="dot-flashing"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="singleDot"></div>
                        )}
                      </div>
                    </div>

                    {/* rendering date */}
                    <div className="timeline">{date}</div>
                  </div>

                  {/* rendering tags */}
                  <ul className="categories">
                    <li>#</li>
                    {tags.map((tag, id) => {
                      return (
                        <li className="category" key={id}>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </a>
          );
        })}
      </article>
    </div>
  );
};

export default Projects;
