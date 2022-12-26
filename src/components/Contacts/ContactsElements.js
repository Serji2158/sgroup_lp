import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const ContactContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 650px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

   @media screen and (max-width: 480px) {
    flex-direction: column;
  }  
`;

export const ContactCard = styled.div`
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;


  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    flex-direction: column;
  }
`;
export const ContactIcon = styled.img`
  height: 500px;
  width: 400px;
  padding: 15px;
  @media screen and (max-width: 768px) {
    height: 410px;
    padding: 50px;
  }
  @media screen and (max-width: 480px) {
    height: 350px;
    padding: 30px;
  }
`;
export const ContactH1 = styled.h1`
  font-size: 3rem;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ContactsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 0 30px;
`;

export const ContactP = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactRoute = styled(LinkR)`
  font-size: 1.25rem;
  text-align: center;
  color: #FFBF63;
  cursor: pointer;
  text-decoration: none;
   @media screen and (max-width: 480px) {
    font-size: 1rem;
  } 
`
