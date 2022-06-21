function createPerson(firstName, lastName) {
    let obj = {
        firstName,
        lastName
    }
    Object.defineProperty(obj, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(fullName) {
            if (fullName.includes(' ')) {
                this.firstName = fullName.split(' ')[0];
                this.lastName = fullName.split(' ')[1];
            }
        }
    })
    return obj;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla

console.log('--------');

let person1 = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
