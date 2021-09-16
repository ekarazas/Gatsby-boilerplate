import styled from "styled-components";
import { Button } from "../buttons/Button";
import { secondary } from "../../styles/colors";

export const SecondaryButton = styled(Button)`
  color: ${(props) => props.color || secondary};
`;
