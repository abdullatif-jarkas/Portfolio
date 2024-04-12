import './SkillCircle.css'

const SkillCircle = () => {
  return (
    <div className='skills-circles'>
      <div className='progress' style={{'--i': '90'}}>
        <h3>90<span>%</span></h3>
        <h4>Html</h4>
      </div>
      <div className='progress' style={{'--i': '85'}}>
        <h3>85<span>%</span></h3>
        <h4>CSS</h4>
      </div>
      <div className='progress' style={{'--i': '80'}}>
        <h3>80<span>%</span></h3>
        <h4>JS</h4>
      </div>
      <div className='progress' style={{'--i': '90'}}>
        <h3>90<span>%</span></h3>
        <h4>Bootstrap</h4>
      </div>
      <div className='progress' style={{'--i': '70'}}>
        <h3>70<span>%</span></h3>
        <h4>React</h4>
      </div>
      <div className='progress less' style={{'--i': '30'}}>
        <h3>30<span>%</span></h3>
        <h4>TypeScript</h4>
      </div>
    </div>
  )
}

export default SkillCircle