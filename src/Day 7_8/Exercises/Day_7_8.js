import React from "react";
import './Day_7_8.css';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: this.props.user,
            Styles: this.props.styles
        };
    }

    render() {
        return (
            <div className="Wrapper">
                {
                    <div className="userDetailsCard" style={{ backgroundColor: this.props.styles.backgroundColor, color: this.props.styles.color }} >
                        <div className="CardHeader">
                            <img src={this.state.User.pf} alt="user profile" />
                            <p>{this.state.User.Fisrtname}{' '}{this.state.User.Lastname}{', '}{this.state.User.Role}</p>
                        </div>
                        <div className="skillWrapper">
                            {
                                this.state.User.skills.map((tech, ind) =>
                                    <div className="skill" key={ind} style={{ backgroundColor: this.props.styles.backgroundColor, color: this.props.styles.color, border: '1px solid ' + this.props.styles.color }} >
                                        {tech}
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <button onClick={this.props.changeBg} className="btn" style={{ backgroundColor: this.props.styles.backgroundColor, color: this.props.styles.color, border: '1px solid ' + this.props.styles.color }} >Change Background</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


export class RandomGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            User: this.props.users[0],
            users: this.props.users
        };
        this.randomUsergenerator = this.randomUsergenerator.bind(this);
    }

    randomUsergenerator() {
        console.log(this.props.users.length)
        var ran = Math.random(this.props.users.length - 1);
        var usr = this.props.users[Math.ceil(ran)];
        this.setState({ User: usr });
    }

    render() {
        return (
            <div>
                <div>{this.state.User.Fisrtname}</div>
                <button onClick={this.randomUsergenerator} >Select User</button>
            </div>
        )
    }
}

export default React.memo(UserProfile);