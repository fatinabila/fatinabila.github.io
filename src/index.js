import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import HeaderComponent from './components/header' 
import AboutMeComponent from './components/aboutMe'
import SkillComponent from './components/skillsSet';
import ProjectsComponent from "./components/projects";
import BannerComponent from "./components/banner";
import HireComponent  from "./components/hireMe";
import FooterComponent from "./components/footer"

ReactDOM.render(<HeaderComponent/>, document.getElementById('header'))
ReactDOM.render(<AboutMeComponent/> , document.getElementById('aboutMe'))
ReactDOM.render(<SkillComponent/>, document.getElementById('SkillComponent'))
ReactDOM.render(<ProjectsComponent/>, document.getElementById("ProjectsComponent"))
ReactDOM.render(<BannerComponent/>, document.getElementById("BannerComponent"))
ReactDOM.render(<HireComponent/>, document.getElementById('HireComponent'))
ReactDOM.render(<FooterComponent/>, document.getElementById('FooterComponent'))


serviceWorker.unregister();
