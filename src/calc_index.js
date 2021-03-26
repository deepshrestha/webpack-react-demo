const useCalc = require("./calc");

let initialState = {
    a: 2,
    b: 4
}

const { add, mul } = useCalc(initialState)

console.log(add())

console.log(mul())