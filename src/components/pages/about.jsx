import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import avatarImg from "../../img/avatar/avatar.jpg";
import { setMainPage } from "../../store/actions/projects-actions";
import { StyledAbout } from "./styled-components";

const About = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setMainPage(false));
  }, []);
  return (
    <StyledAbout>
      <img src={avatarImg} alt={t("fullName")} />
      <h2>{t("aboutTitle")}</h2>
      <p>{t("aboutBody1")}</p>
      <p>{t("aboutBody2")}</p>
      <p>{t("aboutBody3")}</p>
    </StyledAbout>
  );
};

export default About;
