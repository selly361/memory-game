import { bigMenuButton } from "global/defaultStyles";
import styled from "styled-components";

export const Container = styled.div`
  background: #fcfcfc;
  border-radius: 20px;
  width: 654px;
  height: 490px;
  padding: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 32px;
`;

export const StartButton = styled.button`
  ${bigMenuButton}
  color: white;
`