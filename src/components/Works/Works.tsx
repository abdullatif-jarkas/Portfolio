import { FaGithub } from 'react-icons/fa'
import SectionImg from '../SectionImg/SectionImg'
import Slider from '../Slider/Slider'
import CodeImg from './../../assets/imgs/code-bg.png'
import WorksPlot from './../../assets/imgs/works-plot.svg'
import './Works.css'

const Works = () => { 
  const slidesArray = [
    {
      title: "VILLA",
      text: "VILLA is a website where you can Schedule a visit to a wide collection of Luxury villas, penthounses, Modern Condos and Appartments, so you can choose your dream property",
      icon: <FaGithub />,
      link: 'https://abdullatif-jarkas.github.io/task1_front_fullstack/',
    },
    {
      title: "Learner",
      text: "Learner is a website where you can explore courses and become an instructor.",
      icon: <FaGithub />,
      link: 'https://abdullatif-jarkas.github.io/Task4_2/',
    },
    {
      title: "PHONO",
      text: "Phono is a website where you can explore the world of tech, see the latest mobile phones and the latest news in the field of technology",
      icon: <FaGithub />,
      link: 'https://abdullatif-jarkas.github.io/Task5_2/',
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