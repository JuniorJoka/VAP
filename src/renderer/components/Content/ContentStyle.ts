import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  border: 1px solid black;
  background-color: blue;
`;

export const Main = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
`;

export const Header = styled.header`
  border: 1px solid black;
  width: 95%;
  margin: 10px;
  height: 40px;
`;

export const SubHead = styled.div`
  border: 1px solid black;
  width: 95%;
  margin: 10px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SubHeadNavigation = styled.div`
  border: 1px solid black;
  width: 80px;
  height: 90%;
`;
