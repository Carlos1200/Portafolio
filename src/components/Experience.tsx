import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Chrono } from "react-chrono";

interface Props {
  nodes: [
    {
      titulo: string;
      rol: string;
      lugar: string;
      inicio: number;
      final: number;
      descripcion: string;
    }
  ];
}

export const Experience = ({ nodes }: Props) => {
  const trabajos = nodes.map((n, i) => {
    if (i % 2 === 0) {
      const t = {
        title: `${n.inicio} - ${n.final}`,
        cardTitle: `${n.titulo} (${n.rol})`,
        cardSubtitle: n.lugar,
        cardDetailedText: n.descripcion,
      };
      return t;
    } else {
      return {};
    }
  });

  return (
    <section className="contentStyles">
      <div className="centerObject">
        <h2 className="titleStyles">Experience</h2>
      </div>
      <div className="centerObject iconPosicionExp">
        <div className="iconCircle">
          <StaticImage
            src="../images/fork.svg"
            alt="Fork"
            className="iconExperience"
          />
        </div>
      </div>
      <Chrono
        items={trabajos}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        theme={{
          cardBgColor: "#191B1C",
          cardForeColor: "#fff",
          primary: "#4ad7d1",
          secondary: "#222426",
          titleColor: "#fff",
        }}
      />
    </section>
  );
};
