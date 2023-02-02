data1 = [10, 20, 30]
data2 = [{
    age:10,
    power:3000
},{
    age:20,
    power:2000
},{
    age:30,
    power:1000
}]

const min1 = d3.min(data1)
const min2 = d3.min(data2, d => d.age)
console.log(min1, min2) // 10, 10

const max1 = d3.max(data1)
const max2 = d3.max(data2, d => d.power)
console.log(max1, max2) // 30, 3000

const extent1 = d3.extent(data1) // return [min, max] array
const extent2 = d3.extent(data2, d => d.power) // return [min, max]
console.log(extent1, extent2)

let [a, b] = d3.extent(data1)
console.log(a, b)

const mean = d3.mean(data1)
console.log(mean)