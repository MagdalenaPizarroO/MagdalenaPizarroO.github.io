import styled from "styled-components";

export const PresentacionCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 500px;
  min-width: 350px;
  height: 50vh;
  width: 50vw;
  margin-top: 60px;
  padding: 20px;
  border: 2px solid #ff008821;
  border-radius: 15px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
  /* Generated using glassmorphism: https://hype4.academy/tools/glassmorphism-generator */
  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const PhotoCon = styled.div`
  position: absolute;
  border: 4px solid white;
  top: 35%;
  right: 8%;
  height: 30%;
  width: 25%;

  @media (max-width:900px) {
    width: 25%;
    height: 20%;
    top: 10%;
    margin-bottom: 20px;
  }
`;
export const H1Con = styled.div`
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  margin: 20px 45px 0;
  @media (max-width:900px) {
    width: 55%;
    margin: 35px 20px 20px;
    font-size: 1.25em;
    text-align: justify;
  }
`;

export const PCon = styled.div`
color: white;
  position: absolute;
  top: 30%;
  left: 5%;
  height: 60%;
  width: 55%;
  font-family: "Courier New", Courier, monospace;
  text-align: justify;
  font-size: 1.05em;
  @media (max-width:900px) {
    width: 80%;
    top: 34%;
    margin: 0px 20px 20px;
  }
`;

export const P = styled.p`
  margin-top: 10px;
  line-height: 1.2;
`;


export const BotonesNavegacionCon = styled.div`
  min-height: 50px;
  min-width: 300px;
  margin-top: 20px;
  position: absolute;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: 4px solid #bf4f74;
  border-radius: 5px;
`;