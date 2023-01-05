const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
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
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

showInfo(person);

// Destructoring array

function useState(initialState) {
    let value = initialState;
    function getValue() {
        return value;
    }
    function setValue(newValue) {
        value = newValue;
    }
    return [getValue, setValue];
}

const [count, setCount] = useState(10);
console.log("Gia tri cu", count()); // 10
setCount(20);
console.log("Gia tri moi", count());
