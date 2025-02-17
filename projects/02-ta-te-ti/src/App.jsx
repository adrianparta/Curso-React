import { useState } from 'react'
import './App.css'

import { TURNS, WINNING_COMBOS } from './utils/consts'
import { WinnerModal } from './components/WinnerModal'
import { Square } from './components/Square'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        setWinner(boardToCheck[a])
        return
      }
    }
    boardToCheck.every((square) => square !== null)
    && setWinner(false)
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setBoard(newBoard)
    checkWinner(newBoard)
    setTurn(newTurn)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  return (
    <main className='board'>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key= {index}
                index= {index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} ></WinnerModal>
    </main> 
  )
}

export default App
