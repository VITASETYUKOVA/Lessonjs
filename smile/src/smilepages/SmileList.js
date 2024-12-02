import React, { Component } from 'react';
import SmileItem from './SmileItem';

class SmileList extends Component {
  render() {
    const { smilies, voteSmile } = this.props;

    return (
      <div>
        {smilies.map(smile => (
          <SmileItem key={smile.id} smile={smile} voteSmile={voteSmile} />
        ))}
      </div>
    );
  }
}

export default SmileList;
