import { menuSelectionButton } from "global/defaultStyles";
import styled from "styled-components";

export const Container = styled.p`
    width: 542px;
    height: 93px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`

export const Text = styled.p`
  font-size: 20px;
  color: #7191a5;
  grid-column: 1/2;
`;

export const NumbersSelection = styled.button`
    ${menuSelectionButton}
    grid-row: 2;
`

export const IconsSelection = styled.button`
    grid-row: 2;
    ${menuSelectionButton}
`