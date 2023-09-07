import styled from "styled-components";

export const WorkCon = styled.div`
  align-self: center;
  justify-self: center;
  box-sizing: border-box;
  width: 80%;
  max-width: 1000px;
  min-width: 320px;
  margin: 0 auto 10px;
  padding: 20px 40px 20px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 700px) {
    width: 85%;
    padding: 20px 15px 30px;
  }
  @media (max-width: 450px) {
    width: 90%;
    padding: 20px 5px 30px;
  }
`;

export const WorkImageCon = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  padding: 30px;
  display: grid;
  place-items: center;
`;

export const Img = styled.img`
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const WorkTextCon = styled.div`
  height: fit-content;
  width: 100%;
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
  padding-top: 5px;
  text-align: left;
`;

export const WorkLink = styled.a`
  font-size: 0.8em;
  font-family: "Courier New", Courier, monospace;
  color: black;
  display: block;
  overflow-wrap: break-word;
`;
