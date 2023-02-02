// 비율에 맞게 값을 변경해줍니다.

const f1 = d3.scalePoint().range([0, 100]).domain([0, 500])
console.log(f1(250))
console.log(f1(0))
console.log(f1(500))
console.log(f1(100))
console.log(f1(1000))

const crayons = d3.scaleLinear().domain([-1, 0, 1])
.range(['orange', 'white', 'green'])

console.log(crayons(-1))

const f2 = d3.scaleLinear().domain([200, 500])
.range([20000000, 50000000])

console.log(f2(25000000))
