import Navigo from "navigo";
const router = new Navigo();

const render = (component, container) => {
    container.innerHTML = component();
};
const useState = () => {};

export { render, useState, router };
