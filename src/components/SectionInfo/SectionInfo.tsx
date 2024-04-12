import './SectionInfo.css'

type TData = {title: string, text: string, btn: boolean, btnText: string}

const SectionInfo = ({ title, text, btn, btnText }: TData) => {
  return (
    <div className="section-info">
      <h2>{title}</h2>
      <p>{text}</p>
      {
        btn && <button>{btnText}</button>
      }
    </div>
  )
}

export default SectionInfo