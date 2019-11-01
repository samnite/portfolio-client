import React, { useEffect } from "react";
import styled from "styled-components";
import {
  StyledContainer,
  StyledPrimaryButton
} from "../../shared/ui/components";
import githubFinder from "../../img/projects/github-finder.png";
import { connect } from "react-redux";
import { getProject } from "../../store/actions/projects-actions";

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  img {
    height: 200px;
  }
  div:last-child {
    border-left: 1px dotted #333;
    padding-top: 3rem;
  }
`;

const Project = ({ getProject }) => {
  useEffect(() => {
    console.log("work");
    getProject();
  }, []);
  return (
    <StyledContainer>
      <StyledPrimaryButton>Back</StyledPrimaryButton>
      <StyledProject>
        <div>
          <h1>Project Name</h1>
          <img src={githubFinder} alt="GitHub Finder" />
        </div>
        <div>
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </StyledProject>
    </StyledContainer>
  );
};

export default connect(
  null,
  { getProject }
)(Project);
