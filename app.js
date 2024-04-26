/* Question 1 - Show Rating
Given a rating, display a star (*) for each full rating and a full-stop(.) fro each half rating. */

function showRating (rating) {
    let ratings = ''
    for(let i = 0; i < Math.floor(rating); i++) {
        ratings += '*'
        if(i !== Math.floor(rating) - 1) {
            ratings += ' '
        }
    }
    if(!Number.isInteger(rating)) {
        ratings += ' .'
    }
    return ratings
}

console.log(showRating(3))
console.log(showRating(4.5))
console.log(showRating(0.5))

//my try without looking

function showRating(rating) {
//initialize an empty string
let ratings = ''
//loop through the rounded down rating\
for (let i = 0; i < Math.floor(rating); i++) {
    //add a star for every iteration
    ratings += '*'
    //if its not the last iteration, add a space
    if(i !== Math.floor(rating) - 1) {
        ratings += ' '
    }
}
//if number is not an integer
if(!Number.isInteger(rating)) {
    //add a period
    ratings += ' .'
}
//return it
return ratings
}

console.log(showRating(5))
console.log(showRating(2.5))
console.log(showRating(1.5))


/* Question 2 - Sort by lowest to highest price
Given an array of numbers, return the prices sorted by low to high */

function sortLowToHigh(nums) {
    return nums.sort((a, b) => b - a)
}
// or return nums.sort((a, b) => { return b-a}) return needed with brackets
//b - a from highest to lowest

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
console.log(sortLowToHigh([5, 10, 0, -5]))
console.log(sortLowToHigh([3, 2, 1, 0]))


/* Question 3 - Sort by highest to lowest price
Given array of objects, return the prices sorted by high to low. */

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price)
    // properties needed for object in comparison
}

console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
])
)

// Question 4 - Promises


/* Question 5 - Find all the posts by a single user
Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id */

/*function postsByUser(userId) {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => console.log(res))
}

postsByUser(4) //.then method */ 

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    //getting promise from fetch API
    const result = await promise.json()
    //getting from backend to something frontend can read / understand, converted to json, await to convert
    const posts = result.filter(element => element.userId === userId)
    //in frontend, now we need to filter data for parameter equals parameter 
    console.log(posts)
    //post only true from filtered results
}
postsByUser(4)

/* Question 6 - First 6 Incomplete Todos
Call this API "" and return the first 6 incomplete todo's from the result. */

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://json.placeholder.typicode/todos")

    const result = await promise.json()

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)

    console.log(incompleteTasks)
}

firstSixIncomplete(6)