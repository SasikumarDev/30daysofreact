import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cats from "./Components/Cats";
import './nav.css'

export default class ReactRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <nav className="nav">
                    <div>
                        <h1>30 Days of React</h1>
                    </div>
                    <div className="navLinkHolder">
                        <ul className="ul">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Cats"  >Cats</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div style={{ marginTop: '0.5rem' }} >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Cats' element={<Cats />} />
                    </Routes>
                </div>
            </React.Fragment>
        )
    }
}