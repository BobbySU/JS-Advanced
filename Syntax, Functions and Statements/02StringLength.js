function countLenght (name1, name2, name3){
    let names = name1 + name2 + name3;
    console.log(names.length);
    console.log(Math.floor(names.length/3))
}

function countLenght2 (name1, name2, name3){
    let one1 = name1.length;
    let one2 = name2.length;
    let one3 = name3.length;
    let namesLenght = one1 + one2 + one3;
    console.log(namesLenght);
    console.log(Math.floor(namesLenght/3))
}

countLenght('chocolate', 'ice cream', 'cake')
countLenght2('pasta', '5', '22.3')
