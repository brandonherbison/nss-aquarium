// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="fishInventory">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<article class="fish">
        <img src=${fish.image}>
                        <ul>
                            <li>Name: ${fish.name}</li>
                            <li>Species: ${fish.species}</li>
                            <li>Length: ${fish.length} inches</li>
                            <li>Diet: ${fish.diet}</li>
                        </ul>
        </article>
        <aside>
            <p>Helpful Tips</p>
        </aside>
        `
    }
    htmlString += `</section>`
    
    return htmlString
}
// module.exports = {FishList}
// <div><img  class="fish__image image--card" src="${fish.image}" /></div>
// <div class="fish__name">${fish.name}</div>
// <div class="fish__species">${fish.species}</div>
// <div class="fish__length">${fish.length}</div>
// <div class="fish__diet">${fish.diet}</div>