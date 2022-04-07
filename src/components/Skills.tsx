import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";

interface Props {
  allDatoCmsHabilidad: {
    nodes: [
      {
        habilidad: string;
        porcentaje: number;
        logo: ImageDataLike;
      }
    ];
  };
}

export const Skills = ({ allDatoCmsHabilidad }: Props) => {
  //delete duplicate nodes
  const nodes = allDatoCmsHabilidad.nodes.filter((n, i) => {
    if (i % 2 === 0) {
      return n;
    }
  });

  return (
    <div className="contentStyles">
      <div className="centerObject">
        <h2 className="titleStyles">Skills</h2>
        <div className="cardSkill">
          <div className="centerObject iconPosicion">
            <div className="iconContainer">
              <StaticImage
                src="../images/code.svg"
                alt="Code"
                className="iconCode"
              />
            </div>
          </div>
          <p className="textCenter titleSkill">Professional</p>
          <div className="skillsSection">
            {nodes.map((habilidad, index) => {
              const imageGatsby =
                getImage(habilidad.logo) || ({} as IGatsbyImageData);
              return (
                <div key={index} className="skillsContainer">
                  <div className="skills">
                    <div className="centerObject">
                      <div className="logoContainer">
                        <GatsbyImage
                          image={imageGatsby}
                          className="logoImage"
                          alt="Perfil"
                        />
                      </div>
                    </div>
                    <p className="textCenter">{habilidad.habilidad}</p>
                    <div className="progressBar">
                      <div
                        className="progressBarCircle"
                        style={{ marginLeft: `${habilidad.porcentaje - 5}%` }}
                      />
                      <div
                        className="progress"
                        style={{ width: `${habilidad.porcentaje}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
