import React, { Component } from 'react';
import SmileList from './SmileList';
import '../App.css'; // Подключение CSS из корня

class SmileVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smilies: [], // Изначально пустой массив
      winner: null,
    };
  }

  componentDidMount() {
    const savedSmilies = JSON.parse(localStorage.getItem('smilies'));
    if (savedSmilies) {
      this.setState({ smilies: savedSmilies });
    } else {
      this.setState({
        smilies: [
          { id: 1, smile: '😎', count: 0 },
          { id: 2, smile: '🤪', count: 0 },
          { id: 3, smile: '🤣', count: 0 },
          { id: 4, smile: '🥳', count: 0 },
          { id: 5, smile: '🤯', count: 0 },
        ],
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.smilies !== this.state.smilies) {
      localStorage.setItem('smilies', JSON.stringify(this.state.smilies));
    }
  }

  voteSmile = (id) => {
    this.setState({
      smilies: this.state.smilies.map(smile =>
        smile.id === id ? { ...smile, count: smile.count + 1 } : smile
      ),
    });
  };

  showResults = () => {
    const winner = this.state.smilies.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    this.setState({ winner });
  };

  clearResults = () => {
    this.setState({
      smilies: this.state.smilies.map(smile => ({ ...smile, count: 0 })),
      winner: null,
    });
    localStorage.removeItem('smilies');
  };

  render() {
    return (
      <div>
        <h1>Голосування за смайлики</h1>
        <SmileList smilies={this.state.smilies} voteSmile={this.voteSmile} />
        <button onClick={this.showResults}>Показати результати</button>
        <button onClick={this.clearResults}>Очистити результати</button>
        {this.state.winner && (
          <div style={{ marginTop: '20px' }}>
            <h2>Переміг смайлик:</h2>
            <div className="smiley-winner">{this.state.winner.smile} ({this.state.winner.count} голосів)</div>
          </div>
        )}
      </div>
    );
  }
}

export default SmileVote;