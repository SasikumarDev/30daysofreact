import React, { Component } from "react";
import { AppContextProvider } from "./Context/AppContext";
import Country from "./Country";

export default class NavBarContext extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppContextProvider>
                <div style={{ display: 'flex', flex: ' 1 1 100%', background: 'linear-gradient(320deg,#f27121,#e94057,#8a2387)',padding:'0.5rem' }} >
                    <Country />
                </div>
            </AppContextProvider>
        )
    }
}