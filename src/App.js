
import React, { useState } from 'react';
import './App.css';
import Background from './Components/image';
import Form from './Components/Form';

const App = () => {
  const [cardInfo, setCardInfo] = useState({
    cardholdername: '',
    cardnumber: '',
    expdateMM: '',
    expdateYY: '',
    cvv: '',
  });

  const handleCardInfoChange = (updatedCardInfo) => {
    setCardInfo(updatedCardInfo);
  };

  return (
    <div>
      <Background cardInfo={cardInfo} />
      <Form onCardInfoChange={handleCardInfoChange} />
    </div>
  );
};

export default App;
