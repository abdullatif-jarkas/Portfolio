import { useEffect, useState } from 'react';
import './Navbar.css'


type TDataItem = {
  text?: string,
  active?: boolean,
  id?: string,
}
type TData = Array<TDataItem>

const Navbar = ({ links }: { links: TData }) => {

  const [navbarColor, setNavbarColor] = useState<object>({});
  
  useEffect(() => {

    const about = document.getElementById('about');
    const skills = document.getElementById('skills');
    const works = document.getElementById('works');
    const contact = document.getElementById('contact');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if(about && scrollPosition < about?.offsetTop) {
        links.forEach(link => {
          link.active = false;
        })
        links[0].active = true;
      }
      if(about && scrollPosition >= about?.offsetTop - 200) {
        links.forEach(link => {
          link.active = false;
        })
        links[1].active = true;
      }
      if(skills && scrollPosition >= skills?.offsetTop - 200) {
        links.forEach(link => {
          link.active = false;
        })
        links[2].active = true;
      }
      if(works && scrollPosition >= works?.offsetTop - 200) {
        links.forEach(link => {
          link.active = false;
        })
        links[3].active = true;
      }
      if(contact && scrollPosition >= contact?.offsetTop - 200) {
        links.forEach(link => {
          link.active = false;
        })
        links[4].active = true;
      }

      if (scrollPosition > 60) {
        setNavbarColor({
          backgroundColor: "var(--main-color)",
          color: "black",
          boxShadow: "0 0 10px #777"
        }); // Change to your desired color
      } else {
        setNavbarColor({
          backgroundColor: "transparent",
          color: "red",
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={ navbarColor }>
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