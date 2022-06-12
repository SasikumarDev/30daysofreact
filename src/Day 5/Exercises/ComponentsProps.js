import React, { Component } from "react";
import './ComponentsProps.css';


class ComponentsProps extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div className="wrapper">
                {
                    this.props.data.map((x, i) =>
                        <div key={i} className="profileCard" >
                            <div className="details">
                                <div className="pimg" >
                                    <img src={x.pf} alt="profile" />
                                </div>
                                <div className="usrName">
                                    {x.Fisrtname}{' '}{x.Lastname}
                                </div>
                                <div className="usrRole">
                                    {x.Role}{', '}{x.Country}
                                </div>
                            </div>
                            <div>
                                <h4>Skills</h4>
                            </div>
                            <div className="skillWrapper">
                                {
                                    x.skills.map((x, ind) =>
                                        <div key={ind} className="skillsDiv" >{x}</div>
                                    )
                                }
                            </div>
                            <div className="usrRole">
                                <p>Joined on {x.joined}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ComponentsProps;

export const SubscribeForm = (props) => {
    const { welcomeNote, tile, subTitle, author } = props.data;
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center',
            backgroundColor: 'white', padding: '0.5rem', boxShadow: '0px 2px 2px 2px rgba(0,0,0,50%)', marginTop: '1rem',
            marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bolder', borderRadius: '0.5rem'
        }}>
            <p>{welcomeNote}</p>
            <p>{tile}</p>
            <p>{subTitle}</p>
            <p>{author.firstName}{' '}{author.lastName}</p>
        </div>
    )
}