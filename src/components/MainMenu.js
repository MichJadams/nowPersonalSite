import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/MainMenu.css';
import resume from '../style/assets/adams_michaela_resume2018.pdf';



export default class MainMenu extends Component {
  render() {
    return (
     
      <div className="Menu">
        <Link className ="MenuItem" to={'/Projects'}>Projects</Link>
        <Link className ="MenuItem" to={'/Contact'}>Contact</Link>
        <Link className ="MenuItem" to={'/Statistics'}>Statistics</Link>
        <a className="MenuItem" href={resume} target="_blank">Download pdf Resume</a>
        </div>
        
      );
    }
  }
  
  



