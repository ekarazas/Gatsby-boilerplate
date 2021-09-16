import styled from "styled-components";
import { white } from "styles/colors";

export const Button = styled.button`
  background-color: ${(props) => props.background || "transparent"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  cursor: pointer;
  color: ${(props) => props.color || white};
  display: ${(props) => props.display || "inline-block"};
  font-size: ${(props) => props.fontSize || ""};
  margin: ${(props) => props.margin || "auto"};
  max-width: ${(props) => props.maxWidth || "16rem"};
  min-width: ${(props) => props.minWidth || "none"};
  padding: ${(props) => props.padding || "0.8rem 1.5rem"};
  width: ${(props) => props.width || ""};

  :hover {
  }
`;
