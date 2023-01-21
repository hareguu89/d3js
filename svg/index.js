const canvas = d3.select(".canvas") // selecting

const svg = canvas.append("svg") // 추가
.attr("height", 1000) // 속성 지정
.attr("width", 1000);

svg.append('text') // 추가, text 형태로
.attr('x', 200)
.attr('y', 200) // 좌측 하단 기준 좌표
.text('hello world!')
.style('font-weight', 'bold')
.style('font-size', '34px')

svg.append('rect')
.attr('width', 200)
.attr('height', 200)
.attr('fill', 'hotpink');

svg.append('circle')
.attr('r', 50)
.attr('cy', 200)
.attr('cx', 200)
.attr('fill', 'blue');

svg.append('line')
.attr('x1', 200)
.attr('y1', 200)
.attr('x2', 300)
.attr('y2', 300)
.attr('stroke', 'red');