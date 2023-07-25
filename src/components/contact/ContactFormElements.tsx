import styled from "styled-components";

export const FormCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 3fr 1fr;
  column-gap: 20px;
  row-gap: 5px;
  grid-template-areas:
    "title title"
    "name email"
    "input1 input2"
    "message message"
    "inputMessage inputMessage"
    "button1 button2"
    "button3 .";
  padding: 30px 50px 30px;
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
`;

export const TitleCon = styled.div`
  grid-area: title;
  margin: auto;
  margin-bottom: 20px;
`;

export const NameCon = styled.div`
  grid-area: name;
  align-self: end;
`;

export const EmailCon = styled.div`
  grid-area: email;
  align-self: end;
`;

export const Input = styled.input`
  grid-area: input1 input2;
  background-image: linear-gradient(#e32071, #e32071), linear-gradient(#2b0616, #2b0616);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  min-height: 35px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
    }
`;

export const MessageCon = styled.div`
  grid-area: message;
  align-self: end;
`;

export const Textarea = styled.textarea`
grid-area: inputMessage;
  background-color: transparent;
  border: 1px solid  #2b0616; /* Establecemos un borde transparente */
  padding: 10px;
  display: initial;
  width: 100%;
  outline: none;
  font-size: 15px;
  &:focus {
    border-image: linear-gradient(to right, #e32071, #7810b9); 
    border-image-slice: 1;
    border-color: transparent; 
    border-image-width: 2px;
  }
  margin-bottom: 5px;
`;

export const SendButton = styled.button`
  grid-area: button1;
  color: white;
  cursor: pointer;
  transform-origin: center;
  /* style */
  background: rgba(151, 8, 65, 0.929);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* on hover with styled-components */
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

export const ResetButton = styled.button`
  grid-area: button2;
  cursor: pointer;
  transform-origin: center;
  /* style */
  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* on hover with styled-components */
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

export const ButtonLinkedIn = styled.a`
border-radius: 100%;
  
`;

export const Title = styled.h1`
  text-decoration: underline;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
`;
