const sampleData = [100, 10, 30, 50, 10, 70, 200, 90];
const sampleData2 = [110, 50, 20, 30, 50, 90, 120, 70];
const svg = d3.select('svg');

sampleData.forEach((data, index) => {
    svg.append('rect')
    .attr('id', `bar${index}`)
    .attr('height', data)
    .attr('width', 30)
    .attr('x', 40 * index + 100)
    .attr('y', 300 - data + 100)
    .transition()
    .duration(3000)
    .ease(d3.easeLinear)
    .attr('fill', 'red')
    .attr('height', sampleData2[index])
    .attr('y', 300 - sampleData2[index] + 100)


    // svg.append('text')
    // .attr('x', 40 * index + 100)
    // .attr('y', 300 - data + 90)
    // .text(data)
    // .style('font-size', "0.85rem")
    // .style('color', '#222')
})
d3.select('#bar0')
    .transition()
    .duration(3000)
    .ease(d3.easeLinear)
    .style('fill', 'blue')
    .delay(3000)
