let transientState = {
    "entreeId": 0, "vegetableId": 0, "sideId": 0
}

export const setEntreeId = (choice) => {
    transientState.entreeId = choice
    console.log(transientState)
}

export const setVegetableId = (choice) => {
    transientState.vegetableId = choice
    console.log(transientState)
}

export const setSideId = (choice) => {
    transientState.sideId = choice
    console.log(transientState)
}

const resetTransientState = () => {
    transientState = {
    "entreeId": 0, "vegetableId": 0, "sideId": 0
    }
}

export const placeOrder = async () => {
    if (transientState.entreeId !== 0 && transientState.vegetableId !== 0 && transientState.sideId !== 0) {
        const postOptions = {
         method: "POST",
         headers: {
         "Content-Type": "application/json",
         },
         body: JSON.stringify(transientState),
     };
 
     const response = await fetch("http://localhost:8088/purchases", postOptions);
     const customEvent = new CustomEvent("OrderPlaced")
 
     document.dispatchEvent(customEvent)
     resetTransientState()
     console.log("Order Placed!")
     console.log(transientState)

    } else {
        window.alert(`you must select all options`)
    }
}

