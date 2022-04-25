function solve(number, com1, com2, com3, com4, com5) {
    let arr= [com1, com2, com3, com4, com5];
    let num = Number(number);
    arr.forEach(element => {
        switch (element) {
            case 'chop':
                num = num / 2;
                break;
            case 'dice':
                num = num ** 0.5;
                break;
            case 'spice':
                num = num + 1;
                break;
            case 'bake':
                num = num * 3;
                break;
            case 'fillet':
                num = num - num/5;
                break;
        }
        console.log(num);
    });
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')