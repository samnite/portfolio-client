import React, { Fragment } from "react";
import { StyledLHead } from "../../../shared/ui/components";
import blackjack from "../../../img/projects/blackjack.png";
import burger from "../../../img/projects/burger-builder.png";
import contactKeeper from "../../../img/projects/contact-keeper.png";
import githubFinder from "../../../img/projects/github-finder.png";
import itLogger from "../../../img/projects/it-logger.png";
import profikom from "../../../img/projects/profikom.png";
import alexBlog from "../../../img/projects/alex-blog.png";
import forkify from "../../../img/projects/forkify.png";
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
          title="Contact Keeper"
          img={contactKeeper}
          id="top"
          link="/projects/contact-keeper"
          webLink="https://vast-journey-34926.herokuapp.com/"
          gitLink="https://github.com/samnite/Contact-Keeper-TS"
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
          title="Burger Builder"
          img={burger}
          id="left"
          link="/projects/burger-builder"
          webLink="https://burger.profikom.pp.ua/"
          gitLink="https://github.com/samnite/Burger-Builder-React.JS"
        />
        <ProjectItem
          title="BlackJack Game"
          img={blackjack}
          id="top"
          link="/projects/blackjack-game"
          webLink="https://gifted-pike-a9b5e0.netlify.com/"
          gitLink="https://github.com/samnite/BlackJack-React.js-"
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
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
