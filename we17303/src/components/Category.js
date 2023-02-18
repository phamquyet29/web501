import { useEffect } from "@/lib";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });
    return `<div>
        ${categories
            .map(({ name, id }) => {
                return `<button data-id="${id}" class="btn">${name}</button>`;
            })
            .join("")}
    
    </div>`;
};

export default Category;

// const categories: [];

// function onHandleClick(id) {
//     console.log(id); // ????
// }
// function sum({ categories, onClick }) {
//     onClick(20);
// }

// sum({ categories, onClick: onHandleClick });
