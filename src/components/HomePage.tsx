import { StaticImage } from "gatsby-plugin-image";
import Typewriter from "typewriter-effect";
import React from "react";

export const HomePage = () => {
  return (
    <div>
      <div className="parallaxStyles">
        <StaticImage src="../images/paralax.jpg" alt="paralax" />
      </div>
      <div className="parallaxContentStyles">
        <div>
          <p className="subTitleStyles">Hello, World.</p>
          <h1>I'm Carlos Herrera</h1>
          <p className="textCenter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Backend Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
