import React from "react";
import styled from "styled-components";
import Spinner from "./spinner";

const Container = styled.div`
  color:#fff;
  background: #102131;
  height: 100vh;
`;
const Content = styled.div`
`

function App() {
  return (
    <Container>
      <Spinner />
      <Content>
        <h2>Content</h2>
        </Content> 
    </Container>
  );
}

export default App;
