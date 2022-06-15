import React from "react";
import get from "../../../Services/HttpService";
import './Cats.css';

export default class Cats extends React.Component {

    allURL = 'https://api.thecatapi.com/v1/breeds';
    singleCat = 'https://api.thecatapi.com/v1/images/search?breed_id=';

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterData: []
        };
        this.filterbyCountry = this.filterbyCountry.bind(this);
    }

    componentDidMount() {
        get(this.allURL).then((x) => {
            this.setState({ data: x.data, filterData: x.data });
        });
    }

    filterbyCountry(val) {
        var data = this.state.data.filter((x) => x.origin === val);
        this.setState({ filterData: data });
    }

    render() {
        return (
            <div className="catsWrapper">
                {
                    this.state.data.length > 0 && (
                        <Filterdiv data={this.state.data} click={this.filterbyCountry} />
                    )
                }
                {
                    this.state.data.length > 0 && (
                        this.state.filterData.map((x, i) =>
                            <div key={i} className="catsDivcol">
                                <Catcard data={x} />
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

function Catcard(props) {
    var imgs = props.data.image?.url;
    return (
        <div className="catCard">
            {
                imgs && (
                    <div className="catImagediv">
                        <img src={imgs} className="catImg" alt={props.data.name} loading="lazy" />
                    </div>
                )
            }
            <div className="catDetails">
                <p>
                    {props.data.name}
                </p>
                <p>
                    {props.data.origin}
                </p>
                <p>
                    Temperament : {props.data.temperament}
                </p>
                <p>
                    Life Span: {props.data.life_span}
                </p>
                <p>
                    Weight: {props.data.weight?.metric}
                </p>
                <p>
                    Description
                </p>
                <p>
                    {props.data.description}
                </p>
            </div>
        </div>
    )
}


function Filterdiv(props) {
    const data = props.data.map((c) => {
        return c.origin;
    }).map((x) => {
        var count_ = props.data.filter((d) => d.origin === x).length;
        return { name: x, count: count_ };
    });

    var _rsult = [];
    data.filter((x) => {
        var ind = _rsult.findIndex(d => d.name === x.name);
        if (ind <= -1) {
            _rsult.push(x);
        }
        return null;
    });

    return (
        <div className="btnWraper">
            {
                _rsult.map((x, i) =>
                    <button key={i} className="btnCountry" onClick={() => props.click(x.name)} >{x.name} ({x.count})</button>
                )
            }
        </div>
    )
}