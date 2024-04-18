import './AboutMe.css'
import PersonImg from './../../assets/imgs/person-1.png'
import SectionInfo from '../SectionInfo/SectionInfo'
import SectionImg from '../SectionImg/SectionImg'
import MainBg2 from './../../assets/imgs/bg-2.png'

const AboutMe = ({ text }: { text: string }) => {
  return (
    <section className='about-me container' id='about'>
      <img className='about-me-bg' src={MainBg2} alt="" />
      <div className="about-me-content">
        <div className="col">
          <SectionImg mainImg={PersonImg}/>
        </div>
        <div className="col">
          <SectionInfo title="About Me" text={text} btn={true} btnText='Download CV' img={PersonImg} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe