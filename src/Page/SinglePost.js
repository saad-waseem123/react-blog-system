import { useParams } from "react-router-dom";
import PostCard from "../Components/PostCard";
import useFetch from '../Components/useFetch';

const SinglePost = () => {
    const { id } = useParams()
    const {data: posts, error, isPending} = useFetch('posts.json')

    var post = posts.filter(function (posts) {
        console.log(id, posts.id);
        return posts.id === id;
    });

    return (
        <>
            { post && <PostCard post={post}/> }
        </>
    );
}

export default SinglePost;