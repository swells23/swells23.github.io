import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { ContactBand } from '../components/Contact';

function Contact(props) {
  const { location } = props;

  return (
    <DefaultTemplate headTitle="Contact" location={location}>
      <ContactBand />
    </DefaultTemplate>
  );
}

export default Contact;
