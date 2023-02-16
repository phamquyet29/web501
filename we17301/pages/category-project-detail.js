import { getCategory } from "../api/project";
import { useEffect, useState } from "../lib";

const CategoryProjectDetailPage = ({ id }) => {
    const [category, setCategory] = useState({});
    useEffect(() => {
        getCategory(id).then((data) => setCategory(data));
    }, []);
    if (!category) return null;
    return `<div>
        ${category.name}

        <h2>Hiển thị dự án nằm trong danh mục</h2>
        ${
            category.projects &&
            category.projects
                .map(
                    (item) => `
            <div>${item.name}</div>
        `
                )
                .join("")
        }
    </div>`;
};

export default CategoryProjectDetailPage;
