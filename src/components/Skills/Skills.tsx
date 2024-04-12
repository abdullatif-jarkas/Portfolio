import SectionInfo from '../SectionInfo/SectionInfo'
import SkillCircle from '../SkillCircle/SkillCircle'
import LaptopImg from './../../assets/imgs/laptop-bg.png'
import './Skills.css'
import SectionImg from '../SectionImg/SectionImg'
import ArrowDown from '../ArrowDown/ArrowDown'

const Skills = () => {
  return (
    <section className='skills container' id='skills'>
      <div className="col">
        <SectionInfo 
          title='Skills'
          text='I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.'
          btn={false}
          btnText=''
        />
        <SkillCircle />
      </div>
      <div className="col">
        <SectionImg mainImg={LaptopImg} />
      </div>
      <ArrowDown />
    </section>
  )
}

export default Skills