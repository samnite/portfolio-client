import React from "react";
import { Select } from "antd";
import i18n from "i18next";
import { StyledSelect } from "./styled-components";

const { Option } = Select;

const LanguageSelector = () => (
  <StyledSelect
    defaultValue={i18n.language}
    onChange={(value) => i18n.changeLanguage(value)}
  >
    <Option value="en">English</Option>
    <Option value="ru">Русский</Option>
  </StyledSelect>
);

export default LanguageSelector;
