import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
  background: #333;
  color: #ccc;

  div {
    margin: 0 4rem;
  }

  p {
    margin-top: 0.5rem;
  }

  a:last-child {
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    color: #ccc;
    transition: all 1s;

    &:hover {
      background: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    p {
      border-bottom: 1px dotted #444;
      margin: 0;
    }
  }
`;

export const StyledCopy = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #333;
  font-size: 0.9rem;
  color: #777;
  text-align: center;
  justify-content: center;
  padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
