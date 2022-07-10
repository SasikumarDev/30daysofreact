import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

const styles = {
    Wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        background: 'transparent',
        flexWrap: 'wrap'
    },
    Card: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        background: 'rgba(255,255,255,25%)',
        boxShadow: '0px 2px 2px 2px rgba(255,255,255,25%)',
        fontFamily: 'monospace',
        padding: '0.4rem',
        borderRadius: '0.3rem',
        minHeight: '150px',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,20%)',
        flex: '0 0 20%'
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 'clamp(1rem,1rem,1.5rem)',
        fontWeight: 'bold'
    }
}

export default function Country() {
    const ctx = useContext(AppContext);
    const { country } = ctx.st;
    let data;
    if (country.length > 0) {
        data = (
            country.map((d, i) =>
                <CountryCard data={d} ind={i} />
            )
        )
    } else {
        data = (<p>No Data Found</p>);
    }
    return (
        <div>
            <div style={styles.Wrapper} >
                {data}
            </div>
            <Stats data={country} />
        </div>
    )
}

function CountryCard(props) {
    const { data, ind } = props;
    const { population, name, flags, continents, capital } = data;
    return (
        <div key={ind} style={styles.Card} >
            <div style={styles.cardHeader} >
                {name.official}
            </div>
            <div style={{ display: 'flex', flex: '1 1 100%' }} >
                <img src={flags.png} alt={name.official} style={{ width: 'fit-content' }} loading="lazy" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }} >
                <b>Capital: {capital}</b>
                <b>Population: {population}</b>
                <b>Continent: {continents}</b>
            </div>
        </div>
    )
}

function Stats(props) {
    const { data } = props;
    data.sort((a, b) => {
        return b.population - a.population;
    });
    const topPopulation = data.slice(0, 10);

    const formatNumber = (value) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value);
    }

    const calculateWidth = (indx) => {
        let midx = indx * 2;
        return (100 - midx) + '%';
    }

    return (
        <div style={{ display: 'flex',flexDirection:"column" }} >
            {
                topPopulation.map((d, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center',padding:"0.5rem" }} >
                        <div>
                            {d.name.official}
                        </div>
                        <div>
                            <div style={{ width: calculateWidth(i), backgroundColor: 'white' }} >
                                <p>{formatNumber(d.population)}</p>
                            </div>
                        </div>
                        <div>
                            {formatNumber(d.population)}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}