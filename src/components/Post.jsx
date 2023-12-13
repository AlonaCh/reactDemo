function Post({ id, title, completed }) {
    return (
        <>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{completed}</p>
        </>
    )
}
export default Post;

// if completed is true shoe a text, if not show no