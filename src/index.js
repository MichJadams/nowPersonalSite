import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {render} from 'react-dom'
import './style/index.css';
import Projects from './components/Projects.js';
// import Home from './components/Home.js';
import Statistics from './components/Statistics.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js'
import MainMenu from './components/MainMenu.js'

render(
    <div>
        <Router>
        <div>
    
        <Switch>
        <Route exact path="/" component={MainMenu} />
                    <Route path="/MainMenu" component={MainMenu} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Statistics" component={Statistics} />
                    <Route path="/Resume" component={Resume} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
                </div>
            </Router>
    </div>,
    document.getElementById('root'))
