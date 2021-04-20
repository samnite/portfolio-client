import styled from "styled-components";

export const StyledAbout = styled.div`
  max-width: 800px;
  height: 70vh;
  color: #333;
  margin: auto;
  padding: 2rem 2rem;
  overflow: hidden;

  h2 {
    color: var(--primary-hover-color);
    margin-bottom: 1rem;
  }

  img {
    display: block;
    height: 150px;
    border-radius: 150px;
    margin: auto auto 1rem;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;
