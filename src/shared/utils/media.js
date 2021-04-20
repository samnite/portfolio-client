import { css } from "styled-components";

export const sizesMax = {
  "small-mobile": 479,
  smallMobile: 479,
  mobile: 767,
  tablet: 1223,
  smallTablet: 1050,
  desktop: 1439,
  "large-desktop": 1919,
  largeDesktop: 1919,
};

export const sizesMin = {
  mobile: 480,
  tablet: 768,
  smallTablet: 768,
  desktop: 1224,
  "large-desktop": 1440,
  largeDesktop: 1440,
  "larger-desktop": 1920,
  largerDesktop: 1920,
};

const media = (isMax = true) =>
  Object.keys(isMax ? sizesMax : sizesMin).reduce((acc, lab) => {
    acc[lab] = (...args) => css`
      @media (${isMax ? "max" : "min"}-width: ${isMax
          ? sizesMax[lab]
          : sizesMin[lab]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});

export const mediaLandscape = (isMax = true) =>
  Object.keys(isMax ? sizesMax : sizesMin).reduce((acc, lab) => {
    acc[lab] = (...args) => css`
      @media (${isMax ? "max" : "min"}-width: ${isMax
          ? sizesMax[lab]
          : sizesMin[lab]}px) and (orientation: landscape) {
        ${
          // @ts-ignore T2557
          css(...args)
        }
      }
    `;
    return acc;
  }, {});

export default media;
