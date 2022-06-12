import React from "react";
import get from "../../Services/HttpService";
import './Day_12.css';

export default class UserdetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                Firstname: '',
                Lastname: '',
                Email: '',
                Password: '',
                Dob: '',
                Country: '0',
            },
            errMsg: {},
            countryData: []
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        get('https://restcountries.com/v3.1/all').then((x) => {
            const cData = x.data.map((x) => {
                return { flag: x.flag, name: x.name.common, sh: x.cca3 }
            });
            this.setState({ countryData: cData });
        });
    }


    handleOnChange(e) {
        const { name, value } = e.target;
        const user = { ...this.state.user };
        user[name] = value;
        this.setState({ user });
    }

    handleSubmit(e) {
        e.preventDefault();
        const users = { ...this.state.user };
        for (let [key, value] of Object.entries(users)) {
            var errMsg = [];

            if (value.trim() === '') {
                errMsg.push(`${key} is Required`);
            }

            if (errMsg.length > 0) {
                this.setState({ errMsg: { [key]: errMsg, ...this.state.errMsg } });
            }
        }
    }

    render() {
        return (
            <div className="formWrapper">
                <form className="frm" onSubmit={this.handleSubmit} >
                    <div className="formGroup">
                        <label htmlFor="Firstname" className="formlabel" >FirstName</label>
                        <input type="text" className={this.state.errMsg["Firstname"] && this.state.errMsg["Firstname"].length > 0 ? 'formControl invalid' : 'formControl'}
                            name="Firstname" id="Firstname" placeholder="Firstname" autoComplete="off" value={this.state.user.Firstname} onChange={this.handleOnChange} required />
                        {
                            this.state.errMsg["Firstname"] && this.state.errMsg["Firstname"].length > 0 && (
                                this.state.errMsg["Firstname"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Lastname" className="formlabel" >LastName</label>
                        <input type="text" className={this.state.errMsg["Lastname"] && this.state.errMsg["Lastname"].length > 0 ? 'formControl invalid' : 'formControl'}
                            name="Lastname" id="Lastname" placeholder="Lastname" autoComplete="off" value={this.state.user.Lastname} onChange={this.handleOnChange} required />
                        {
                            this.state.errMsg["Lastname"] && this.state.errMsg["Lastname"].length > 0 && (
                                this.state.errMsg["Lastname"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Email" className="formlabel" >Email ID</label>
                        <input type="email" className={this.state.errMsg["Email"] && this.state.errMsg["Email"].length > 0 ? 'formControl invalid' : 'formControl'}
                            name="Email" id="Email" placeholder="Email" autoComplete="off" value={this.state.user.Email} onChange={this.handleOnChange} required />
                        {
                            this.state.errMsg["Email"] && this.state.errMsg["Email"].length > 0 && (
                                this.state.errMsg["Email"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Password" className="formlabel" >Password</label>
                        <input type="password" className={this.state.errMsg["Password"] && this.state.errMsg["Password"].length > 0 ? 'formControl invalid' : 'formControl'}
                            name="Password" id="Password" placeholder="Password" autoComplete="off" value={this.state.user.Password} onChange={this.handleOnChange} required />
                        {
                            this.state.errMsg["Password"] && this.state.errMsg["Password"].length > 0 && (
                                this.state.errMsg["Password"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Dob" className="formlabel" >Dob</label>
                        <input type="date" className={this.state.errMsg["Dob"] && this.state.errMsg["Dob"].length > 0 ? 'formControl invalid' : 'formControl'}
                            name="Dob" id="Dob" placeholder="DOB" autoComplete="off" value={this.state.user.Dob} onChange={this.handleOnChange} required />
                        {
                            this.state.errMsg["Dob"] && this.state.errMsg["Dob"].length > 0 && (
                                this.state.errMsg["Dob"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div className="formGroup">
                        <label htmlFor="Country" className="formlabel" >Country</label>
                        <select id="Country" required name="Country"
                            className={this.state.errMsg["Country"] && this.state.errMsg["Country"].length > 0 ? 'formControl invalid' : 'formControl'}
                            value={this.state.user.Country} onChange={this.handleOnChange} >
                            <option value="0" >--Select--</option>
                            {
                                this.state.countryData.map((d, i) =>
                                    <option key={i} value={d.sh} >{d.flag + ' ' + d.name}</option>
                                )
                            }
                        </select>
                        {
                            this.state.errMsg["Country"] && this.state.errMsg["Country"].length > 0 && (
                                this.state.errMsg["Country"].map((err, indx) =>
                                    <span key={indx} className="errMsg">{err}</span>
                                )
                            )
                        }
                    </div>
                    <div>
                        <button type="submit" className="btnSubmit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}