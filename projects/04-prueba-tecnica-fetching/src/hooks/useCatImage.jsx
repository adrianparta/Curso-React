

export const useCatImage = (fact) => {
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
    
    return imgURL
}