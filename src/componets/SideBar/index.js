import React,{Component} from "react";

class SideBar extends Component {

    render(){
        return(
            <div className="icon-bar" style={{right:0}}>
                <a href="https://www.facebook.com/bvminfotechsurat" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
                {/*<a href="#" className="twitter"><i className="fa fa-twitter"></i></a>*/}
                <a href="#" className="google" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6479631129476456448" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
                {/*<a href="#" className="youtube"><i className="fa fa-youtube"></i></a>*/}
            </div>
        )
    }

}
export default SideBar;