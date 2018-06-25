import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProjectsMenu.css';



//make this a lower level component
export default class areYouThere extends Component {
  render() {
    return (
     

      <div className="project">
      <img src={AreYouThereMaze} className="projectImage"/>
      <img src={AreYouThereLobby} className="projectImage"/>
      <img src={AreYouThereWaitingRoom} className="projectImage"/>
      
      <div className="projectDescription">Project: Players control a single cube through a maze. In order to move the cube players must agree unanimously on a direction to move.</div>
      <div className="projectDescription">Tools: three.js, WebGL, socket.io, Express, Node</div>
      <div className="projectDescription">Link: COMING SOON</div>
      </div>

        
      );
    }
  }
  
  



