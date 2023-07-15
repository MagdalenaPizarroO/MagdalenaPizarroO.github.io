import styled from "styled-components";

export const NavbarCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  position: absolute;
  top: 0;
  color: white;
  z-index: 999999;
`;

export const Start = styled.div`
  text-align: start;
  margin-left: 50px;

`;

export const Center = styled.div`
  text-align: center;
`;

export const End = styled.div`
  text-align: end;
  margin-right: 50px;
`;

export const ButtonNavbar = styled.button`
  color: #ffffff;
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: transparent;
  border-radius: 5px;
  background-color: #c33263;
`;