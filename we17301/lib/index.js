import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (component, container) => {
    // function
    container.innerHTML = component();
};
const useState = () => {};

export { render, useState, router };
