import styled from "styled-components";

export const StyledShowCase = styled.div`
  height: 600px;
  color: #fff;
`;

export const StyledShowCaseContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);

  h1 {
    color: #fff;
  }

  span {
    color: var(--primary-hover-color);
  }

  div {
    width: 50%;
    padding: 2rem 0;

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
`;
