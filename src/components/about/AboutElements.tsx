import styled from "styled-components";

export const AboutCon = styled.div`
display: grid;
	place-items: center;
  height: 50vh;
  width: 50vw;
  padding: 20px;
  margin: 20px;
  border: 2px solid #ff008821;
  border-radius: 15px;
  z-index: 2;
    height: fit-content;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media (max-width: 700px) {
    width: 80%;
    margin: 0;
  }

`;

export const H1Con = styled.div`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  text-transform: uppercase;
  margin: 20px 45px 0;
  @media (max-width:700px) {
    font-size: 1.25em;
  }
`;

export const PCon = styled.div`
  text-align: justify;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.05em;
  margin: 20px 30px 0;
  height: fit-content;
    line-height: 1.2;
  @media (max-width:700px) {
    font-size: 1.00em;
  }
`;
