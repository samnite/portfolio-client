import React, { useEffect } from "react";
import { setMainPage } from "../../store/actions/projects-actions";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
  h1 {
    color: #333;
  }
`;

const NotFound = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
    // eslint-disable-next-line
  }, []);
  return (
    <StyledError>
      <h1>Page Not Found</h1>
    </StyledError>
  );
};

export default connect(
  null,
  { setMainPage }
)(NotFound);
