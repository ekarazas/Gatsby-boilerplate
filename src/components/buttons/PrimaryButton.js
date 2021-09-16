import styled from "styled-components";
import { Button } from "../buttons/Button";
import { primary } from "../../styles/colors";

export const PrimaryButton = styled(Button)`
  color: ${(props) => props.color || primary};
`;
