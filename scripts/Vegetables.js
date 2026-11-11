import {setVegetableId} from './transientState.js'

const handleVeggieChoice = (changeEvent) => {
    if (changeEvent.target.name === "veggie"){
        setVegetableId(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleVeggieChoice)


export const Veggies = async () => {
    const veggiesResponse = await fetch("http://localhost:8088/vegetables")
    .then(res => res.json())
    // console.log(veggiesResponse)
        let veggiesHTML = '<div><h2>Vegetables</h2>'
        const veggiesRadioString = veggiesResponse.map(
            (veggie) => `<div><input id="veggie-${veggie.type}" type="radio" value="${veggie.id}" name="veggie"/><label for="veggie-${veggie.type}">${veggie.type}</label></div>`
        )
        veggiesHTML += veggiesRadioString.join("")
        veggiesHTML += '</div>'
        
        return veggiesHTML
}
