import './App.css'
import { useEffect, useState } from "react";

const URL_FACT_CAT = 'https://catfact.ninja/fact'
const URL_IMAGE_CAT = 'https://cataas.com/cat/'

export function App() {
    const [fact, setFact] = useState()
    const [imgURL, setImgURL] = useState()

    useEffect((()=>{
        fetch(URL_FACT_CAT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }),[])

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

    return (
        <main>
            <h1>App Gatos</h1>
            <section className='fact&img'>
                { fact &&   <h2>{fact}</h2> }
                { imgURL && <img src={imgURL} alt={`an image of cat with first world of ${fact}`}/> }
            </section>
            
        </main>
    )
}