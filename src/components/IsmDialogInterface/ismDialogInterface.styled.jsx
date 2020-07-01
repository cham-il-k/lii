import styled from 'styled-components';

export const DialogShadow = styled.div`
  width: 100%;
  height:100%;
  top:0;
  position:fixed;
  background-color:black;
  opacity:0.7;
  z-index:4;
  display: flex;
  flex-direction:column;  
`;

export const DialogImage = styled.img`
  width: 30%;
`;

export const DialogShadowContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;
