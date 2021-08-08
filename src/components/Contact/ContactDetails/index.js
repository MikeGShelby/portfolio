import React from 'react';
import HeaderDetails from '../../Header/HeaderDetails';
import Contact from '../index';
import Footer from '../../Footer';

function ContactDetails() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <Contact></Contact>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default ContactDetails;