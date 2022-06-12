import React from "react";
import HTML from '../../html.png';
import css from '../../css.png';
import js from '../../js.png';
import './Exercise.css';
import profile from '../../logo.svg';

function Exercise1() {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#D6E5E3',
        padding: '1rem',
        justifyContent: 'space-evenly'
    }
    const techimgStyle = {
        height: '100px',
        width: '100px'
    }
    const techs = [{ item: 'HTML', Url: HTML }, { item: 'CSS', Url: css }, { item: 'Js', Url: js }]
    const techItems = techs.map((x) => <div key={x.item}><img src={x.Url} alt={x.item} style={techimgStyle} /></div>)
    return (
        <div style={wrapperStyle} >
            {techItems}
        </div>
    )
}

export function Exercise2() {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#A0EADE',
        padding: '1rem',
        justifyContent: 'center',
        borderRadius: '0.8rem',
        marginTop: '0.5rem',
        flexWrap: 'wrap'
    }

    const divCol = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const formHolder = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap'
    }

    const formTextbox = {
        height: '35px',
        borderRadius: '0.4rem',
        border: '0px transparent',
        outline: 'none',
        padding: '0.5rem',
        fontSize: '1.5rem'
    }

    const btnSubBtn = {
        width: '250px',
        padding: '1rem',
        borderRadius: '0.4rem',
        outline: 'none',
        border: '0px transparent',
        cursor: 'pointer',
        fontSize: '1.5rem',
        fontWeight: 'bolder',
        backgroundColor: '#DA4167',
        color: 'white'
    }

    return (
        <div style={wrapperStyle} >
            <div style={divCol} >
                <h4>Subscribe</h4>
                <p>Sign up with your address to receive news and updates.</p>
                <div style={formHolder} >
                    <input type="text" placeholder="Firstname" style={formTextbox} autoComplete="off" />
                    <input type="text" placeholder="Lastname" style={formTextbox} autoComplete="off" />
                    <input type="email" placeholder="Email" style={formTextbox} autoComplete="off" />
                </div>
                <button type="button" style={btnSubBtn} >Subscribe</button>
            </div>
        </div>
    )
}

export function Exercise3() {
    const skills = ['HTML', 'CSS', 'Javascript', 'C#', 'Asp.net', 'Asp.net Core', 'Web API', 'Angular', 'Python', 'Docker','Pandas','MSSQL','Oracle','MongoDB','Git','Typescript'];
    const SkillsItem = skills.map((x) => <div key={x} className="skillsDiv" >{x}</div> )
    return (
        <div className="wrapper">
            <div className="profileCard" >
                <div className="details">
                    <div className="pimg" >
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="usrName">
                        Sasikumar Muthusamy
                    </div>
                    <div className="usrRole">
                        Senior Developer, India
                    </div>
                </div>
                <div>
                    <h4>Skills</h4>
                </div>
                <div className="skillWrapper">
                    {SkillsItem}
                </div>
                <div className="usrRole">
                    <p>Joined on Apr 06, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Exercise1;