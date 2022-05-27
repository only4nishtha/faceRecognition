import React from 'react' ;
import './header.css';
import vector from '../../assets/vector.png';
import people from '../../assets/people.png';
import ultimate from '../../assets/ultimate.png';
import { Recognize } from '../../container/recognize/Recognize';
// import { useHistory } from "react-router-dom";

const Header = () => {
  return (
    <div className='mirror__header section__padding' id='home'>
      <div className='mirror__header-content'>
        <h1 className='gradient__text'>A new way to revolutionise your safety, just by a scan</h1>
        <p>Facial recognition technology has the potential to help conduct faster identity verification of service providers who enter your household and, therbey help resolve, stop and pevent crimes.</p>
        <div className='mirror__header-content__input'>
          <input type="text" placeholder='Microsoft Engage 2022' readonly="readonly" />
          <button onClick={Recognize} type='button'>Start Mirroring</button>
        </div>
        <div className='mirror__header-content__people'>
          <img src={people} alt="people"/>
          <p>3,00,244 miscellaneous identity thefts reported in 2021</p>
        </div>
      </div>
      <div className='mirror__header-image'>
        <img src={vector} alt="fr"/>
      </div>
      <div className='mirror__ultimate'>
        <img src={ultimate} alt="tagLine" />
      </div>
    </div>
  )
}

export default Header