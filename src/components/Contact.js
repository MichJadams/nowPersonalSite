import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='ContactPageContainer'>
      <Link to={'/MainMenu'} className='backLink'>Back</Link>
      <div className="ContactContainer">
        <div className="ContactInfo"> Email: Mjadams66@gmail.com</div>
        <div className="ContactInfo"> Twitter: @MichJadams</div>
        <div className="ContactInfo"> Phone: 908-451-08751</div>
        </div>
      </div>
    );
  }
}




