function createSortedList() {
    let sortedList = [];
    return {
        add(element) {
            sortedList.push(element);
            this.size += 1;
            sortedList.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index >= sortedList.length) {
                throw new RangeError('Index out of range')
            }
            sortedList.splice(index, 1);
            this.size -= 1;
        },
        get(index) {
            if (index < 0 || index >= sortedList.length) {
                throw new RangeError('Index out of range')
            }
            return sortedList[index];
        },
        size: 0
    }
    
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
