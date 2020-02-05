import styled from "styled-components";

export const StyledProjects = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 90%;
    align-self: center;
    justify-content: center;
    align-content: center;
  }
`;
export const StyledProjectCard = styled.div`
  text-align: center;
  color: #333;
  justify-content: center;
  background: #eff1ec;
  padding: 1rem 0.5rem;
  border-radius: 25px;
  h3 {
    color: #333;
  }

  img {
    height: 150px;
    padding-top: 1rem;
    transition: all 1s ease-in-out;
  }

  #left {
    &:hover {
      transform: scale(2, 2) translate(50%);
    }
  }
  #top {
    &:hover {
      transform: scale(2, 2);
    }
  }
  #right {
    &:hover {
      transform: scale(2, 2) translate(-50%);
    }
  }
  @media (max-width: 768px) {
    &:nth-child(6) {
      img {
        height: 120px;
        width: 200px;
      }
    }
    &:nth-child(7) {
      img {
        height: 120px;
        width: 200px;
      }
    }
    img {
      padding: 0.5rem;
    }
    #left {
      &:hover {
        transform: none;
      }
    }
    #top {
      &:hover {
        transform: none;
      }
    }
    #right {
      &:hover {
        transform: none;
      }
    }
  }
`;

export const StyledCardLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  a {
    color: #444;
    padding: 0.25rem 1rem;
    margin: 0 5px;
    border-radius: 10px;
    transition: all 0.5s;
    &:hover {
      background: var(--primary-hover-color);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    a {
      margin: 0 2px;
      padding: 0.25rem 0.25rem;
    }
    #more:after {
      content: " More";
    }
    #demo:after {
      content: " Demo";
    }
    #src:after {
      content: " Src";
    }
  }
`;
