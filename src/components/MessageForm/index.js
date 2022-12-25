import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  Icon,
  FormDataWrapper,
  FormInputSmall,
  FormInputLarge,
  FormInputMessage,
} from "./MessageFormElements";

const MessageForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_491hif6', 'template_21g01pn', form.current, 'WmkzO9q9Sj9KAp_xm')
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
          <Icon to="/">Standy Group</Icon>
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
