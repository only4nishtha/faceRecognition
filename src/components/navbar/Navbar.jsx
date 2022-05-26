import React, {useState} from 'react' ;
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/2.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='mirror__navbar'>
      <div className='mirror__navbar-links'>
        <div className='mirror__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='mirror__navbar-links_container'>
           <p><i class="fa-solid fa-gear"></i><a href="#home"></a></p>
           <p><i class="fa-solid fa-grip"></i><a href="#mirror"></a></p>
           <p><i class="fa-solid fa-user"></i><a href="#article"></a></p>
        </div>
      </div>
      <div className='mirror__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='mirror__navbar-menu_container scale-up-center'>
            <div className='mirror__navbar-menu_container-links'>
            <p><i class="fa-solid fa-gear"></i><a href="#home"></a></p>
            <p><i class="fa-solid fa-grip"></i><a href="#mirror"></a></p>
            <p><i class="fa-solid fa-user"></i><a href="#article"></a></p>
            <div className='mirror__navbar-menu_container-links-sign'></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar