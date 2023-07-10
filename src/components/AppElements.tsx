import styled from "styled-components";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #6309c3, #cd236f);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const PresentacionCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 50vh;
  width: 50vw;
  padding: 20px;
  border: 2px solid #ff008821;
  border-radius: 15px;
  top: 35%;
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

export const BotonesNavegacionCon = styled.div`
  min-height: 50px;
  min-width: 300px;
  margin-top: 20px;
  position: absolute;
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid #ff008821;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
