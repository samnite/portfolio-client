import styled from "styled-components";

export const StyledPrimaryButton = styled.a`
  display: inline-block;
  color: #fff;
  background: var(--primary-color);
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background: var(--primary-hover-color);
  }
`;

export const StyledContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const StyledLHead = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
  color: #333;
`;
