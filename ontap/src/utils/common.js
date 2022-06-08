export function $(element) {
    const elements = document.querySelectorAll(element);
    return elements.length == 1 ? elements[0] : elements;
}
