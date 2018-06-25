import React, { Component } from 'react';
import '../style/Resume.css';
import resume from '../style/assets/adams_michaela_resume2018.pdf';
import { Document,Page } from 'react-pdf'
import { Link } from 'react-router-dom';

export default class Resume extends Component {
  render() {
    return (
      <div>
      <Link to={'/MainMenu'} className='backLink'>Back</Link>
      <div className="linkContainer">
      <a className='link' href={resume}>Click here for my pdf</a>
      </div>
      <div className="resumeContainer">
        <Document
          file={resume}
        >
          <Page pageNumber={1} />
        </Document>
        <p>Page {1} of {1}</p>
      </div>
      </div>
    );
  }
}




