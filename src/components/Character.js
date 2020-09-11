// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  70%{
      opacity: .4

    }
  100%{
    transform: scale(1);
    opacity: 1
  }
`;

const StyledCharacter = styled.h2`
  transform: scale(0.1);
  opacity: 0.1;
  animation: ${kf} 1.5s forwards;
  color: #2c26a7;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 20px;
  box-shadow: 2px 2px 4px;
  text-shadow: 2px 2px 6px white;
  background: rgb(57, 57, 68);
  background: linear-gradient(
    90deg,
    rgba(57, 57, 68, 1) 21%,
    rgba(193, 128, 80, 1) 100%
  );
`;

export default function Character({ character }) {
  return (
    <StyledCharacter>
      <div>
        {character.name}, {character.gender}
      </div>
    </StyledCharacter>
  );
}
