localStorage.setItem("name");
localStorage.getItem();

// '10' -> JSON.parse -> number
// 'true' -> JSON.parse -> boolean
// '[{"a": "10"}]' -> JSON.parse -> [{a: "10"}]

// 2 phuong thuc của JSON. : parse(), stringify()

localStorage.setItem("projects", JSON.stringify([{ a: "10" }]));
