import { FaCopyright, FaFacebook, FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa'
import SocialLinks from '../SocialLinks/SocialLinks'
import FooterPlot from './../../assets/imgs/footer-plot.svg'
import './Footer.css'
import { TiSocialInstagramCircular } from 'react-icons/ti'

const Footer = () => {

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
    <footer>
      <h5>Abdullatif Jarkas</h5>
      <SocialLinks links={icons} />
      <p>All Rights Reserved <FaCopyright className='copyright-icon' /> 2024 abdullatif_jarkas <FaHeart className='heart-icon'/></p>
      <img src={FooterPlot} alt="" />
    </footer>
  )
}

export default Footer