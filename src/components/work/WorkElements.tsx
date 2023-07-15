import styled from "styled-components";

export const OutsideCon = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
`;
export const WorkCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 80%;
  margin-top: 70px;
  padding: 20px 50px 30px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const WorkImageCon = styled.div`
  position: relative;
  width: auto;
  margin: auto;
`;

export const WorkTextCon = styled.div`
  min-height: 200px;
  margin: 5px auto 30px;
`;

export const WorkH1 = styled.h1`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
`;

export const WorkP = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  text-align: justify;
  padding-top: 5px;
`;

export const WorkLink = styled.a`
  font-size: 0.8em;
  font-family: "Courier New", Courier, monospace;
  color: black;
`;
