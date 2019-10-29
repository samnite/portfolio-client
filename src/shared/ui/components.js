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
