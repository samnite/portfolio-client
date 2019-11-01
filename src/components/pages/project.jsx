import React from "react";
import styled from "styled-components";
import {
  StyledContainer,
  StyledPrimaryButton
} from "../../shared/ui/components";
const StyledProject = styled.div``;

const Project = ({ project }) => {
  return (
    <StyledContainer>
      <StyledPrimaryButton>Back</StyledPrimaryButton>
    </StyledContainer>
  );
};

export default Project;
