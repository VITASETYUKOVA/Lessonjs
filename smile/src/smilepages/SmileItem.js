import React from 'react';
import '../App.css'; 

const SmileItem = ({ smile, voteSmile }) => {
  return (
    <div className="smiley-container" onClick={() => voteSmile(smile.id)}>
      <span className="smiley">{smile.smile}</span>
      <p className="vote-count">Голосів: {smile.count}</p>
    </div>
  );
};

export default SmileItem;
