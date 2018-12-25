import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div id="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-xs-12 text-center">
                                    <img src="img/bvmlogo.png" style={{width:"8%"}} alt=""/>
                                    <p className=" text-center" style={{marginBottom:"0px"}}>All copyrights reserved © 2018</p>
                                </div>
                                {/*<div className="col-lg-6 col-md-6 col-xs-12">
                                    <ul className="nav nav-inline  justify-content-end ">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sitemap</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of services</a>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="#" className="back-to-top">
                    <i className="fa fa-arrow-up"/>
                </a>
                <div id="preloader">
                    <div className="loader" id="loader-1"/>
                </div>
            </div>
        );

    }
}

export default Footer;
