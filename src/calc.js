const useCalc = ({a, b}) => {

    const add = () => {
        return a + b
    }

    const mul = () => {
        return a * b
    }

    return {
        add,
        mul
    }
}

module.exports = useCalc