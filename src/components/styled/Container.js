import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props)=>props.theme.colors.fontColor};
`;

export default Container;
