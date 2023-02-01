// rage 는 전체 width
// domain의 전체 count를 range 값으로 '동일하게' 분할하여 분배

const f1 = d3.scalePoint().range([0, 100])
.domain([10,20,30,40])
console.log(f1(20))

const f2 = d3.scalePoint().range([0, 100]).domain(['a', 'b', 'c', 'd'])
console.log(f2('c'))

const f3 = d3.scalePoint().range([0, 100]).domain(['a','b','c','d']).padding(0.3)
console.log(f3('a'))

// login