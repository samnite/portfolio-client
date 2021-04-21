import React from "react";
import background from "img/background/background0.jpg";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import { StyledShowCase, StyledShowCaseContent } from "./styled-components";

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
