import styled from "styled-components";
import { TextBaseBold } from "../texts/TextBase";

export const H1 = styled(TextBaseBold).attrs({
  as: "h1",
})`
  font-size: ${(props) => props.fontSize || "2.5rem"};
  line-height: ${(props) => props.lineHeight || "3.5rem"};
`;

export const H2 = styled(TextBaseBold).attrs({
  as: "h2",
})`
  font-size: ${(props) => props.fontSize || "2rem"};
  line-height: ${(props) => props.lineHeight || "2.75rem"};
`;

export const H3 = styled(TextBaseBold).attrs({
  as: "h3",
})`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  line-height: ${(props) => props.lineHeight || "2rem"};
`;
