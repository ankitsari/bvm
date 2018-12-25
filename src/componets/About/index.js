import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">About Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-md-6 ">
                            <div className=" text-center item_bottom">
                                <img src="img/teamWork.png" className="img-center"  alt=""/>
                                <div className="name-title">
                                    <img src="img/bvmlogo.png" className="img-center" style={{paddingTop: "10px",width: "15%"}}  alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6 ">
                            <p  style={{marginTop:"15px"}}>
                                With continuous Innovation and Excellence, build solutions that change the way people work and live.
                            </p>
                            <p>
                                We are software development company and complete IT solution provider that focuses on providing highly qualitative, timely delivered and cost-effective client solutions. Our Key clients are loyal to us because we have volume up their business and has also spread it to world globally.
                            </p>
                            <p>
                                We currently working on lots of technologies like react js, node js, mongo Db, Angular Js, Android Development, iOS Development, PHP, ASP, Game Development. Our main motto is satisfy our client.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default About;
