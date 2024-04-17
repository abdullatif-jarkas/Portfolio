import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialLinks from '../SocialLinks/SocialLinks'
import './Hero.css'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import MainBg1 from './../../assets/imgs/bg-1.png'

type TData = {name: string, job: string}

const Hero = ({ name, job }: TData) => {

  const icons = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/abdullatif.jarkas1",
    },
    {
      icon: <FaGithub />,
      link: "",
    },
    {
      icon: <FaLinkedin />,
      link: "",
    },
    {
      icon: <TiSocialInstagramCircular />,
      link: "",
    },
  ]

  return (
    <div className="hero container">
      <img className='main-bg-1' src={MainBg1} alt="main-bg" />
      <h1>{name}</h1>
      <p>{job}</p>
      <SocialLinks links={icons} />
    </div>
  )
}

export default Hero