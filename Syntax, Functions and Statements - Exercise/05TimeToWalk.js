function solve(steps, footprint, speed) {
    let timeInSec = (steps * footprint) / (speed / 3.6)
    let h = Math.floor(timeInSec / 3600)
    let m = Math.floor(timeInSec / 60)
    let s = Math.round(timeInSec - (m * 60))
    let restInMin = Math.floor((steps * footprint) / 500);
    let hour = (h < 10 ? "0" : "") + h;
    let min = ((m + restInMin) < 10 ? "0" : "") + (m + restInMin);
    let sec = (s < 10 ? "0" : "") + s;
    console.log(`${hour}:${min}:${sec}`);
}

solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)
