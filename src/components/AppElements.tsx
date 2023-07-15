import styled from "styled-components";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #6309c3, #cd236f);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
  overflow-x: hidden;

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

export const ContentCon = styled.div`
  min-height: 80vh;
  display: grid;
  place-items: center;
`;
