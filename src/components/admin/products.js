const AdminProductList = {
    render() {
        return /* html */`
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tên bài viết</td>
                        <td>Mô tả bài viết</td>
                        <td>
                            <a href="">Edit</a>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    },
};
export default AdminProductList;