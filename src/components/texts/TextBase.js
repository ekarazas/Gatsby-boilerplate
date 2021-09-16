import styled from "styled-components";

import { black } from "styles/colors";

export const TextBase = styled.p`
  color: ${(props) => props.color || black};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || 400};
  margin: ${(props) => props.margin || ""};
  text-align: ${(props) => props.textAlign || ""};
  text-decoration: ${(props) => props.textDecoration || ""};
  text-transform: ${(props) => props.textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs((props) => ({
  fontWeight: props.fontWeight || 700,
}))``;