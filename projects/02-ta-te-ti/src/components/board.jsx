export function Board (board) {
    const newBoard = board;
    console.log('board', newBoard);
    
    return (
        <main className='board'>
            <section className='game'>
                {
                    newBoard.map((_, index) => {
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