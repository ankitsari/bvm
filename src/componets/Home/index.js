import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header id="header-wrap">
                    <div id="sliders">
                        <div className="full-width">
                            <div id="light-slider" className="carousel slide">
                                <div id="carousel-area">
                                    <div id="carousel-slider" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carousel-slider" data-slide-to="0"></li>
                                            <li data-target="#carousel-slider" data-slide-to="1"></li>
                                            <li data-target="#carousel-slider" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <img src="img/slider/sl1.jpg" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="img/slider/489656.jpg" alt=""/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src="img/slider/sl3.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carousel-slider" role="button"
                                           data-slide="prev">
                                            <i className="fa fa-chevron-left"></i>
                                        </a>
                                        <a className="carousel-control-next" href="#carousel-slider" role="button"
                                           data-slide="next">
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );

    }
}

export default Home;
