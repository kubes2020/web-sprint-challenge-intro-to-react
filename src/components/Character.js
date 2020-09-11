// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.h2`
  color: blue;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
`;

export default function Character({ character }) {
  return (
    <StyledCharacter>
      {character.name}, {character.gender}
    </StyledCharacter>
  );
}
