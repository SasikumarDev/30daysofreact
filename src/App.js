import logo from './logo.svg';
import './App.css';
import Exercise1, { Exercise2, Exercise3 } from './Day3/Exercise1/Exercise1';
import { ColorComponent, SkillSets } from './Day 4/Exercises/FunctionalComp';
import ComponentsProps, { SubscribeForm } from './Day 5/Exercises/ComponentsProps';
import { ColorGeneratorL, NumberGenerator, PopulationGenerator } from './Day 6/Exercises/Day_6';
import { Component } from 'react';
import UserProfile, { RandomGenerator } from './Day 7_8/Exercises/Day_7_8';
import NavBar from './Day 9/Exercises/Day_9';
import ChangebgByTime from './Day 9/Exercises/Exercises';
import EventsComponent from './Day 11_12/Exercises/Day_11';
import UserdetailComponent from './Day 11_12/Exercises/Day_12';
import CountryComponent, { TweetComponent } from './Day 11_12/Exercises/Country';

const headerStyle = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 1,
  lineHeight: 1.2
}

const mainStyle = {
  backgroundColor: '#FF934F',
  color: 'white',
  padding: '1rem',
  fontSize: '2rem',
  fontWeight: 'bolder'
}

const footerStyle = {
  bottom: 0,
  backgroundColor: '#21897E',
  padding: '1rem'
}

const skills = ['HTML', 'CSS', 'Javascript', 'C#', 'Asp.net', 'Asp.net Core', 'Web API', 'Angular', 'Python', 'Docker', 'Pandas', 'MSSQL', 'Oracle', 'MongoDB', 'Git', 'Typescript'];
const users = [{ Fisrtname: 'Sasikumar', Lastname: 'Muthusamy', Role: 'Senior Developer', Country: 'India', pf: logo, joined: 'Apr 06, 2022', skills: skills },
{ Fisrtname: 'Asabeneh', Lastname: 'Yeteyeh', Role: 'Senior Developer', Country: 'Finland', pf: logo, joined: 'Aug 10, 2020', skills: skills.slice(0, 4) }]
const welcomeNote = 'Welcome to 30 Days Of React';
const tile = 'Getting Started React';
const subTitle = 'JavaScript Library';
const author = {
  firstName: 'Sasikumar',
  lastName: 'Muthusamy',
}
const date = 'Oct 2, 2020'
const Data = {
  welcomeNote,
  tile,
  subTitle,
  author
}

const Headers = () => (
  <header style={headerStyle} >
    <h1>{welcomeNote}</h1>
    <h2>{tile}</h2>
    <h3>{subTitle}</h3>
    <div>
      <p>Instructor : {author.firstName} {author.lastName}</p>
    </div>
    <small>{date}</small>
  </header>
)

const techs = ['HTML', 'CSS', 'JS'];
const tecLists = techs.map((x) => <li key={x} >{x}</li>);

const main = (
  <main style={mainStyle} >
    <p>Prerequisite to get started {' '} <strong><em>react.js</em></strong>:</p>
    <ul>
      {tecLists}
    </ul>
  </main>
)
/*Functional Component */
const Footer = () => (
  <footer style={footerStyle} >
    <p>Copyright&nbsp;{new Date().getFullYear()}</p>
  </footer>
)
class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      count: 0,
      style: {
        backgroundColor: 'white',
        color: 'black'
      },
      user: users[0],
      isLogged: false
    }
    this.changeBackgroundcolor = this.changeBackgroundcolor.bind();
  }

  changeBackgroundcolor = () => {
    if (this.state.style.backgroundColor === 'black') {
      this.setState({ style: { backgroundColor: 'white', color: 'black' } })
    } else {
      this.setState({ style: { backgroundColor: 'black', color: 'white' } })
    }
  }

  render() {
    return (
      <div className="App" >
        <Headers />
        {main}
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <hr />
        <h3>Day 4</h3>
        <ColorComponent />
        <SkillSets />
        <hr />
        <h3>Day 5 - Component and Props</h3>
        <ComponentsProps data={users} />
        <SubscribeForm data={Data} />
        <hr />
        <h3>Day 6 - Map,List and Key</h3>
        <NumberGenerator />
        <ColorGeneratorL />
        <PopulationGenerator />
        <hr />
        <h3>Day 7,8 - Class Component,Props and State</h3>
        <UserProfile changeBg={this.changeBackgroundcolor} user={this.state.user} styles={this.state.style} />
        <RandomGenerator users={users} />
        <hr />
        <h3>Day 9 - Conditional Rendering</h3>
        <NavBar logged={this.state.isLogged} />
        <ChangebgByTime />
        <hr />
        <h3>Day 11 - Events and Forms</h3>
        <EventsComponent />
        <UserdetailComponent />
        <CountryComponent />
        <TweetComponent />
        <Footer />
      </div>
    );
  }

}
export default App;
