import React from "react";
import './Day_6.css';

const arr = new Array(32).fill(null);

export const NumberGenerator = () => {
    return (
        <div className="NumberWrapper">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <h4>Number Generator</h4>
            </div>
            {
                arr.map((v, i) => OddEven(i))
            }
        </div>
    )
}

export const ColorGeneratorL = () => {
    return (
        <div className="NumberWrapper">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <h4>Color Generator</h4>
            </div>
            {
                arr.map((v, i) => ColorMethod(i))
            }
        </div>
    )
}

const ColorMethod = (index) => {
    var c = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var cStyle = {
        display: 'flex',
        padding: '2rem',
        color: 'white',
        fontWeight: 'bolder',
        alignItems: 'center',
        backgroundColor: c,
        flexDirection: 'row',
        flex: '0 1 6rem'
    }

    return (
        <div key={index} style={cStyle} >{c}</div>
    )
}


const OddEven = (value) => {

    const OddStyle = {
        display: 'flex',
        padding: '2rem',
        color: 'white',
        fontWeight: 'bolder',
        alignItems: 'center',
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flex: '0 1 6rem'
    }

    const EvenStyle = {
        display: 'flex',
        padding: '2rem',
        color: 'white',
        fontWeight: 'bolder',
        alignItems: 'center',
        backgroundColor: 'green',
        flexDirection: 'row',
        flex: '0 1 6rem'
    }

    if ((value % 2) === 0) {
        return (
            <div style={EvenStyle} key={value} >{value}</div>
        )
    }

    return (
        <div style={OddStyle} key={value} >{value}</div>
    )
}

const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]

const populationGraph = ({ country, population }) => {
    var fmt = new Intl.NumberFormat('en-US').format(population);
    return (
        <div key={country} style={{ display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }} >
            <div className="divCountryName">
                {country}
            </div>
            <div className="chartDiv" >

            </div>
            <div>
                {fmt}
            </div>
        </div>
    )
}

export const PopulationGenerator = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }} >
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} ><h3>World Population.</h3></div>
            {
                tenHighestPopulation.map((data, ind) => populationGraph(data))
            }
        </div>
    )
}