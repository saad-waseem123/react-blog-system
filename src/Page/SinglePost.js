import { useParams } from "react-router-dom";
import PostCard from "../Components/PostCard";
import useFetch from '../Components/useFetch';

const SinglePost = () => {
    const { id } = useParams()
    const { data: post, error, isPending } = useFetch('/post-1.json')

    return (
        <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {post && <PostCard post={post} />}
        </main>
    );
}

export default SinglePost;