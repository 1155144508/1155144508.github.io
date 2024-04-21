import React from "react";
import ContactCard from "../reusable/ContactCard";

const ContactMePresentational: React.FC<any> = (props) => {
  return (
    <div>
      <ContactCard icon="fa-solid fa-phone" title="Phone Number" content="5269 5785" />
      <ContactCard icon="fa-solid fa-envelope" title="Email" content="williamzheng831@outlook.com" />
    </div>
  );
};

export default ContactMePresentational;