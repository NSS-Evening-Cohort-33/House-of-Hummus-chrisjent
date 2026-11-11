import {setEntreeId} from './transientState.js'

const handleEntreeChoice = (changeEvent) => {
    if (changeEvent.target.name === "entree"){
        setEntreeId(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleEntreeChoice)



export const entrees = async () => {
    const entreesResponse = await fetch("http://localhost:8088/entrees")
    .then(res => res.json())
    
        let entreeHTML = '<div><h2>Entrees</h2>'
        const entreeRadioString = entreesResponse.map(
            (entree) => `<div><input id="entree-${entree.name}"type="radio" value="${entree.id}" name="entree"/><label for="entree-${entree.name}">${entree.name}</label></div>`
        )
        entreeHTML += entreeRadioString.join("")
        entreeHTML += '</div>'
// console.log(entreeHTML)
        return entreeHTML
}