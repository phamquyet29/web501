import axios from "axios";
import { getAllCategories } from "../api/project";
import { useEffect, useState } from "../lib";

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => setCategories(data));
    }, []);
    return `<div>
        ${categories
            .map(
                (item) => `
            <a href="/#/category/${item.id}">${item.name}</a>
        `
            )
            .join("")}
    </div>`;
};

export default CategoryPage;
