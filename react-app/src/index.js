import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      { props.value }
    </button>
  )
}

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = [...this.state.squares]
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  getStatus() {
    const winner = calculateWinner(this.state.squares)
    return winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
  }

  render() {

    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    return (
      <div>
        <div className="status">{this.getStatus()}</div>
        {
          rows.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
              {
                row.map(squareIndex => this.renderSquare(squareIndex))
              }
            </div>
          ))
        }
      </div>
    )
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
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    )
  }
}

function calculateWinner(squares) {

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let combination of winningCombinations) {
    const [a, b, c] = combination
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)
