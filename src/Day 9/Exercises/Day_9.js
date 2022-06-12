import React from "react";
import './Day_9.css';
import logo from '../.././logo.svg';


export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            islogged: this.props.logged,
            loggedUser: { Name: 'SA' }
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ islogged: !this.state.islogged });
    }

    render() {
        let userProfile;
        if (!this.state.islogged) {
            userProfile = <div>
                <button type="button" className="btnLogin" onClick={this.handleLoginClick} >Login</button>
            </div>
        } else {
            userProfile = <div className="rightDiv">
                <div>
                    {this.state.loggedUser.Name}
                </div>
                <div>
                    <button type="button" className="btnLogin" onClick={this.handleLoginClick} >Logout</button>
                </div>
            </div>
        }
        return (
            <nav className="navWrapper">
                <div className="navtitle" >
                    <div>
                        <img src={logo} alt="title" className="imgTitle" />
                    </div>
                    <div>
                        Nav-Bar
                    </div>
                </div>
                {userProfile}
                
                {/* {!this.state.islogged && (
                    <div>
                        <button type="button" className="btnLogin" onClick={this.handleLoginClick} >Login</button>
                    </div>
                )}
                {this.state.islogged && (
                    <div className="rightDiv">
                        <div>
                            {this.state.loggedUser.Name}
                        </div>
                        <div>
                            <button type="button" className="btnLogin" onClick={this.handleLoginClick} >Logout</button>
                        </div>
                    </div>
                )} */}
            </nav>
        )
    }
}