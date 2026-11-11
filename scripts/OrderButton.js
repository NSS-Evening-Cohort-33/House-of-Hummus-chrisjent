import {placeOrder} from './transientState.js'

const handlePlacedOrder = (clickEvent) => {
    if (clickEvent.target.id === "purchase-btn") {
        placeOrder()
    }
}

document.addEventListener("click",handlePlacedOrder )

export const OrderButton = () => {
let html = `
    <button id="purchase-btn">Purchase Combo</button>   
`   
return html
}


