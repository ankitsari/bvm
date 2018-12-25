import React, {Component} from 'react';

class OurApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {

            }
         }

    onMouseOver = () =>{
       window.open("https://play.google.com/store/apps/details?id=com.artificialapps.photofactory.stickerfactory", "_blank")
    }

    render() {
        return (
            <section id="application" className="section-padding" style={{paddingTop: "25px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">
                                Our Application</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div id="application" className="row wow fadeInUpQuick" data-wow-delay="0.8s">
                            <div className={"col-lg-2 col-md-6 col-xs-12 mix"} />
                            <div className={"col-lg-2 col-md-6 col-xs-12 mix"} />
                            <div className={"col-lg-1 col-md-6 col-xs-12 mix"} />
                                        <div className={"col-lg-2 col-md-6 col-xs-12 mix"} >
                                            <div className="portfolio-item application">
                                                <div className="portfolio-img">
                                                    <img src= "img/application/a.webp" alt=""/>
                                                </div>
                                                <div className="portfoli-content application-content">
                                                    <div className="sup-desc-wrap">
                                                        <div className="sup-desc-inner">
                                                            <div className="sup-link application-link"  >
                                                                <a className="left-link" onMouseOver={this.onMouseOver} >
                                                                    <img src="img/playstore.png"/>
                                                                </a>
                                                            </div>
                                                            <div className="sup-meta-wrap">
                                                                <a className="sup-title application-title" >
                                                                    <h4>Photo Factory :<br/>Sticker Factory<br/>Artificial apps</h4>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            <div className={"col-lg-1 col-md-6 col-xs-12 mix"} />
                            <div className={"col-lg-2 col-md-6 col-xs-12 mix"} />
                            <div className={"col-lg-2 col-md-6 col-xs-12 mix"} />
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default OurApplication;
