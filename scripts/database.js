/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://cdn.wafishing.com.au/wp-content/uploads/2021/07/stargazer-fish-768x485.jpg",
            name: "Eugene",
            species: "Stargazer Fish",
            length: 3,
            diet: "Smaller, more inferior fish",
        },
        {
            image: "https://cdn.wafishing.com.au/wp-content/uploads/2021/07/giant-sea-bass-768x507.jpg",
            name:"Tiny",
            species: "Giant Sea Bass",
            length: 13,
            diet: "The souls of regular sized sea bass"
        },
        {
            image: "https://cdn.wafishing.com.au/wp-content/uploads/2021/07/smalltooth-sawfish-768x458.jpg",
            name:"Ryan Reynolds",
            species: "Smalltooth Sawfish",
            length: 100,
            diet: "Literally anything" 
        },
        {
            image: "https://cdn.wafishing.com.au/wp-content/uploads/2021/07/european-sea-sturgeon-768x483.jpg",
            name:"Fin Diesel",
            species: "European Sea Sturgeon",
            length: 36,
            diet: "Pennies and Tic Tacs" 
        },
        {
            image: "https://cdn.wafishing.com.au/wp-content/uploads/2021/07/adriatic-sturgeon-768x502.jpg",
            name:"Gilly Nelson",
            species: "Adriatic Sturgeon",
            length: 40,
            diet: "Vegan pizza" 
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPEHxlxcdZbF_56lk2lJpj9kKMP_O3C19kg&usqp=CAU",
            name: "Mr. Whiskers",
            species: "Mekong Giant Catfish",
            length: 120,
            diet: "People"
        }
    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}














// {
//     name:"",
//     species: "",
//     length: ,
//     diet: ""
// }