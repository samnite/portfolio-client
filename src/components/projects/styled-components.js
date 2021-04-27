import styled from "styled-components";
import media from "../../shared/utils/media";

export const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  ${media().mobile`
    padding-bottom: 2rem;
  `}
`;

export const StyledProjects = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;
  ${media().mobile`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
  `}
`;

export const StyledProjectCard = styled.div`
  text-align: center;
  color: #333;
  justify-content: center;
  background: #eff1ec;
  padding: 1rem 0.5rem;
  border-radius: 10px;

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

  ${media().mobile`
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
  `}
`;

export const StyledCardLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;

  a {
    color: #444;
    padding: 0.25rem 0.5rem;
    margin: 0 5px;
    border-radius: 4px;
    transition: all 0.5s;

    &:hover {
      background: var(--primary-hover-color);
    }
  }
  ${media().mobile`
    justify-content: center;
    a {
      margin: 0 2px;
      padding: 0.25rem 0.25rem;
    }

    #more:after {
      content: " ${({ t }) => t("moreTitle")}";
    }

    #demo:after {
      content: " ${({ t }) => t("demoTitle")}";
    }

    #src:after {
      content: " ${({ t }) => t("srcTitle")}";
    }
  `}
`;
