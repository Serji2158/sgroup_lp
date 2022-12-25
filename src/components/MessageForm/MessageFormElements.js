import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(230, 185, 95) 0%,
    rgba(255, 191, 99, 1) 100%
  );
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormDataWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const FormInputSmall = styled.input`
  flex: 1;
  height: 50px;
  padding-left: 10px;
  margin-bottom: 20px;

  &:first-child {
  margin-right: 10px;
  }

  @media screen and (max-width: 480px) {
    &:first-child {
      margin-right: 0;    
  }
}
`
export const FormInputLarge = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

export const FormInputMessage = styled.textarea`
  width: 100%;
  padding: 10px 0 0 10px;
`;

export const FormButton = styled.button`
  margin-top: 20px;
  background: #FFBF63;
  padding: 20px 20px;
  color: #010101;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
`;