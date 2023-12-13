import { useState, useEffect } from 'react';
import axios from "axios";
import Post from '../components/Post'


function Posts() {

    const [posts, setPosts] = useState([]); //gives less error during the map

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                setPosts(res.data)
            })

    }, [])
    return (
        <>
            <h1>Posts will be here</h1>
            {posts.map(post => <Post key={post.id} {...post} />)}

        </>
    )

}
export default Posts;

