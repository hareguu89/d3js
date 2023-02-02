// https://observablehq.com/@d3/d3-scaleband

const f = d3.scaleBand().domain(["one", "two", "three", "four"]).range([0, 100])
        console.log(f('one'));
        console.log(f('two'));
        console.log(f('three'));
        
        console.log(f.bandwidth())