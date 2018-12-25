import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import About from "./componets/About/index";
import Contectus from "./componets/Contectus/index";
import Footer from "./componets/Footer/index";
import Header from "./componets/Header/index";
import Home from "./componets/Home/index";
import PortFolio from "./componets/Portfolio/index";
import Services from "./componets/Services/index";
import Skill from "./componets/Skill/index";
import Career from "./componets/Career/index";
import MapLocation from "./componets/MapLocation/index";
import OurApplication from "./componets/OurApplication/index";
import SideBar from "./componets/SideBar";

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <Route>
                    <div>
                        <div>
                            <Header/>
                            <Home/>
                            <PortFolio/>
                            <Skill/>
                            <Services/>
                            {/*  <Clints/>*/}
                            {/*  <OurTeam/>*/}
                            <Career/>
                            <OurApplication/>
                            <About/>
                            <Contectus/>
                            <MapLocation/>
                            <Footer/>
                        </div>
                        <div>
                            <SideBar/>
                        </div>
                    </div>
                </Route>
            </Router>
        </div>
    );
  }
}

export default App;
