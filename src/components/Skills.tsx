import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";
import { ProgressBar } from "./ProgressBar";

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
    <section className="marginTop">
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
                  <div key={index}>
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
                      <ProgressBar porcentaje={habilidad.porcentaje} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="contentStyles">
        <div className="centerObject">
          <div className="cardSkill">
            <div className="centerObject iconPosicion">
              <div className="iconContainer">
                <StaticImage
                  src="../images/contact.svg"
                  alt="contact"
                  className="iconCode"
                />
              </div>
            </div>
            <p className="textCenter titleSkill">Personal</p>
            <div className="skillsSection">
              <div>
                <p className="textCenter">Creativity</p>
                <ProgressBar porcentaje={60} />
              </div>
              <div>
                <p className="textCenter">TeamWork</p>
                <ProgressBar porcentaje={70} />
              </div>
              <div>
                <p className="textCenter">Communication</p>
                <ProgressBar porcentaje={70} />
              </div>
              <div>
                <p className="textCenter">Dedication</p>
                <ProgressBar porcentaje={75} />
              </div>
              <div>
                <p className="textCenter">Autodidact</p>
                <ProgressBar porcentaje={75} />
              </div>
              <div>
                <p className="textCenter">Leadership</p>
                <ProgressBar porcentaje={70} />
              </div>
              <div>
                <p className="textCenter">English</p>
                <ProgressBar porcentaje={65} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
