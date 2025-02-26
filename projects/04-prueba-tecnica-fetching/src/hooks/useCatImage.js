import { useState, useEffect } from 'react'
import { URL_IMAGE_CAT } from '../constants'

export const useCatImage = ({ fact }) => {
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