// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = 'A.D'
let myName = () => {
  console.log(`my name is ${name}`)
}
myName()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0
  return function () {
    return ++counter
  }
}

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0
  let counterObject = {
    increment: function () {
      return ++counter
    },
    decrement: function () {
      return --counter
    }
  }
  return counterObject
}
const newCounteryFactory = counterFactory()

console.log(newCounteryFactory.increment())

console.log(newCounteryFactory.decrement())
console.log(newCounteryFactory.increment())

console.log(newCounteryFactory.decrement())
console.log(newCounteryFactory.increment())
console.log(newCounteryFactory.decrement())
console.log(newCounteryFactory.increment())