const fs = require('fs');
const readInput = (filename) => {
    const data = fs.readFileSync(filename, 'utf-8');
    return JSON.parse(data);
};
const decodeYValue = (value, base) => {
    return parseInt(value, base);
};
const lagrangeInterpolation = (points) => {
    let constantTerm = 0;
    const k = points.length;

    for (let i = 0; i < k; i++) {
        let [xi, yi] = points[i];
        let term = yi;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let [xj] = points[j];
                term *= (0 - xj) / (xi - xj); 
            }
        }

        constantTerm += term;
    }

    return constantTerm;
};


const findWrongPoints = (points, constantTerm) => {
    const wrongPoints = [];
    points.forEach(([x, y]) => {
        const estimatedY = constantTerm; 
        if (Math.abs(estimatedY - y) > 1e-9) {
            wrongPoints.push([x, y]); 
        }
    });
    return wrongPoints;
};


const main = (filename) => {
    
    const jsonData = readInput(filename);

    const n = jsonData.keys.n; 
    const k = jsonData.keys.k; 
    
    const points = [];
    for (let i = 1; i <= n; i++) {
        if (jsonData.hasOwnProperty(i)) {
            const base = parseInt(jsonData[i].base);
            const value = jsonData[i].value;
            const y = decodeYValue(value, base); 
            points.push([i, y]); 
    }

    
    const constantTerm = lagrangeInterpolation(points.slice(0, k));

    
    const wrongPoints = findWrongPoints(points, constantTerm);

    
    console.log('Secret (constant term):', constantTerm);
    console.log('Wrong points:', wrongPoints);
};


main('input.json');
