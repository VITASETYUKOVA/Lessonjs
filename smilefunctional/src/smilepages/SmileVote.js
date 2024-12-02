import React, { useState, useEffect } from 'react';
import SmileList from './SmileList';

const SmileVote = () => {
  const [smilies, setSmilies] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savedSmilies = JSON.parse(localStorage.getItem('smilies'));
    if (savedSmilies) {
      setSmilies(savedSmilies);
    } else {
      setSmilies([
        { id: 1, smile: '😎', count: 0 },
        { id: 2, smile: '🤪', count: 0 },
        { id: 3, smile: '🤣', count: 0 },
        { id: 4, smile: '🥳', count: 0 },
        { id: 5, smile: '🤯', count: 0 },
      ]);
    }
  }, []);

  useEffect(() => {
    if (smilies.length) {
      localStorage.setItem('smilies', JSON.stringify(smilies));
    }
  }, [smilies]);

  const voteSmile = (id) => {
    setSmilies(smilies.map(smile => 
      smile.id === id ? { ...smile, count: smile.count + 1 } : smile
    ));
  };

  const showResults = () => {
    if (smilies.length > 0) {
      const winnerSmile = smilies.reduce((prev, current) => 
        prev.count > current.count ? prev : current
      );
      setWinner(winnerSmile);
    }
  };

  const clearResults = () => {
    setSmilies(smilies.map(smile => ({ ...smile, count: 0 })));
    setWinner(null);
    localStorage.removeItem('smilies');
  };

  return (
    <div>
      <h1>Голосування за смайлики</h1>
      <SmileList smilies={smilies} voteSmile={voteSmile} />
      <button onClick={showResults}>Показати результати</button>
      <button onClick={clearResults}>Очистити результати</button>
      {winner && (
        <div style={{ marginTop: '20px' }}>
          <h2>Переміг смайлик:</h2>
          <div className="smiley-winner">{winner.smile} ({winner.count} голосів)</div>
        </div>
      )}
    </div>
  );
};

export default SmileVote;