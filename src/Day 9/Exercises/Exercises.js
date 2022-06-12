import React from "react";
import './Day_9.css';

export default class ChangebgByTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: new Date().getHours()
        };
    }

    render() {
        let divs;
        if (this.state.hours < 12) {
            divs = <div style={{ backgroundColor: '#be3cc5', color: 'white', width: '100%' }}>
                <h1>Good Morning</h1>
            </div>
        } else if (this.state.hours < 18) {
            divs = <div style={{ backgroundColor: '#59d402', color: 'white', width: '100%' }}>
                <h1>Good Afternoon</h1>
            </div>
        } else {
            divs = <div style={{ backgroundColor: '#350952', color: 'white', width: '100%' }}>
                <h1>Good Evening</h1>
            </div>
        }
        return (
            <div className="c2Wraper">
                {divs}
            </div>
        )
    }
}

