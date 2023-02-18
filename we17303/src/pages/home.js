import Category from "@/components/Category";
import Projects from "@/components/Projects";
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
        console.log("home", id);
        fetch(`http://localhost:3001/categories/${id}?_embed=projects`)
            .then((response) => response.json())
            .then(({ projects }) => setProjects(projects));
    };
    return `
        ${Header()}
    <h1>Home Page</h1>
        <hr />
        ${Category({ categories, onClick: onHandleClick })}
        ${Projects({ projects })}
    `;
};
export default HomePage;

// http://localhost:5173/#/project/1
