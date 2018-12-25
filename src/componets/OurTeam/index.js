import React, {Component} from 'react';

class OurTeam extends Component {
    render() {

        return (

            <section id="team" className="contact-form" style={{paddingTop: "25px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Team</h2>
                        </div>
                    </div>
                    <div className="container-fluid fix-cont">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="slider_in">
                                    <div id="owl-carousel" className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="https://hubstaff-talent.s3.amazonaws.com/avatars/023507325b621c20ce109aec76a41503"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="img/team/vinit.png"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="img/team/bhavinbhai.jpg"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="img/team/nikul.png"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="img/team/jaldip.png"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="img_wrp">
                                                <img
                                                    src="img/team/ankesh.png"
                                                    width="300px" height="200px" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
            ;

    }
}

export default OurTeam;



