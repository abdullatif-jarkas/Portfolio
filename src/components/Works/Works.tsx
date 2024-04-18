import { FaGithub } from 'react-icons/fa'
import SectionImg from '../SectionImg/SectionImg'
import Slider from '../Slider/Slider'
import CodeImg from './../../assets/imgs/code-bg.png'
import WorksPlot from './../../assets/imgs/works-plot.svg'
import './Works.css'

const Works = () => { 
  const slidesArray = [
    {
      title: "Simon Game",
      text: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
      icon: <FaGithub />,
      link: '',
    },
    {
      title: "Simon Game",
      text: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
      icon: <FaGithub />,
      link: '',
    },
    {
      title: "Simon Game",
      text: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
      icon: <FaGithub />,
      link: '',
    },
    {
      title: "Simon Game",
      text: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
      icon: <FaGithub />,
      link: '',
    },
    {
      title: "Simon Game",
      text: "An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion. ",
      icon: <FaGithub />,
      link: '',
    },
  ]
  return (
    <section className='works container row' id='works' >
      <img className='works-plot' src={WorksPlot} alt="works-plot" />
      <div className="col-4">
        <SectionImg mainImg={CodeImg} />
      </div>
      <div className="col-6">
        <h2>Works</h2>
        <SectionImg mainImg={CodeImg} />
        <div className="slider-section">
          <Slider slides={slidesArray} />
        </div>
      </div>
    </section>
  )
}

export default Works