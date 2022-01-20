import {createGlobalStyle} from "styled-components";
import { IThemeVariables } from "./Themes";

interface IGlobalStylesProps {
    theme: IThemeVariables;
}

export const GlobalStyles = createGlobalStyle<IGlobalStylesProps>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`