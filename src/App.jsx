import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Spinner from "./Spinner";
import Content from "./Content";
const GlobalStyle = createGlobalStyle`

  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: 'Montserrat';
    color: #fff;
    background: #102131;
    overflow:hidden
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  overflow: hidden;
`;

const DataTest = [
  {
    name: "Riki",
    image: "./images/Riki_icon.png",
    type: "agi",
    stat: {
      str: "18+1.90",
      agi: "30+2.50",
      int: "14+1.30",
      atk: "21-25",
      speed: 290,
      def: 5.2
    }
  },
  {
    name: "Venomancer",
    image: "./images/Venomancer_icon.png",
    type: "agi",
    stat: {
      str: "19+2.10",
      agi: "26+3.20",
      int: "19+1.80",
      atk: "16-18",
      speed: 275,
      def: 3.64
    }
  },
  {
    name: "Axe",
    image: "./images/Axe_icon.png",
    type: "str",
    stat: {
      str: "25+3.40",
      agi: "20+2.20",
      int: "18+1.60",
      atk: "27-31",
      speed: 305,
      def: 1.8
    }
  },
  {
    name: "Doom",
    image: "./images/Doom_icon.png",
    type: "str",
    stat: {
      str: "26+4.00",
      agi: " 11+0.90",
      int: "15+2.10",
      atk: "27-44",
      speed: 285,
      def: 0.54
    }
  },
  {
    name: "Invoker",
    image: "./images/Invoker_icon.png",
    type: "int",
    stat: {
      str: "18+2.40",
      agi: "14+1.90",
      int: "18+4.60",
      atk: "27-33",
      speed: 280,
      def: 1.96
    }
  }
];

const App = () => {
  const [select, setSelect] = useState(Math.round(DataTest.length / 2)-1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Spinner setSelect={setSelect} data={DataTest} select={select} />
        <Content select={select} data={DataTest} />
      </Container>
    </>
  );
};

export default App;
