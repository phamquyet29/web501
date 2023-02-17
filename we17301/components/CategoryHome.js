import { useEffect } from "../lib";

const CategoryHome = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });
    return `<div>
        ${categories
            .map(
                (category) => `
            <button class="btn" data-id="${category.id}">${category.name}</button>
        `
            )
            .join("")}
    </div>`;
};

export default CategoryHome;

function show() {}

function calcular(a, b, callback) {
    callback();
}

calcular(5, 5, show);
