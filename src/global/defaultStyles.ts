import { css } from "styled-components";

// Common button styles used -> to not reuse

const commonButtonStyles = css`
  border-radius: 26px;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  transition: 1s ease background, transition 1s ease color;
`;

// Primary Button

export const buttonPrimary = css`
  ${commonButtonStyles}
  background: #fda214;
  width: 127px;
  height: 52px;
  color: #fcfcfc;

  &:hover {
    background: #ffb84a;
  }
`;

// Secondary Button

export const buttonSecondary = css`
  ${commonButtonStyles}
  background: #dfe7ec;
  width: 127px;
  height: 52px;
  color: #304859;

  &:hover {
    background: #6395b8;
    color: #fff;
  }
`;

// Big Menu Button

export const bigMenuButton = css`
  ${commonButtonStyles}
  font-size: 26px;
  line-height: 32px;
  border-radius: 26px;
  background: #bcced9;

  &.active {
    background: #304859;
  }

  &:hover {
    background: #6395b8;
  }
`;

// Menu Selection Button

export const menuSelectionButton = css`
  ${commonButtonStyles}
  background: #fda214;
  border-radius: 35px;
  width: 541px;
  height: 70px;
  font-size: 32px;
  line-height: 40px;

  &:hover {
    background: #ffb84a;
  }
`;