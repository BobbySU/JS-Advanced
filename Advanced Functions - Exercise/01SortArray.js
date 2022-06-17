function solve(input, type){
    if(type=='asc'){
        input.sort((a,b)=> a-b);
    }else{
        input.sort((a,b)=> b-a);
    }
    return input;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));
