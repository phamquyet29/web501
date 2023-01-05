const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
    },
};

// const name = person.name;
// const age = person.age;
// const address = person.address;
// const {
//     name,
//     age,
//     address: { city },
// } = person;

function showInfo({ name, age, address: { city } }) {
    console.log(name, age, city);
}
showInfo(person);

function useState(initialState) {
    let state = initialState;
    function setState(newState) {
        state = newState;
    }
    return [state, setState];
}
const [count, setCount] = useState(10);
console.log(count); // 10
setCount(20);
console.log(count); // 20
