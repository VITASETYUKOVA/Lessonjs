import React, { Component } from 'react';
import '../App.css';

class SmileItem extends Component {
  render() {
    const { smile, voteSmile } = this.props;

    return (
      <div className="smiley-container" onClick={() => voteSmile(smile.id)}>
        <span className="smiley">{smile.smile}</span>
        <p className="vote-count">Голосів: {smile.count}</p>
      </div>
    );
  }
}

export default SmileItem;