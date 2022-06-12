import React from "react";

export default class EventsComponent extends React.Component {
    data = [
        { Text: 'Admin', Value: 'A' },
        { Text: 'User', Value: 'U' }
    ];
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            FirstName: '',
            LastName: '',
            Role: ''
        };
        this.handleMouseEvent = this.handleMouseEvent.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnPaste = this.handleOnPaste.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleMouseEvent(e) {
        this.setState({ x: e.screenX, y: e.screenY });
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Role' && (value === '0' || value === '')) {
            console.log('Role cannot be Empty');
            return false;
        }
        this.setState({
            [name]: value
        });
    }

    handleOnPaste = (e) => {
        e.preventDefault();
        return false;
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div style={{ minHeight: '10rem', padding: '1rem' }} onMouseMove={this.handleMouseEvent} >
                <div style={{ fontSize: '2rem', fontWeight: 'bolder', backgroundColor: 'navy', color: 'white', cursor: 'pointer' }} >30 Days of React {'X : ' + this.state.x}{' Y : ' + this.state.y}</div>
                <form onSubmit={this.handleFormSubmit} >
                    <input type="text" value={this.state.FirstName} name="FirstName" autoComplete="off" placeholder="Firstname" onChange={this.handleOnChange} onPaste={this.handleOnPaste} />
                    <input type="text" value={this.state.LastName} name="LastName" autoComplete="off" placeholder="Lastname" onChange={this.handleOnChange} onPaste={this.handleOnPaste} />
                    <select name="Role" onChange={this.handleOnChange} >
                        <option value="0">--Select--</option>
                        {
                            this.data.map((v, i) =>
                                <option key={i} value={v.Value} >{v.Text}</option>
                            )
                        }
                    </select>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        )
    }
}