import { menuSelectionButton } from "global/defaultStyles";
import styled from "styled-components";

export const Container = styled.p`
  width: 542px;
  height: 93px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 16px;
  column-gap: 21px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #7191a5;
  grid-column: span 4;
  width: 100%;
  text-align: start;
`;

export const Selection = styled.button`
    ${menuSelectionButton}
    border-radius: 26px;
    width: 119px;
    height: 52px;
`