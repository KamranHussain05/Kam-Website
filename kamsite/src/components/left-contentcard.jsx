import React from 'react';
import '../css/contentcard.css';

const ImageWithText = ({ imagePath, cardTitle, cardText }) => {
  return (
    <div className="container">
      <div className="image" style={{ backgroundImage: `url(${imagePath})` }}></div>
      <div className="textContainer">
        <h2 className="title">{cardTitle}</h2>
        {cardText.map((text, index) => (
          <p key={index} className="textLine">{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageWithText;
