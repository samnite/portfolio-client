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
`;

const Showcase = () => {
  return (
    <Parallax bgImage={background} strength={600}>
      <StyledShowCase>
        <StyledShowCaseContent>
          <h1>Hi, I'm Alex Gribenchenko</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet,modi nobis! Ab illo optio ullam?
          </p>
          <StyledPrimaryButton href="http://ya.ru" target="_blank">
            Read More
          </StyledPrimaryButton>
        </StyledShowCaseContent>
      </StyledShowCase>
    </Parallax>
  );
};

export default Showcase;
