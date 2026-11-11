import {setSideId} from './transientState.js'

const handleSideChoice = (changeEvent) => {
    if (changeEvent.target.name === "side-dish"){
        setSideId(parseInt(changeEvent.target.value))
    }
}

document.addEventListener("change", handleSideChoice)

export const Sides = async () => {
    const sidesResponse = await fetch("http://localhost:8088/sides")
    .then(res => res.json())
        let sidesHTML = '<div><h2>Side Dishes</h2>'
        const sidesRadioString = sidesResponse.map(
            (side) => `<div><input id="side-${side.title}" type="radio" value="${side.id}" name="side-dish"/><label for="side-${side.title}">${side.title}</label></div>`
        )
        sidesHTML += sidesRadioString.join("")
        sidesHTML += '</div>'
        return sidesHTML
}

