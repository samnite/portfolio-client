import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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

const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMainPage(false));
  }, []);
  return (
    <StyledError>
      <h1>Page Not Found</h1>
    </StyledError>
  );
};

export default NotFound;
