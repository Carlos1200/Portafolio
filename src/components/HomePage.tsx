import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "../styles/effects.css";

const parallaxStyles: React.CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: "-1",
  filter: "brightness(0.5)",
};

const parallaxContentStyles: React.CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: "100%",
  height: "90vh",
  textAlign: "center",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  textShadow: "0 0 10px #000",
  zIndex: "1",
};

const subTitleStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: "#4ad7d1",
};

export const HomePage = () => {
  return (
    <div>
      <div style={parallaxStyles}>
        <StaticImage src="../images/paralax.jpg" alt="paralax" />
      </div>
      <div style={parallaxContentStyles}>
        <div>
          <p style={subTitleStyles}>Hello, World.</p>
          <h1>I'm Carlos Herrera</h1>
          <p style={{ display: "grid", placeItems: "center" }}>
            <span className="typingBlink">Web developer</span>
          </p>
        </div>
      </div>
    </div>
  );
};
