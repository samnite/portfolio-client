import React, { Fragment } from "react";
import styled from "styled-components";
import background from "img/background0.jpg";
import { StyledPrimaryButton } from "../../shared/ui/components";

const StyledShowCase = styled.div`
  background: #333 url(${background}) no-repeat center center/cover;
  height: 100vh;
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
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Showcase = () => {
  return (
    <StyledShowCase>
      <StyledShowCaseContent>
        <h1>The Sky Is The Limit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          modi nobis! Ab illo optio ullam?
        </p>
        <StyledPrimaryButton href="http://ya.ru" target="_blank">
          Read More
        </StyledPrimaryButton>
      </StyledShowCaseContent>
    </StyledShowCase>
  );
};

export default Showcase;
