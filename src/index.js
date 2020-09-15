import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Note that in this part of the program we have plain javascript
/*  we can use the JS comment syntax for single 
or multiline comments
*/

class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={function() { 
            alert('click'); }}>
                {/* alert renders a popup box when you click on a square */ }
         {this.props.value}
         {console.log(this.props.value)}
         
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      {//return <Square />;}
      return <Square value={i} />;
    }
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  