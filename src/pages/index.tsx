import * as React from "react";
import { Topbar } from "../components/Topbar";
import { HomePage } from "../components/HomePage";

// styles
const pageStyles: React.CSSProperties | undefined = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100%",
  height: "100%",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Portafolio</title>
      <div>
        <Topbar />
        <HomePage />
      </div>
    </main>
  );
};

export default IndexPage;
