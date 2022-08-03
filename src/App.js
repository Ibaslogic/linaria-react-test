import React from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const App = () => {
  return (
    <>
      <HeadingThree className={style}>Heading III</HeadingThree>
      <Hello primary="blue">Primary color</Hello>
      <Hello>Danger</Hello>
      <div className={flower}>Hello world</div>
    </>
  );
};
export default App;

const Hello = styled.p`
  color: ${({ primary }) => (primary ? 'blue' : 'red')};
`;

const HeadingThree = styled.h3`
  background-color: blue;
  color: green;
`;

const flower = css`
  background-color: green;
  color: red;
`;

const style = css`
  color: red;
`;
