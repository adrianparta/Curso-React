import './App.css'

import { TURNS } from './utils/consts'

const board = Array(9).fill(null)

function App() {
  return (
    <main className='board'>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <div className='square' key={index}>
                <span className='cell_content'>
                  {index}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
