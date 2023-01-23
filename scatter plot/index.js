const sampleData = [
    [5, 20, 30, '#ff0000'],
    [5, 320, 90, '#ff0000'],
    [5, 150, 50, '#ff0000'],
    [7, 120, 70, '#ff0000'], 
    [7, 530, 110, '#ff0000'],
    [7, 410, 20, '#ff0000'], 
    [12, 720, 60, '#ff0000'], 
    [12, 30, 110, '#ff0000'], 
    [12, 90, 130, '#ff0000'], 
    [19, 510, 180, '#ff0000'],
    [19, 310, 120, '#ff0000'],
    [8, 50, 150, '#ff0000'],
    [7, 50, 350, '#ff0000'],
];

const scatter1 = d3.select('#sample1').attr('width', 1000).attr('height', 300)

// const svg = d3.select('.canvas').append('svg').attr('width', 1000).attr('height', 1000)

// svg.selectAll('circle')
// .data(sampleData)
// .enter()
// .append('circle')
// .attr('r', (d) => d[0])
// .attr('cx', (d) => d[1] + 10)
// .attr('cy', (d) => d[2] + 10)
// .attr('fill', (d) => d[3])

// enter(데이터 수 > DOM 요소), update(재적용, 화면 갱신), exit(데이터 수 < DOM 요소)

scatter1.selectAll('circle')
.data(sampleData)
.attr('r', d => d[0])
.attr('cx', d => d[1])
.attr('cy', d => d[2])
.attr('fill', d => d[3])
.enter()
.append('circle')
.attr('r', d => d[0])
.attr('cx', d => d[1])
.attr('cy', d => d[2])
.attr('fill', d => d[3])

 const sampleData2 = [
    [5, 20, 30, '#ff0000'],
    [15, 320, 90, '#ff0000'],
    [25, 150, 50, '#ff0000'],
];

const scatter2 = d3.select('#sample2')
.attr('width', 1000)
.attr('height', 300)
        
scatter2.selectAll('circle')
.data(sampleData2)
.attr('r', d => d[0])
.attr('cx', d => d[1])
.attr('cy', d => d[2])
.attr('fill', d => d[3])
.exit()
.remove()