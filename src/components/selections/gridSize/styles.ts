import { menuSelectionButton } from "global/defaultStyles";
import styled from "styled-components";

export const Container = styled.p`
    width: 542px;
    height: 93px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #7191a5;
  grid-column: span 4;
  width: 100%;
  text-align: start;
`;

export const Button4x4 = styled.button`
    ${menuSelectionButton}
    width: 256px;
    height: 52px;
`

export const Button6x6 = styled(Button4x4)`

`