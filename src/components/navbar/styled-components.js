import styled from "styled-components";
import { Select } from "antd";
import media from "../../shared/utils/media";

export const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  margin: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;

  a {
    color: #fff;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      a {
        cursor: pointer;
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.5rem 0.75rem;
        margin: 0 0.25rem;
        border-radius: 5px;

        &:hover {
          background: var(--primary-color);
        }
      }
    }
  }

  .active-nav {
    background: var(--primary-color);
  }

  ${media().mobile`
    justify-content: center;
    ul {
      margin-top: 0.5rem;
    }
  `}
`;

export const StyledName = styled.span`
  color: var(--primary-hover-color);
`;

export const StyledSelect = styled(Select)`
  min-width: 130px;

  .ant-select-selection-item {
    color: var(--dark-color) !important;
  }

  ${media().mobile`
    width: 80%;
    padding-top: 10px;
  `}
`;
