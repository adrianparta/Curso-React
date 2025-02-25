import React from 'react';
import './App.css'
import { getRandomFact } from './services/facts';
import { useEffect, useState } from "react";

const URL_IMAGE_CAT = 'https://cataas.com/cat/'

const useCatImage = ({ fact }) => {
    const [imgURL, setImgURL] = useState()
    
    useEffect(() => {
        if(!fact) return
        const firstWorld = fact.split(' ').slice(0, 1)
        fetch(`${URL_IMAGE_CAT}says/${firstWorld}?json=true`)
        .then(res => res.json())
        .then(data => {
            const { url } = data
            setImgURL(url)
        })
    }, [fact])

    return { imgURL }
}

export function App() {
    const [fact, setFact] = useState()
    const { imgURL } = useCatImage({ fact })

    useEffect((()=>{
        getRandomFact().then(fact => setFact(fact))
    }),[])



    const handleClick = () => {
        getRandomFact().then(fact => setFact(fact))
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