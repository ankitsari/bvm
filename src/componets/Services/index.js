import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
                <section id="services" className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Services</h2>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="service-box text-center">
                                         <span className="fa-stack fa-4x">
                                               <i className="fa fa-circle fa-stack-2x text-primary"/>
                                               <i className="fa fa-laptop fa-stack-1x fa-inverse"/>
                                         </span>
                                    <div className=" text-center">
                                        <h4><a href="#">Web Development</a></h4>
                                        <p>
                                            It is our motto that lets our services speak for us.
                                            We offer great web development solutions using the most advanced tools and technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="service-box text-center">
                                     <span className="fa-stack fa-4x">
                                           <i className="fa fa-circle fa-stack-2x text-primary"/>
                                           <i className="fa fa-android fa-stack-1x fa-inverse"/>
                                     </span>
                                    <div className=" text-center">
                                        <h4><a href="#">Android Development</a></h4>
                                        <p>
                                            We have developed several apps for Android phones.
                                            Whether you need an Android app for personal purpose or professional, we can create a feature-rich app with satisfying user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="service-box text-center">
                                      <span className="fa-stack fa-4x">
                                           <i className="fa fa-circle fa-stack-2x text-primary"/>
                                           <i className="fa fa-apple fa-stack-1x fa-inverse"/>
                                      </span>
                                    <div className=" text-center">
                                        <h4><a href="#">iOS Development</a></h4>
                                        <p>
                                            We design & develop user-friendly and feature-rich iPhone apps according to the client's requirements.
                                            Our developer develop apps for the latest version of iPhone and app will also compatible with the previous versions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );

    }
}
export default Services;
