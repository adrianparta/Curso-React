export function getRandomFact(){
    const URL_FACT_CAT = 'https://catfact.ninja/fact'

    return fetch(URL_FACT_CAT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                return fact
            })
}