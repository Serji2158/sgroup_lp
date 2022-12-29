import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  BackArrowIcon,
  Icon,
  FormDataWrapper,
  FormInputSmall,
  FormInputLarge,
  FormInputMessage,
} from "./MessageFormElements";

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
console.log(EMAIL_PUBLIC_KEY, EMAIL_TEMPLATE_ID, EMAIL_SERVICE_ID)

const MessageForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      form.current,
      EMAIL_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to="/">
              <BackArrowIcon />
              Standy Group
            </Icon>          
          <FormContent>
            <Form ref={form} onSubmit={sendEmail} >
              <FormH1>Send us your message</FormH1>
              <FormDataWrapper>                
                <FormInputSmall
                  type="text"
                  name='user_name'
                  placeholder="Name"
                  required />                  
                <FormInputSmall
                  type="phone"
                  name='user_phone'
                  placeholder="Phone"
                  required />                  
                <FormInputLarge
                  type="email"
                  name='user_email'
                  placeholder="Email"
                  required />                  
                <FormInputLarge
                  type="subject"
                  placeholder="Subject"
                  required />                  
                <FormInputMessage
                  type="message"
                  placeholder="Type your message here"
                  name="message"
                  id=""
                  cols="30"
                  rows="6"
                  required />
                <FormButton type="submit">Send</FormButton>                
              </FormDataWrapper>              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default MessageForm;
