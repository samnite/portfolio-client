import React, { Fragment } from "react";
import styled from "styled-components";
import { StyledLHead } from "../../shared/ui/components";

import blackjack from "../../img/projects/blackjack.png";
import burger from "../../img/projects/burger-builder.png";
import contactKeeper from "../../img/projects/contact-keeper.png";
import githubFinder from "../../img/projects/github-finder.png";
import itLogger from "../../img/projects/it-logger.png";
import profikom from "../../img/projects/profikom.png";

const StyledProjects = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const StyledProjectCard = styled.div`
  text-align: center;
  color: #333;
  justify-content: center;
  background: #eff1ec;
  padding: 1rem 0.5rem;
  border-radius: 25px;
  img {
    width: 200px;
    padding: 1rem 0;
    transition: all 1s ease-in-out;
  }
  #left {
    &:hover {
      transform: scale(3, 3) translate(50%);
    }
  }
  #top {
    &:hover {
      transform: scale(3, 3);
    }
  }
  #right {
    &:hover {
      transform: scale(3, 3) translate(-50%);
    }
  }
  @media (max-width: 768px) {
    #left {
      &:hover {
        transform: none;
      }
    }
    #top {
      &:hover {
        transform: none;
      }
    }
    #right {
      &:hover {
        transform: none;
      }
    }
  }
`;

const Projects = () => {
  return (
    <Fragment>
      <StyledLHead>Projects</StyledLHead>
      <StyledProjects>
        <StyledProjectCard>
          <h3>Contact Keeper</h3>
          <img src={contactKeeper} alt="Contact Keeper" id="left" />
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>GitHub Finder</h3>
          <img src={githubFinder} alt="GitHub Finder" id="top" />
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>Burger Builder</h3>
          <img src={burger} alt="Burger Builder" id="right" />
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>BlackJack Game</h3>
          <img src={blackjack} alt="BlackJack" id="left" />
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>It Logger</h3>
          <img src={itLogger} alt="IT Logger" id="top" />
        </StyledProjectCard>
        <StyledProjectCard>
          <h3>Profikom site</h3>
          <img src={profikom} alt="Profikom" id="right" />
        </StyledProjectCard>
      </StyledProjects>
    </Fragment>
  );
};

export default Projects;
