import './SocialLinks.css'

type TDataItem = {
  link?: string,
  icon?: any,
}
type TData = Array<TDataItem>

const SocialLinks = ({ links }: {links: TData}) => {
  return (
    <div className="social-links">
        {
          links.map((link, index: number) => (
            <a key={index} href={link.link}>{link.icon}</a>
          ))
        }
    </div>
  )
}

export default SocialLinks