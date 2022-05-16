import FeaturedPostCard from './FeaturedPostCard'
import PostCard from './PostCard'
const BlogList = ({posts}) => {
    return (
        <>
            {posts[0] && <FeaturedPostCard post={posts[0]}/>}
            <div className="lg:grid lg:grid-cols-2">
                {posts.map((post) => 
                    <PostCard post={post} key={post.id}/>
                )}
            </div>
            <div className="lg:grid lg:grid-cols-3">

            </div>
        </>
    );
}

export default BlogList;