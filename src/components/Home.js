import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import fire from '../style/assets/fire.gif'

export default class Home extends Component {
  render() {
    return (
       <div className="aboutMeContainer">
          <div className="aboutMeContent">Michaela Adams </div>
          <img src={fire}></img>
          <Link to={'/MainMenu'} className='startLink' autoFocus={true}><div autoFocus={true}className="startBtnBlink" >click to Start</div></Link>
       </div>
    );
  }
}

