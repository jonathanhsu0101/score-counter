import React, { Component } from 'react';
import Player from './Player';

class App extends Component {
  state = {
    player1: 0,
    player2: 0
  };

  player1up = () => {
    this.setState({ player1: this.state.player1 + 1 });
  };

  player1down = () => {
    if (this.state.player1 > 0) {
      this.setState({ player1: this.state.player1 - 1 });
    }
  };

  player2up = () => {
    this.setState({ player2: this.state.player2 + 1 });
  };

  player2down = () => {
    if (this.state.player2 > 0) {
      this.setState({ player2: this.state.player2 - 1 });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Player
          playerNo="1"
          number={this.state.player1}
          up={this.player1up}
          down={this.player1down}
        />
        <Player
          playerNo="2"
          number={this.state.player2}
          up={this.player2up}
          down={this.player2down}
        />
      </div>
    );
  }
}

export default App;
