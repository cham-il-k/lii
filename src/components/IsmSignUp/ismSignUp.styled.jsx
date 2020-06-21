import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: grid;
  grid-row:2/3;
  grid-column:2/3;
  background-color:white;
  grid-template-columns:10rem 8fr;
  grid-template-rows:2fr 1fr;
`;

export const SignUpContent = styled.div`
  display: grid;
  grid-row:1/2;
  grid-column:2/-1;
  padding:5rem 0 1rem 0;
`;

export const LoginFooter = styled.div`
  grid-column:1/-1;
  grid-row:2/-1;
  padding-left:10rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:2rem;
  font-size:1.5rem;
  font-weight:300;
`
export const SignUpTitle = styled.h2`
  margin: 10px 0;
  font-size:2.4rem;
  margin-bottom:3rem;
`;
export const FormContent = styled.div`
  display:flex;
  flex-direction:column;
`
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px 0;
`;