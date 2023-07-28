import styled from "styled-components";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #6309c3, #cd236f);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  display: grid;
  place-items: center;
  margin: 0;

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
  width: 100%;
  display: grid;
  place-items: center;
`;
