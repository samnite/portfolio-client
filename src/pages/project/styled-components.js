import styled from "styled-components";
import media from "../../shared/utils/media";

export const StyledProject = styled.div`
  display: grid;
  height: 90vh;
  color: #333;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: baseline;

  h2 {
    color: #333;
  }

  ul {
    margin: 1rem;
    text-align: left;
  }

  ${media().mobile`
    grid-template-columns: 1fr;
    height: 100%;
    img {
      width: 180px;
    }
  `};
`;
