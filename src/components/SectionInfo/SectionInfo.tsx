import './SectionInfo.css'
import SectionImg from '../SectionImg/SectionImg'

type TData = {title: string, text: string, btn: boolean, btnText: string, img: string}

const SectionInfo = ({ title, text, btn, btnText, img }: TData) => {
  return (
    <div className="section-info">
      <h2>{title}</h2>
      <SectionImg mainImg={img}/>
      <p>{text}</p>
      {
        btn && <a href="#"><button>{btnText}</button></a>
      }
    </div>
  )
}

export default SectionInfo