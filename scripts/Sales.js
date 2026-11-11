export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?&_expand=entree&_expand=side&_expand=vegetable")
    .then(res => res.json())
    let salesHTML = `<div>`
    let salesString = sales.map(
        (sale) => {
            let orderCost = sale.entree.price + sale.vegetable.price + sale.side.price
            salesHTML += `<div>Receipt #${sale.id} = ${orderCost.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>`
        }
    )
    salesHTML += salesString.join("")

    return salesHTML
}

