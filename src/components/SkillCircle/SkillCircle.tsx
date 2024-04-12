import './SkillCircle.css'

const SkillCircle = () => {
  return (
    <div className='skills-circles'>
      <div className='progress'>
        <h3>90<span>%</span></h3>
        <h4>Html</h4>
      </div>
      <div className='progress'>
        <h3>85<span>%</span></h3>
        <h4>CSS</h4>
      </div>
      <div className='progress'>
        <h3>80<span>%</span></h3>
        <h4>JS</h4>
      </div>
      <div className='progress'>
        <h3>90<span>%</span></h3>
        <h4>Bootstrap</h4>
      </div>
      <div className='progress'>
        <h3>70<span>%</span></h3>
        <h4>React</h4>
      </div>
      <div className='progress less'>
        <h3>30<span>%</span></h3>
        <h4>TypeScript</h4>
      </div>
    </div>
  )
}

export default SkillCircle