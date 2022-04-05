import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

//Styles
const topBarStyles: React.CSSProperties = {
  backgroundColor: "#232129",
  color: "#F4EDE8",
  padding: "16px",
  margin: "0",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "1",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
};
const topBarTitleStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginRight: "1rem",
  marginLeft: "1rem",
  padding: "0",
  textDecoration: "none",
  color: "#F4EDE8",
};

const topBarDivStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
};

const imageStyles: React.CSSProperties = {
  width: "6rem",
  height: "6rem",
  objectFit: "cover",
  borderRadius: "50%",
  marginTop: "0.5rem",
};

const buttonContainerStyles: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "row",
  marginTop: "0.5rem",
  justifyContent: "center",
};

const iconStyles: React.CSSProperties | undefined = {
  width: "2.5rem",
  height: "2.5rem",
  objectFit: "cover",
};

const linkStyles: React.CSSProperties | undefined = {
  textAlign: "center",
  textDecoration: "none",
  color: "#F4EDE8",
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginTop: "0.5rem",
};

export const Topbar = () => {
  return (
    <div style={topBarStyles}>
      <div style={topBarDivStyles}>
        <nav>
          <a style={topBarTitleStyles} href="">
            Portfolio
          </a>
          <a style={topBarTitleStyles} href="">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
