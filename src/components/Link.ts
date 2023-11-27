import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    position: absolute;
    background-color: ${theme.colors.accent};
    content: "";
    display: inline-block;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
  }

`
