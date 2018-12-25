import React, {Component} from 'react';

class PortFolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: [{
                type: "web",
                url: "img/portfolio/p3.jpg",
                title: "Project of Website",
                description: "Web"
            },
                {
                    type: "application",
                    url: "img/portfolio/p1.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "web",
                    url: "img/portfolio/p2.jpg",
                    title: "Project of Website",
                    description: "Web"
                },
                {
                    type: "application",
                    url: "img/portfolio/p4.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "web",
                    url: "img/portfolio/p5.jpg",
                    title: "Project of Website",
                    description: "Web"
                },
                {
                    type: "application",
                    url: "img/portfolio/p6.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "web",
                    url: "img/portfolio/p7.jpg",
                    title: "Project of Website",
                    description: "Web"
                },
                {
                    type: "application",
                    url: "img/portfolio/p8.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "web",
                    url: "img/portfolio/p9.jpg",
                    title: "Project of Website",
                    description: "Web"
                },
                {
                    type: "application",
                    url: "img/portfolio/p10.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "application",
                    url: "img/portfolio/p11.jpg",
                    title: "Project of Application",
                    description: "Application"
                },
                {
                    type: "web",
                    url: "img/portfolio/p12.jpg",
                    title: "Project of Website",
                    description: "Web"
                }]
        }
    }

    render() {

        return (
                <section id="portfolio" className="section-padding" style={{paddingTop: "25px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">
                                    Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="controls text-center wow fadeInUpQuick" data-wow-delay=".6s">
                                    <a className="filter active btn btn-common" data-filter="all">
                                        All
                                    </a>
                                    <a className="filter btn btn-common" data-filter=".web">
                                        Web
                                    </a>
                                    <a className="filter btn btn-common" data-filter=".application">
                                        Application
                                    </a>
                                </div>
                            </div>
                            <div id="portfolio" className="row wow fadeInUpQuick" data-wow-delay="0.8s"
                                 style={{paddingTop: "25px"}}>
                                {
                                    this.state.portfolio.map((item,i) => (
                                            <div key={i} className={`col-lg-4 col-md-6 col-xs-12 mix ${item.type}`} >
                                                <div className="portfolio-item">
                                                    <div className="portfolio-img">
                                                        <img src={item && item.url} alt=""/>
                                                    </div>
                                                    <div className="portfoli-content">
                                                        <div className="sup-desc-wrap">
                                                            <div className="sup-desc-inner">
                                                                <div className="sup-link">
                                                                    <a className="left-link" href="#"> <i
                                                                        className="fa fa-laptop"/></a>
                                                                </div>
                                                                <div className="sup-meta-wrap">
                                                                    <a className="sup-title" href="#">
                                                                        <h4>{item.title}</h4>
                                                                    </a>
                                                                    <p className="sup-description">{item.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
        );

    }
}

export default PortFolio;
