import React from 'react';
import SmileItem from './SmileItem';

const SmileList = ({ smilies, voteSmile }) => (
  <div>
    {smilies.map(smile => (
      <SmileItem key={smile.id} smile={smile} voteSmile={voteSmile} />
    ))}
  </div>
);

export default SmileList;
