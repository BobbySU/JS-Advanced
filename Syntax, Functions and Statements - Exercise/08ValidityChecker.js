function solve(x1, y1, x2, y2) {

    function checkResult(x1, y1, x2, y2) {
        const formula = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
        const validation = Number.isInteger(formula) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validation}`);
    }

    checkResult(x1, y1, 0, 0);
    checkResult(x2, y2, 0, 0);
    checkResult(x1, y1, x2, y2);
}


solve(3, 0, 0, 4)
solve(2, 1, 1, 1)