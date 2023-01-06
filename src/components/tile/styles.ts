import styled, { keyframes } from "styled-components";

const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledTile = styled.button`
  background: #304859;
  border-radius: 50%;
  font-weight: 700;
  font-size: 56px;
  line-height: 69px;
  color: #fcfcfc;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 50;
    background: #304859;
    transition: 100ms ease opacity;
  }

  &:disabled {
    cursor: unset;
  }

  &.tile-4x4 {
    width: 118px;
    height: 118px;
  }

  &.tile-6x6 {
    width: 82px;
    height: 82px;
  }

  &.match {
    background: #bcced9;
  }

  &.clicked {
    background: #FDA214;
    animation: ${zoomOut} 0.5s linear;
  }

  &.match::before, &.clicked::before {
    opacity: 0;
  }

  &.disabled {
    pointer-events: none;
  }
`;
