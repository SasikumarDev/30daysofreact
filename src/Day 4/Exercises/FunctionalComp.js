import React from "react";
import './FunctComp.css';
import profile from '../../logo.svg';

const arr = new Array(10).fill(null);
console.log(arr)
const colorGenerator = () => {
    var gen = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + gen;
}

const renders = (index) => {
    var c = colorGenerator();
    return (
        <div key={index} className="coloredDiv" style={{ backgroundColor: c }} >{c}</div>
    )
}

export const ColorComponent = () => (
    arr.map((x, i) =>
        renders(i)
    )
)

export const SkillSets = () => {
    const skills = ['HTML', 'CSS', 'Javascript', 'C#', 'Asp.net', 'Asp.net Core', 'Web API', 'Angular', 'Python', 'Docker', 'Pandas', 'MSSQL', 'Oracle', 'MongoDB', 'Git', 'Typescript'];
    const users = [{ Fisrtname: 'Sasikumar', Lastname: 'Muthusamy', Role: 'Senior Developer', Country: 'India', pf: profile, joined: 'Apr 06, 2022', skills: skills },
    { Fisrtname: 'Asabeneh', Lastname: 'Yeteyeh', Role: 'Senior Developer', Country: 'Finland', pf: profile, joined: 'Aug 10, 2020', skills: skills.slice(0, 4) }]
    return (
        <div className="wrapper">
            {
                users.map((v, i) =>
                    <div key={i} className="profileCard" >
                        <div className="details">
                            <div className="pimg" >
                                <img src={v.pf} alt="profile" />
                            </div>
                            <div className="usrName">
                                {v.Fisrtname}{' '}{v.Lastname}
                            </div>
                            <div className="usrRole">
                                {v.Role}{', '}{v.Country}
                            </div>
                        </div>
                        <div>
                            <h4>Skills</h4>
                        </div>
                        <div className="skillWrapper">
                            {
                                v.skills.map((x, ind) =>
                                    <div key={ind} className="skillsDiv" >{x}</div>
                                )
                            }
                        </div>
                        <div className="usrRole">
                            <p>Joined on {v.joined}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
} 