import './Navbar.css'


type TDataItem = {
  text?: string,
  active?: boolean,
  id?: string,
}
type TData = Array<TDataItem>

const Navbar = ({ links }: { links: TData }) => {
  return (
    <nav>
      <ul>
        {
          links.map((link: TDataItem, index: number) => (
            <li key={index}>  
              <a href={'#'+link.id} className={link.active? "active": ""}>
                {link.text}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar