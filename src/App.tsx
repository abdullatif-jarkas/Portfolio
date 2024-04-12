import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainBg1 from './assets/imgs/bg-1.png'
import MainBg2 from './assets/imgs/bg-2.png'
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
      <header>
        <img className='main-bg-1' src={MainBg1} alt="main-bg" />
        <img className='nav-plot' src={NavPlot} alt="nav-plot" />
        <Navbar links={links} />
        <Hero name="Abdullatif Jarkas" job="Engineer + Junior Front-end Developer" />
      </header>
      <main>
        <img className='about-me-bg' src={MainBg2} alt="" />
        <AboutMe text='An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.' />
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
