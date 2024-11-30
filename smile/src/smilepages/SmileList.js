import React from 'react';
import SmileItem from './SmileItem';

const SmileList = ({ smilies, voteSmile }) => {
  return (
    <div>
      {smilies.map(smile => (
        <SmileItem key={smile.id} smile={smile} voteSmile={voteSmile} />
      ))}
    </div>
  );
};

export default SmileList;