import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";

interface Props {
  image: ImageDataLike;
  info: string;
}

export const Profile = ({ image, info }: Props) => {
  const imageGatsby = getImage(image) || ({} as IGatsbyImageData);
  return (
    <section className="contentStyles">
      <div>
        <h2 className="titleStyles">Profile</h2>
        <div className="centerObject">
          <div className="cardStyle centerObject">
            <div className="border-color centerObject">
              <GatsbyImage
                image={imageGatsby}
                className="imageCardStyles"
                alt="Perfil"
              />
            </div>
            <div>
              <p className="name">Carlos Herrera</p>
              <p>El Salvador, San Salvador</p>
            </div>
            <div className="links">
              <a href="https://github.com/Carlos1200" className="aLink">
                <StaticImage
                  className="icon"
                  src="../images/github.svg"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos1200herrera/"
                className="aLink"
              >
                <StaticImage
                  className="icon"
                  src="../images/linkin.svg"
                  alt="Link-In"
                />
              </a>
            </div>
            <div className="about_me">
              <p>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
