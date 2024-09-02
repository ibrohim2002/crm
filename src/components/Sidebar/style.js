import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  width: 280px;
  border: 2px green solid;
  background-color: white;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 0;
  }
`;

const Body = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  border: 2px coral solid;
  margin: 16px;
  background-color: white;
`;

export { Container, Body, Side, Wrapper };
