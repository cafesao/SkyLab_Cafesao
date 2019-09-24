function somaA(a = 3, b = 6) {
    return a + b
}

// Ou

const somaB = (a = 3, b = 6) => a + b

console.log(somaA(1))
console.log(somaA())

console.log(somaB(1))
console.log(somaB())