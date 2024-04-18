import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainBg3 from './assets/imgs/bg-3.png'
import NavPlot from './assets/imgs/nav-plot.svg'
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';

function App() {

  const links = [
    {
      text: "Home",
      active: true,
      id: "home",
    },
    {
      text: "About",
      active: false,
      id: "about",
    },
    {
      text: "Skills",
      active: false,
      id: "skills",
    },
    {
      text: "Works",
      active: false,
      id: "works",
    },
    {
      text: "Contact",
      active: false,
      id: "contact",
    },
  ];

  return (
    <>
      <header id='home'>
        <img className='nav-plot' src={NavPlot} alt="nav-plot" />
        <Navbar links={links} />
        <Hero name="Abdullatif Jarkas" job="Engineer + Junior Front-end Developer" />
      </header>
      <main>
        <AboutMe text='A highly motivated Informatics Engineering student at Tishreen University, specializing in front-end development. With a strong background in leading frontend teams and a passion for creating visually appealing and user-friendly interfaces' />
        <img className='skills-bg-img' src={MainBg3} alt="main-bg-3" />
        <Skills />
        <Works />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}

export default App
