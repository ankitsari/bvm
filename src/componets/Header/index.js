import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
                <header id="header-wrap">
                    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
                        <div className="container">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="icon-menu"></span>
                                    <span className="icon-menu"></span>
                                    <span className="icon-menu"></span>
                                </button>
                                <a href="index.html" className="navbar-brand"><img src="img/bvmlogo.png" style={{width: "50%"}} alt=""/></a>
                            </div>
                            <div className="collapse navbar-collapse" id="main-navbar">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#sliders">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#portfolio">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#skill">
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services">
                                            Services
                                        </a>
                                    </li>

                                    {/*<li className="nav-item">
                                        <a className="nav-link" href="#clients">
                                        Clients
                                        </a>
                                    </li>*/}
                                    {/*<li className="nav-item">
                                        <a className="nav-link" href="#team">
                                           Team
                                        </a>
                                    </li>*/}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#career">
                                            Careers
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#application">
                                            Our Application
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="mobile-menu navbar-nav">
                            <li>
                                <a className="page-scroll" href="#sliders">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="page-scroll" href="#services">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#skill">
                                    Skills
                                </a>
                            </li>
                            {/*<li>
                                <a className="page-scroll" href="#clients">
                                   Clients
                                </a>
                            </li>*/}
                            {/*<li>
                                <a className="page-scroll" href="#team">
                                   Team
                                </a>
                            </li>*/}
                            <li>
                                <a className="page-scroll" href="#career">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#application">
                                  Our Application
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </nav>
                </header>
            
        );
    }
}
export default Header;
