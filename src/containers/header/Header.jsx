import React from 'react' ;
import './header.css';
import vector from '../../assets/vector.png';

const Header = () => {
  return (
    <div className='mirror__header section__padding' id='home'>
      <div className='mirror__header-content'>
        <h1 className='gradient__text'>A new way to revolutionise your safety, just by a scan</h1>
        <div className='mirror__header-content__input'></div>
        <img src={vector} />
      </div>
    </div>
  )
}

export default Header