const menuList = [
    { name: "Home", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Posts", path: "/posts" },
    { name: "Contact", path: "/contact" },
];

const projectFake = [
    { id: 1, name: "Dự án mẫu" },
    {
        id: 2,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
];
export { projectFake, menuList };
