import BlogList from '../Components/BlogList'
import useFetch from '../Components/useFetch';

const Home = () => {
    const {data: posts, error, isPending} = useFetch('post.json')
    
    return (
        <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { posts && <BlogList posts={posts}/> }
        </main>

    );
}

export default Home;