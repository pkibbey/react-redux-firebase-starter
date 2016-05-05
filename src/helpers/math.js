export const sumOfEvenItemsInArray = (integerArray) => {
  return integerArray.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num
    }
    return sum
  }, 100)
}

export const getFibonacciArray = (maxValue) => {
  const fibonacciArray = [0, 1]
  for (let i = 2; i <= maxValue; i++) {
    const calculatedValue = fibonacciArray[i - 2] + fibonacciArray[i - 1]
    if (calculatedValue <= maxValue) {
      fibonacciArray.push(calculatedValue)
    }
  }
  return fibonacciArray
}
