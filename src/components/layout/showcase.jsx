import React, { Fragment } from "react";
import styled from "styled-components";
import background from "img/background/background0.jpg";
import { StyledPrimaryButton } from "../../shared/ui/components";
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
`;

const Showcase = () => {
  return (
    <Parallax bgImage={background} strength={600}>
      <StyledShowCase>
        <StyledShowCaseContent>
          <h1>
            Hi, I'm <span>Alex</span> Gribenchenko
          </h1>
          <div>
            <p>
              I'm Ukraine-based freelancer. I'm working remotely on projects for
              clients all over the world. I design and code beautifully simple
              things, and I love what I do.
            </p>
          </div>

          <StyledPrimaryButton
            href="https://github.com/samnite"
            target="_blank"
          >
            GitHub Profile
          </StyledPrimaryButton>
        </StyledShowCaseContent>
      </StyledShowCase>
    </Parallax>
  );
};

export default Showcase;
