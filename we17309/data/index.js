const projectsFake = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    }, //project
    {
        id: 2,
        name: "Dự án mẫu",
    }, // project
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    },
];

export { projectsFake };

// const numbers = [
//     { id: 1, name: "A"}, // item
//     { id: 2, name: "B"}, // item
//     { id: 3, name: "C"}, // item
//     { id: 4, name: "D"}]; // item
// const currentNumber = numbers.find(item => item.id === 2);
// console.log(currentNumber) // { id: 2, name: "B"}
