import React, { Component } from 'react';

class Skill extends Component {
    constructor(props){
        super(props);
        this.state ={
            skill :[{
                img:"img/skill/react.png",
                languageName:"React Js",
                alt:"reactJs",
                description:"We use react js for develop responsive frontend of our client's Websites.",
            },{
                img:"img/skill/vue.png",
                languageName:"Vue Js",
                alt:"vue",
                description:"We use vue js for develop responsive frontend of our client's Websites."
            },{
                img:"img/skill/angular.png",
                languageName:"Angular Js",
                alt:"angular",
                description:"We use angular js for develop responsive frontend of our client's Websites."
            },{
                img:"img/skill/node.png",
                languageName:"node Js",
                alt:"node",
                description:"We use node Js for develop and maintain backend of website with mongoDb."
            },{
                img:"img/skill/mongodb.png",
                languageName:"mongo Db",
                alt:"mongo",
                description:"We use mongo Db for develop and maintain backend of website."
            },{
                img:"img/skill/laravel.png",
                languageName:"Laravel",
                alt:"laravel",
                description:"We use Laravel for develop & maintain apis and backend of our client's website."
            },{
                img:"img/skill/androida.png",
                languageName:"Android",
                alt:"android",
                description:"We Develop various Android Applications according to our client's requirement."
            },{
                img:"img/skill/ios.png",
                languageName:"iOS",
                alt:"ios",
                description:"We Develop various ios web and native applications for users."
            },{
                img:"img/skill/react-native-800x450.png",
                languageName:"React Native",
                alt:"reactNative",
                description:"We develop native application using ReactNative according to our client's requirement."
            }]
        }
    }

    render() {
        return (
            <div id="skill" style={{paddingTop:"25px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="section-title wow fadeInDown animated" data-wow-delay="0.3s">Our Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.skill.map((item, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-xs-12">
                                        <div className="featured-box-item">
                                            <div className="featured-icon" style={{border: "1px solid"}}>
                                                <img src={item.img} alt={item.alt} style={{width: '70px', height: '70px', margin: 0, verticalAlign: 'top'
                                                }}/>
                                            </div>
                                            <div className="featured-content">
                                                <h4>{item.language}</h4>
                                                <p> {item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )

                        }

                    </div>
                </div>
            </div>
        );

    }
}
export default Skill;
