import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledLHead, StyledSpinner } from "../../shared/ui/components";
import { StyledProjects } from "./components";
import ProjectItem from "./project-item";
import { getAllProjects } from "../../store/actions/projects-actions";

// eslint-disable-next-line no-shadow
const Projects = ({ getAllProjects, data: { projects } }) => {
  useEffect(() => {
    getAllProjects();
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

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getAllProjects })(Projects);
