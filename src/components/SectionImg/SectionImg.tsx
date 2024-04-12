import './SectionImg.css'
import PointsImg from './../../assets/imgs/points.svg'

const SectionImg = ({ mainImg }: {mainImg: string}) => {
  return (
    <div className="section-img">
      <img className='section-img-points' src={PointsImg} alt="points" />
      <img className='section-main-img' src={mainImg} alt="main-section-img" />
    </div>
  )
}

export default SectionImg