
import React from 'react';
import image from '../images/background.jpg';
import front from '../images/card-front.png';
import back from '../images/card-back.png';
import './image.css';

const Background = ({ cardInfo }) => {
  return (
    <div>
      <img src={image} alt="" style={{ width: '250px', height: '380px' }} />
      <img src={front} alt="" className="card-front" />
      <img src={back} alt="" className="card-back" />
      <div className="front-info">
        <p className='card-name' >{cardInfo.cardholdername}</p>
        <p className='card-num' >{cardInfo.cardnumber}</p>
        <p className='card-mm' >{cardInfo.expdateMM}/{cardInfo.expdateYY}</p>
      </div>
      <div className="back-info">
        <p className='cvc-out' >{cardInfo.cvv}</p>
      </div>
    </div>
  );
};

export default Background;
