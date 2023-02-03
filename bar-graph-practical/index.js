const width = 800, height = 800

const svg = d3.select('.canvas').append('svg').attr('width', width).attr('height', height);

let [mt, mr, mb, ml] = [50, 50, 50, 50]

const graphWidth = width - ml - mr;
const graphHeight = width - mt - mb;

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${ml}, ${mr})`)

const xAxisG = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`)
const yAxisG = graph.append('g')

d3.json('./data4.json')
.then(data => {
    [_, ...data] = [...data]

    const x = d3.scaleBand().domain(data.map(item => item['지역이름'])).range([0, graphWidth]).padding(0.1);
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d['확진자수'])]).range([graphHeight, 0]);

    const bars = graph.selectAll('rect').data(data);

    console.log(data)

            
    bars.enter()
        .append('rect')
        .attr('height', d => graphHeight - y(d.확진자수))
        .attr('width', x.bandwidth)
        .attr('fill', 'hotpink')
        .attr('x', d => x(d.지역이름))
        .attr('y', d => y(d.확진자수))

    bars.enter()
        .append('text')
        .attr('x', d => {
            if (d.확진자수 >= 1000) {
                return x(d.지역이름) + 3
            }
            else if (d.확진자수 >= 100) {
                return x(d.지역이름) + 6
            }
            else if (d.확진자수 >= 10) {
                return x(d.지역이름) + 9
            }
            else if (d.확진자수 >= 1) {
                return x(d.지역이름) + 12
            }
            return x(d.지역이름)
        })
        .attr('y', d => y(d.확진자수) - 5)
        .text(d => d.확진자수)
        .style('font-size', '12px;')
        // .attr('text-anchor', 'end')

        const xAxis = d3.axisBottom(x)
        const yAxis = d3.axisLeft(y)
        
        xAxisG.call(xAxis)
        yAxisG.call(yAxis)

        xAxisG.selectAll('text')
            .attr('fill', 'blue')
            .attr('transform', 'rotate(-45)')
            .attr('text-anchor', 'end')
})