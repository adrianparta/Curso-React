import React from 'react';
import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imgURL } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
    }
    
    
    return (
        <main>
            <h1>App Gatos</h1>
            <button onClick={handleClick}>Get Random Fact</button>
            <section className='fact&img'>
                { fact &&   <h2>{fact}</h2> }
                { imgURL && <img src={imgURL} alt={`an image of cat with first world of ${fact}`}/> }
            </section>
            
        </main>
    )
}