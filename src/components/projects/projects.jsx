import React, { Fragment, useEffect } from "react";
import { StyledLHead, StyledSpinner } from "../../shared/ui/components";
import { StyledProjects } from "./components";
import ProjectItem from "./project-item";
import { connect } from "react-redux";
import { getAllProjects } from "../../store/actions/projects-actions";

const Projects = ({ getAllProjects, data: { projects } }) => {
  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line
  }, []);

  if (projects === null) {
    return <StyledSpinner>Loading...</StyledSpinner>;
  }

  return (
    <Fragment>
      <StyledLHead id="Projects">Projects</StyledLHead>
      <StyledProjects>
        {projects.map(({ name, img_url, live_url, github_url, id, link }) => {
          return (
            <ProjectItem
              title={name}
              img={img_url}
              key={id}
              webLink={live_url}
              gitLink={github_url}
              link={"/projects/" + link}
              id="top"
            />
          );
        })}
      </StyledProjects>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getAllProjects }
)(Projects);
