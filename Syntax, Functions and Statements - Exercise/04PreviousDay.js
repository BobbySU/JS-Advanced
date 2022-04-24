function solve(year, month, day) {
    let date = new Date(year, month, day-1)
    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

solve(2016, 9, 30)
solve(2016, 10, 1)