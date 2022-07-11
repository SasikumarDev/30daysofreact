import React, { Component } from "react";


class HexColorGen extends Component {
    inputRef = React.createRef(null);
    divRef = React.createRef(null);
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        };
    }

    generateColor = () => {
        let len = parseInt(this.inputRef.current.value);
        var arr = new Array(len).fill("0");
        arr.forEach((v, i) => {
            let gen = Math.floor(Math.random() * 16777215).toString(16);
            arr[i] = '#' + gen;
        });
        this.setState({ colors: arr });
    }

    copyColorCode = (code) => {
        navigator.clipboard.writeText(code).then((x) => {
            alert('Copided');
        });
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', paddingBottom: '0.5rem' }} >
                    <input ref={this.inputRef} autoComplete="off" style={{
                        WebkitAppearance: 'textfield',
                        padding: '0.5rem', outline: 'none',
                        borderRadius: '0.3rem', border: '0', width: '70%'
                    }} type="number" />
                    <button type="button" style={{
                        display: 'flex',
                        alignItems: 'center', padding: '0.5rem',
                        borderRadius: '0.2rem', outline: 'none',
                        border: '0', cursor: 'pointer', backgroundColor: '#5344a4', color: 'white'
                    }} onClick={this.generateColor} >Generate</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '0.4rem', paddingBottom: '0.5rem' }} >
                    {
                        this.state.colors.map((v, i) => (
                            <div key={i} style={{
                                backgroundColor: v,
                                minHeight: '150px', alignItems: 'center',
                                padding: '0.3rem', borderRadius: '0.3rem', display: 'flex',
                                justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'column'
                            }} ref={this.divRef} >
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }} > {v}</p>
                                <button type="button" onClick={() => this.copyColorCode(v)} style={{
                                    display: "flex", padding: '0.3rem',
                                    border: '0px', outline: '0', alignItems: "center", cursor: 'pointer'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default HexColorGen;