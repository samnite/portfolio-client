import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setMainPage } from "../../store/actions/projects-actions";

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;

  h1 {
    color: #333;
  }
`;

// eslint-disable-next-line no-shadow
const NotFound = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
  }, []);
  return (
    <StyledError>
      <h1>Page Not Found</h1>
    </StyledError>
  );
};

export default connect(null, { setMainPage })(NotFound);
