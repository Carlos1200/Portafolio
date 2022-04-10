import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  projects: [
    {
      titulo: string;
      homepage: string;
      informacion: string;
    }
  ];
  refProject: React.Ref<HTMLDivElement>;
}

export const Projects = ({ projects, refProject }: Props) => {
  const nodes = projects.filter((n, i) => {
    if (i % 2 === 0) {
      return n;
    }
  });
  return (
    <section className="contentStyles" ref={refProject}>
      <div className="centerObject">
        <h2 className="titleStyles">Portfolio</h2>
      </div>
      <div className="projectsSection">
        {nodes.map((project, index) => (
          <div key={index}>
            <div className="cardProject">
              <div className="centerObject">
                <h3 className="projectTitle">{project.titulo}</h3>
              </div>
              <div className="projectInfo">
                <p className="projectDescription">{project.informacion}</p>
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  <StaticImage
                    src="../images/link.svg"
                    alt="Link"
                    className="iconCode"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
