import React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";

interface Props {
  image: ImageDataLike;
  refContact: React.Ref<HTMLDivElement>;
}

export const Contact = ({ image, refContact }: Props) => {
  const imageGatsby = getImage(image) || ({} as IGatsbyImageData);
  return (
    <section className="contentStyles" ref={refContact}>
      <h2 className="titleStyles">Contact</h2>
      <div className="centerObject">
        <div className="cardStyle marginContact">
          <div className="centerObject">
            <div className="border-color centerObject">
              <GatsbyImage
                image={imageGatsby}
                className="imageCardStyles"
                alt="Perfil"
              />
            </div>
          </div>
          <div>
            <p className="name">Carlos Herrera</p>
            <p>carlos1200herrera@gmail.com</p>
            <a className="mailLink" href="mailto:carlos1200herrera@gmail.com">
              Send me an email to be in touch
            </a>
          </div>
          <div className="centerObject">
            <nav className="links">
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
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
