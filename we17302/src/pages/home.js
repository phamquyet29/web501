import Category from "@/components/Category";
import Project from "@/components/Project";
import { useEffect, useState } from "@/lib";
import Header from "../components/Header";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);

    const onHandleClick = (id) => {
        fetch(`http://localhost:3001/categories/${id}?_embed=projects`)
            .then((response) => response.json())
            .then(({ projects }) => setProjects(projects));
    };
    return /*html*/ `
        ${Header()}
        <h1>Home Page</h1>
        ${Category({ categories, onClick: onHandleClick })}
        ${Project({ projects })}
    `;
};

export default HomePage;
