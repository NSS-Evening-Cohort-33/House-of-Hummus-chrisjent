import { Sales } from "./Sales.js"
import {entrees} from './Entrees.js'
import {Veggies} from './Vegetables.js'
import {Sides} from './SideDishes.js'
import {OrderButton} from './OrderButton.js'

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await entrees()
    const veggieHTML = await Veggies()
    const sidesHTML = await Sides()
    const orderButtonHTML = OrderButton()


    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section class="choices">
            <div id="entree-div" class="options">
            ${entreeHTML}
            </div>
            <div id="veggie-div" class="options">
            ${veggieHTML}
            </div>
            <div id="sides-div" class="options">
            ${sidesHTML}
            </div>
        </section>
        <article id="btn">
            ${orderButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
