import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 0.5;
  h2 {
    font-size: 60px;
  }
  p {
    font-size: 18px;
  }
`;
const BoxInfo = styled.div`
  display: flex;
`;
const InfoStat = styled.div`
  flex: 0.4;
  flex-direction: column;
`;
const InfoText = styled.div`
  align-content: center;
  margin: 30px;
  h3 {
    padding: 0 0 0 80px;
    font-size: 32px;
    display: inline;
    right: 0%;
    flex: 2;
    letter-spacing: 3px;
  }
  img {
    position: absolute;
  }
`;
const Content = props => {
  const { data, select } = props;
  const info = data[select];
  return (
    <Container>
      <h2>Hero : {data[select].name}</h2>
      <img src={data[select].image} />
      <BoxInfo>
        <InfoStat>
          <InfoText>
            <img src="./images/Str.png" alt="str" />
            <h3> {info.stat.str}</h3>
          </InfoText>
          <InfoText>
            <img src="./images/Agi.png" alt="agi" />
            <h3>{info.stat.agi}</h3>
          </InfoText>
          <InfoText>
            <img src="./images/Int.png" alt="int" />
            <h3> {info.stat.int}</h3>
          </InfoText>
        </InfoStat>
        <InfoStat>
          <InfoText>
            <img src="./images/atk.png" alt="atk" /> <h3> {info.stat.atk}</h3>
          </InfoText>
          <InfoText>
            <img src="./images/speed.png" alt="speed" />
            <h3> {info.stat.speed}</h3>
          </InfoText>
          <InfoText>
            <img src="./images/def.png" alt="def" />
            <h3> {info.stat.def}</h3>
          </InfoText>
        </InfoStat>
      </BoxInfo>
    </Container>
  );
};

export default Content;
