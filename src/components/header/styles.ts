import { buttonPrimary, buttonSecondary } from "global/defaultStyles";

import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 80vw;
  height: 52px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Wrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const RestartButton = styled.button`
    ${buttonPrimary}
`

export const NewGameButton = styled.button`
    ${buttonSecondary}
`

export const Title = styled.h1``