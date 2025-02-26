import { URL_FACT_CAT } from "../constants"

export function getRandomFact(){
    return fetch(URL_FACT_CAT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                return fact
            })
}