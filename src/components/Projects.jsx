import React from "react";
import { ProjectBankground, ProjectContainer } from "./Project";
import { TileBackground, TileContent, TileTitle, TileWrapper } from "./tile";
const Projects = () => (
  <TileWrapper numofPage={3}>
    <TileBackground>
      <ProjectBankground />
    </TileBackground>
    <TileContent>
      <TileTitle
        page={0}
        renderContent={({ process }) => (
          <ProjectContainer>
            <span className="text-9xl">Firest {process}</span>
          </ProjectContainer>
        )}
      />
    </TileContent>
    <TileContent>
      {" "}
      <TileTitle
        page={1}
        renderContent={({ process }) => (
          <ProjectContainer>
            <span className="text-9xl">Firest {process}</span>
          </ProjectContainer>
        )}
      />
    </TileContent>
    <TileContent>
      {" "}
      <TileTitle
        page={2}
        renderContent={({ process }) => (
          <ProjectContainer>
            <span className="text-9xl">Firest {process}</span>
          </ProjectContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Projects;
