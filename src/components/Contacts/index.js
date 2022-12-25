import React from "react";
import Icon from "../../images/svg-5.svg";


import {
  ContactContainer,
  ContactH1,
  ContactH2,
  ContactIcon,
  ContactP,
  ContactWrapper,
  ContactsWrapper,
  ContactRoute,
} from "./ContactsElements";

const Contacts = () => {
  return (
    <ContactContainer id="contacts">
      <ContactH1>CONTACT US</ContactH1>
        <ContactWrapper>
          <ContactIcon src={Icon} />
            <ContactsWrapper>
              <ContactH2>STANDY GROUP LLC</ContactH2>
              <ContactP>530-B HARKLE ROAD, STE 100,</ContactP>
              <ContactP>NM, Santa Fe, 87505</ContactP>
              <ContactRoute to="/contact">info@standy-group.com</ContactRoute>
              <ContactP>+1 415-890-2822</ContactP>
            </ContactsWrapper>    
        </ContactWrapper>
    </ContactContainer>
  );
};

export default Contacts;
