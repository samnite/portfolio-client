import React from "react";
import styled from "styled-components";
import background from "img/background/background0.jpg";
import { Parallax } from "react-parallax";

const StyledShowCase = styled.div`
  height: 600px;
  color: #fff;
`;

const StyledShowCaseContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    color: var(--primary-hover-color);
  }
  div {
    width: 50%;
    padding: 2rem 0;
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
`;

const Showcase = () => {
  return (
    <Parallax bgImage={background} strength={600}>
      <StyledShowCase id="Home">
        <StyledShowCaseContent>
          <h1>
            Hi, I'm <span>Alex</span> Gribenchenko
          </h1>
          <div>
            <p>
              I'm Ukraine-based freelancer. I work remotely for clients all over
              the world. I specialize in front-end development, and I love what
              I do.
            </p>
          </div>
        </StyledShowCaseContent>
      </StyledShowCase>
    </Parallax>
  );
};

export default Showcase;
