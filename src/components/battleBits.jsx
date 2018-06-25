import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/ProjectsMenu.css';



//make this a lower level component
export default class battleBits extends Component {
  render() {
    return (
     

        <div className="project">
        
        <img src={BattleBitsBattle} className="projectImage"/>
        <img src={BattleBitsSettings} className="projectImage"/>
        <img src={BattleBitsPractice} className="projectImage"/>
        <div className="projectDescription">Project: battle bits</div>
        <div className="projectDescription">Tools: React, Now, Javascript</div>
        <div className="projectDescription"> Link:<Link to={'https://build-jtbxqhsfrb.now.sh/'}> BATTLEBITS</Link></div>
      </div>
        
      );
    }
  }
  
  



