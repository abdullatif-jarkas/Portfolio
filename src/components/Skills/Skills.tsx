import SectionInfo from '../SectionInfo/SectionInfo'
import SkillCircle from '../SkillCircle/SkillCircle'
import LaptopImg from './../../assets/imgs/laptop-bg.png'
import './Skills.css'
import SectionImg from '../SectionImg/SectionImg'
import { useEffect } from 'react'
import anime from 'animejs'

const Skills = () => {
  
  useEffect(() => {
    const roundLogEl = document.querySelectorAll('.progress');

    anime({
      targets: roundLogEl[0],
      translateX: 0,
      translateY: -10,
      direction: 'alternate',
      loop: true,
      duration: 1500,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    anime({
      targets: roundLogEl[1],
      translateX: 0,
      translateY: +10,
      direction: 'alternate',
      loop: true,
      duration: 1000,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    anime({
      targets: roundLogEl[2],
      translateX: 0,
      translateY: -10,
      direction: 'alternate',
      loop: true,
      duration: 1500,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    anime({
      targets: roundLogEl[3],
      translateX: 0,
      translateY: +10,
      direction: 'alternate',
      loop: true,
      duration: 1000,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    anime({
      targets: roundLogEl[4],
      translateX: 0,
      translateY: -10,
      direction: 'alternate',
      loop: true,
      duration: 1500,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    anime({
      targets: roundLogEl[5],
      translateX: 0,
      translateY: +10,
      direction: 'alternate',
      loop: true,
      duration: 1000,
      easing: function(el, i, total) {
        console.log(el)
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
  },[])

  return (
    <section className='skills container' id='skills'>
      <div className="col-6">
        <SectionInfo 
          title='Skills'
          text='I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.'
          btn={false}
          btnText=''
          img={LaptopImg}
          file=''
        />
        <SkillCircle />
      </div>
      <div className="col-4">
        <SectionImg mainImg={LaptopImg} />
      </div>
    </section>
  )
}

export default Skills