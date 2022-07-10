import React, { createContext } from "react";
import get from "../../../Services/HttpService";

const AppContext = createContext();

class AppContextProvider extends React.Component {

    state = {
        user: {},
        cart: [],
        country: []
    }

    componentDidMount() {
        get('https://restcountries.com/v3.1/all').then((x) => {
            this.setCountry(x.data);
        }).catch((er) => {
            console.log(er);
        });
    }

    setCountry = (data) => {
        this.setState({ ...this.state, country: data });
    }

    render() {
        const { children } = this.props
        return (
            <AppContext.Provider value={{ st: this.state, updateCountry: this.setCountry }} >
                {children}
            </AppContext.Provider>
        )
    }
}

export default AppContext;
export { AppContextProvider }