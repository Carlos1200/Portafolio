import * as React from "react";
import { Topbar } from "../components/Topbar";
import { HomePage } from "../components/HomePage";
import { Skills } from "../components/Skills";
import "../styles/normalize.css";
import "../styles/index.css";
import { graphql } from "gatsby";
import { Profile } from "../components/Profile";
import { ImageDataLike } from "gatsby-plugin-image";

interface Props {
  data: {
    datoCmsPerfil: {
      fotoDePerfil: ImageDataLike;
    };
    datoCmsDescripcion: {
      sobremi: string;
    };
    allDatoCmsHabilidad: {
      nodes: [
        {
          habilidad: string;
          porcentaje: number;
          logo: ImageDataLike;
        }
      ];
    };
  };
}

// markup
const IndexPage = ({ data }: Props) => {
  return (
    <main className="pageStyles">
      <title>Portafolio</title>
      <div>
        <Topbar />
        <HomePage />
        <Profile
          image={data.datoCmsPerfil.fotoDePerfil}
          info={data.datoCmsDescripcion.sobremi}
        />
        <Skills allDatoCmsHabilidad={data.allDatoCmsHabilidad} />
      </div>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    datoCmsPerfil {
      fotoDePerfil {
        gatsbyImageData(width: 150, placeholder: BLURRED)
      }
    }
    datoCmsDescripcion {
      sobremi
    }
    allDatoCmsHabilidad {
      nodes {
        habilidad
        porcentaje
        logo {
          gatsbyImageData(width: 100, placeholder: BLURRED)
        }
      }
    }
  }
`;
