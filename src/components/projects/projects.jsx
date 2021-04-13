import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledLHead, StyledSpinner } from "../../shared/ui/components";
import { StyledProjects } from "./components";
import ProjectItem from "./project-item";
import { getAllProjects } from "../../store/actions/projects-actions";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  if (projects === null) {
    return <StyledSpinner>Loading...</StyledSpinner>;
  }

  return (
    <>
      <StyledLHead id="Projects">Projects</StyledLHead>
      <StyledProjects>
        {projects.map(
          ({ name, thumbnail, live_url, github_url, id, link }, idx) => (
            <ProjectItem
              title={name}
              img={thumbnail}
              key={id}
              webLink={live_url}
              gitLink={github_url}
              link={`/projects/${link}`}
              id={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "top" : "right"}
            />
          )
        )}
      </StyledProjects>
    </>
  );
};

export default Projects;
