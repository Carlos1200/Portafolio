import * as React from "react";
import { Topbar } from "../components/Topbar";
import { HomePage } from "../components/HomePage";
import { Skills } from "../components/Skills";
import "../styles/normalize.css";
import "../styles/index.css";
import { graphql } from "gatsby";
import { Profile } from "../components/Profile";
import { ImageDataLike } from "gatsby-plugin-image";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";

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
    allDatoCmsProyecto: {
      nodes: [
        {
          titulo: string;
          homepage: string;
          informacion: string;
        }
      ];
    };
    allDatoCmsTrabajo: {
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
    };
  };
}

// markup
const IndexPage = ({ data }: Props) => {
  const refProject = React.useRef<null | HTMLDivElement>(null);
  const refContact = React.useRef<null | HTMLDivElement>(null);

  const onClickProject = () =>
    refProject.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  return (
    <main className="pageStyles">
      <title>Portafolio</title>
      <div>
        <Topbar onClickProject={onClickProject} />
        <HomePage />
        <Profile
          image={data.datoCmsPerfil.fotoDePerfil}
          info={data.datoCmsDescripcion.sobremi}
        />
        <Skills allDatoCmsHabilidad={data.allDatoCmsHabilidad} />
        <Projects
          projects={data.allDatoCmsProyecto.nodes}
          refProject={refProject}
        />
        <Experience nodes={data.allDatoCmsTrabajo.nodes} />
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
    allDatoCmsProyecto {
      nodes {
        titulo
        homepage
        informacion
      }
    }
    allDatoCmsTrabajo {
      nodes {
        titulo
        rol
        lugar
        inicio
        final
        descripcion
      }
    }
  }
`;
