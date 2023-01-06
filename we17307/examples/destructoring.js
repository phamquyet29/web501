// object = {key : value }
const person = {
    name: "John",
    age: 30,
    address: {
        street: "Main Street",
    },
};
// const myName = person.name;
// const myAge = person.age;
// const myAddress = person.address;

function showInfo({ name, age, address: { street } }) {
    console.log(`Name: ${name}, Age: ${age}, Street: ${street}`);
}
showInfo(person);
// destructuring assignment
