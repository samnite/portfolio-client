import React from "react";
import styled from "styled-components";
import background from "img/background/background0.jpg";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";

const StyledShowCase = styled.div`
  height: 600px;
  color: #fff;
`;

const StyledShowCaseContent = styled.div`
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

const Showcase = () => {
  const { t } = useTranslation();

  return (
    <Parallax bgImage={background} strength={600}>
      <StyledShowCase id="Home">
        <StyledShowCaseContent>
          <h1>
            {t("hi")} <span>{t("firstName")}</span> {t("secondName")}
          </h1>
          <div>
            <p>{t("bio")}</p>
          </div>
        </StyledShowCaseContent>
      </StyledShowCase>
    </Parallax>
  );
};

export default Showcase;
