import React from 'react';
import styled from 'styled-components';


const containerStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  padding: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonPrimaryStyle = { backgroundColor: '#4CAF50', color: 'white' };
const buttonSecondaryStyle = { backgroundColor: '#f44336', color: 'white' };


function ButtonComponent1({ warn }) { 
  const buttonStyle4 = {
    ...buttonStyle,
    backgroundColor: warn ? 'yellow' : '#4CAF50',
    color: warn ? 'red' : 'white',
  };

  return (
    <div style={containerStyle}>
      <button style={{ ...buttonStyle, ...buttonPrimaryStyle }}>Кнопка 1</button>
      <button style={buttonStyle4}>Кнопка 2</button> {/* warn передается сюда */}
    </div>
  );
}


const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
`;

function StyledButtonComponent() {
  return (
    <StyledContainer>
      <StyledButton>Кнопка 1 (Styled)</StyledButton>
      <StyledButton>Кнопка 2 (Styled)</StyledButton>
    </StyledContainer>
  );
}


const BlockContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

const BlockButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  ${({ disabled }) => disabled && `opacity: 0.5; cursor: not-allowed;`}
  ${({ reset }) => reset && `background-color: #ddd;`}
`;

function Block({ disabledButton1 = false }) {
  return (
    <BlockContainer>
      <BlockButton disabled={disabledButton1}>Кнопка 1</BlockButton>
      <BlockButton>Кнопка 2</BlockButton>
      <BlockButton reset>Кнопка 3</BlockButton>
    </BlockContainer>
  );
}


// Задача 106: Компонент Block1 с Styled Components
const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black;
`;

function Block1() {
  return <DIVA />;
}


export { ButtonComponent1, StyledButtonComponent, Block, Block1 };
