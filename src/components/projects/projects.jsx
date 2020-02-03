import React, { Fragment } from "react";
import { StyledLHead } from "../../shared/ui/components";
import portfolioClient from "../../img/projects/portfolio.png";
import contactKeeper from "../../img/projects/contact-keeper.png";
import githubFinder from "../../img/projects/github-finder.png";
import itLogger from "../../img/projects/it-logger.png";
import profikom from "../../img/projects/profikom.png";
import alexBlog from "../../img/projects/alex-blog.png";
import forkify from "../../img/projects/forkify.png";
import autods from "../../img/projects/autods.png";
import portfolioWp from "../../img/projects/portfolio-wp.png";
import { StyledProjects } from "./components";
import ProjectItem from "./project-item";

const Projects = () => {
  return (
    <Fragment>
      <StyledLHead id="Projects">Projects</StyledLHead>
      <StyledProjects>
        <ProjectItem
          title="Alex Blog"
          img={alexBlog}
          id="left"
          link="/projects/alex-blog"
          webLink="https://blog.agrib.pp.ua/"
          gitLink="https://github.com/samnite/alex-blog"
        />
        <ProjectItem
          title="AutoDS task"
          img={autods}
          id="top"
          link="/projects/autods"
          webLink="https://stupefied-williams-a3117e.netlify.com/"
          gitLink="https://github.com/samnite/autods-task"
        />
        <ProjectItem
          title="GitHub Finder"
          img={githubFinder}
          id="right"
          link="/projects/github-finder"
          webLink="https://github-finder-react-ts.netlify.com/"
          gitLink="https://github.com/samnite/ReactJS-GitHub-Finder-TypeScript"
        />
        <ProjectItem
          title="Portfolio-WP"
          img={portfolioWp}
          id="left"
          link="/projects/portfolio-wp"
          webLink="http://dev-john-doe-portfolio-theme.pantheonsite.io/"
          gitLink="https://github.com/samnite/css-html/tree/master/Portfolio"
        />
        <ProjectItem
          title="Portfolio (React)"
          img={portfolioClient}
          id="top"
          link="/projects/portfolio-client"
          webLink="https://agrib.pp.ua/"
          gitLink="https://github.com/samnite/portfolio-client"
        />
        <ProjectItem
          title="It Logger"
          img={itLogger}
          id="right"
          link="/projects/it-logger"
          gitLink="https://github.com/samnite/IT-Logger-React-Redux"
        />
        <ProjectItem
          title="Profikom site"
          img={profikom}
          id="left"
          link="/projects/profikom"
          webLink="https://dev-profikom-portfolio.pantheonsite.io/"
        />
        <ProjectItem
          title="Forkify - find recipes"
          img={forkify}
          id="top"
          link="/projects/forkify"
          webLink="https://github.com/samnite/Forkify-recipes-search-controller"
          gitLink="https://samnite.github.io/Forkify-recipes-search-controller/"
        />
        <ProjectItem
          title="Contact Keeper"
          img={contactKeeper}
          id="right"
          link="/projects/contact-keeper"
          webLink="https://vast-journey-34926.herokuapp.com/"
          gitLink="https://github.com/samnite/Contact-Keeper-TS"
        />
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
