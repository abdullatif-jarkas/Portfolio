import './AboutMe.css'
import PersonImg from './../../assets/imgs/person-1.png'
import SectionInfo from '../SectionInfo/SectionInfo'
import SectionImg from '../SectionImg/SectionImg'
import ArrowDown from '../ArrowDown/ArrowDown'

const AboutMe = ({ text }: { text: string }) => {
  return (
    <section className='about-me container'>
      <div className="about-me-content">
        <div className="col">
          <SectionImg mainImg={PersonImg}/>
        </div>
        <div className="col"  id='about'>
          <SectionInfo title="About Me" text={text} btn={true} btnText='Download CV' />
        </div>
      </div>
      <ArrowDown />
    </section>
  )
}

export default AboutMe