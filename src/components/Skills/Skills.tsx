import SectionInfo from '../SectionInfo/SectionInfo'
import SkillCircle from '../SkillCircle/SkillCircle'
import LaptopImg from './../../assets/imgs/laptop-bg.png'
import './Skills.css'
import SectionImg from '../SectionImg/SectionImg'
import ArrowDown from '../ArrowDown/ArrowDown'
import { useEffect } from 'react'
import anime from 'animejs'

const Skills = () => {
  
  useEffect(() => {
    anime({
      targets: '.delay-demo .el',
      translateX: 250,
      delay: 1000
    });
  },[])

  return (
    <section className='skills container' id='skills'>
      <div className="col-6">
        <SectionInfo 
          title='Skills'
          text='I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.'
          btn={false}
          btnText=''
        />
        <SkillCircle />
        <ArrowDown />
      </div>
      <div className="col-4">
        <SectionImg mainImg={LaptopImg} />
      </div>
    </section>
  )
}

export default Skills