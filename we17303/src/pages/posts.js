import Header from "../components/Header";
import { useEffect, useState } from "../lib";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const posts = await (
                await fetch("https://blog.seta-international.com/wp-json/wp/v2/posts")
            ).json();
            setPosts(posts);
        })();
    }, []);
    return `
        ${Header()}
    <h1>Posts Page</h1>
        ${posts
            .map(
                (post) => `
            <h1>${post.title.rendered}</h1>
        `
            )
            .join("")}
    `;
};
export default PostsPage;
