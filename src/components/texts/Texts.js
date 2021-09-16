import styled from "styled-components";
import { TextBase } from "../texts/TextBase";

export const RegularText = styled(TextBase)`
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
`;

export const Small = styled(TextBase)`
  font-size: ${(props) => props.fontSize || "0.875rem"};
  line-height: ${(props) => props.lineHeight || "1.25rem"};
`;

export const Caption = styled(TextBase)`
  font-size: ${(props) => props.fontSize || "0.75rem"};
  line-height: ${(props) => props.lineHeight || "1.125rem"};
`;
