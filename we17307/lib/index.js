const render = (component, container) => {
    container.innerHTML = component();
};
export { render };
