// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.h2`
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
