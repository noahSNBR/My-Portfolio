
import { useState } from 'react';
import './App.css';
import snap from './Images/snapchat.png';
import github from './Images/github.png';
import whatsapp from './Images/whatsapp.png';
import instagram from './Images/instagram.png';
import facebook from './Images/facebook.png';
import folder from './Images/folder.png';

import intro from './Intro';

export default function App() {
  const [heading, setHeading] = useState('My Portfolio')
  const [intoFont, setIntroFont] = useState('Show Intro');
  const [showIntro, setSHowIntro] = useState(false);

  const headingStyle = {
    fontSize: '2rem',
    color: '#9d4edd',
    textAlign: 'left',
    margin: '20px'
  }

  //components 
  const Header = (props) => {
    return (
      <>
        <p className='header'>{props.name}</p>
      </>
    );
  }
  const Contacts = () => {
    return (
      <div className='contacts'>
        <p style={headingStyle}> You can reach me on: </p>
        <div className='reachables'>
          <div className='snap'>
            <a href="https://msng.link/o/?noah.snbr=sc">
              <img src={snap} alt="Snapchat" />
              <p> Snapchat </p>
            </a>
          </div>
          <div className='github'>
            <a href="https://github.com/noahSNBR">
              <img src={github} alt="GitHub" />
              <p> GitHub </p>
            </a>
          </div>
          <div className='whatsapp'>
            <a href="https://wa.me/+49017640444260">
              <img src={whatsapp} alt="WhatsApp" />
              <p> WhatsApp </p>
            </a>
          </div>
          <div className='instagram'>
            <a href="https://www.instagram.com/noah.snbr/">
              <img src={instagram} alt="Instagram" />
              <p> Instagram </p>
            </a>
          </div>
          <div className='facebook'>
            <a href="http://www.facebook.com/noahsaschenbrecker">
              <img src={facebook} alt="facebook" />
              <p> Instagram </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const HorizontalDivider = (props) => {
    return (
      <div style={{ marginTop: 50 + 'px', width: props.width, border: props.border + 'px solid ' + props.color }}></div>
    );
  } //changes button
  function changeIntro() {
    setSHowIntro(!(showIntro));
    if (showIntro === true) {
      setIntroFont('Show Intro')
    } else {
      setIntroFont('Hide Intro')
    }
  }

  const Introduction = () => {
    return (
      <>
        <button className='readIntro' onClick={() => changeIntro()} > {intoFont} </button>
        <p style={{ textAlign: 'left', fontSize: '2em', margin: '10px' }} > {showIntro && intro} </p></>
    )
  }

  const Projects = () => {
    const Project = (props) => {
      return (
        <a href={props.link}>
          <div className='projFolder'>
            <img src={folder} alt="Folder Icon" />
            <p>{props.projectName}</p>
          </div>
        </a>
      );
    }

    return (
      <>
        <p style={headingStyle}> My Projects: </p>
        <div className="projects-container">
          <Project projectName='PushUpCoach-v1' link='https://github.com/noahSNBR/PushUpCoach-v1' />
          <Project projectName='PushUpCoach-v2' link='https://github.com/noahSNBR/PushUpCoach-v2' />
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <Header name={heading} />
      <Contacts />
      <HorizontalDivider width='100vw' border='1' color='#5a189a' />
      <Introduction />
      <HorizontalDivider width='100vw' border='1' color='#5a189a' />
      <Projects />
    </div>
  );
}