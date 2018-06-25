import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import '../style/Projects.css';
import AreYouAliveLogo from '../style/assets/AreYouAliveLogo.svg'

import AreYouThereMaze from '../style/assets/AreYouThereMaze.png'
import AreYouThereWaitingRoom from '../style/assets/AreYouThereWaitingRoom.png'
import AreYouThereLobby from '../style/assets/AreYouThereLobby.png'

import MystiqueBoutiqueCart from '../style/assets/MystiqueBoutiqueCart.png'
import MystiqueBoutiqueHomepage from '../style/assets/MystiqueBoutiqueHomepage.png'


import BattleBitsBattle from '../style/assets/battleBitsBattle.png'
import BattleBitsSettings from '../style/assets/BattleBitsSettings.png'
import BattleBitsPractice from '../style/assets/BattleBitsPractice.png'
export default class Projects extends Component {
  render() {
    return (

      <div className="projectsContainer">
      <Link to={'/MainMenu'} className='backLink'>Back</Link>
        <div className='projectsTitle'>Projects</div>
        <div className="project">
        <img src={AreYouThereMaze} className="projectImage"/>
        <div className="projectDescription">Are You three? <br/>Players control a single cube through a maze. In order to move the cube players must agree unanimously on a direction to move.
        Tools: three.js, WebGL, socket.io, Express, Node
        </div>
        
        
        </div>
        <div className="project">
        
        <img src={BattleBitsBattle} className="projectImage"/>

        <div className="projectDescription">Project: battle bits <br/>Tools: JavaScript, React, Now <br/>Link:<Link to={'https://build-jtbxqhsfrb.now.sh/'}>BATTLEBITS</Link></div>
        
        
      </div>
        <div className="project">
        <img src={MystiqueBoutiqueCart} className="projectImage"/>
        <div className="projectDescription">Project: Online retail store featuing fantastic beasts. The prices are dicy and the products questionable, but gosh was it a good exercise in creating a CRUD application.
        <br/>
        Tools: Passport, google Oauth, Postgress,redux, redux,react-redux, sequelize, axios,socket.io
        <br/>
        <a className="projectDescription" href={' https://mysti-bouti.herokuapp.com/'}>Mysti-Bouti!</a>
        <br/>
        <a className="projectDescription" href={' https://github.com/The-Power-Store/Level-Up'}>Github Page</a>
        </div>
        
      </div>
      <div className="project">
        <img src={AreYouAliveLogo} className="projectImage"/>
        <div className="projectDescription">
        Project: One player controls a dot which swims amongs other computer controlled dots. The second player must determine which dot is a person before a timer runs out. 
        <br/>
        Tools: phaser.js, babel, bootstrap, socket.io, webpacks, socket.io-cookie-parser
        </div>
       </div>
      </div>
    );
  }
}
