import BlogList from '../Components/BlogList'
import Header from '../Components/Header';
import useFetch from '../Components/useFetch';

const Home = () => {
    const {data: posts, error, isPending} = useFetch('post.json')
    const {data: categories} = useFetch('categories.json')
    const {data: authors} = useFetch('authors.json')

    const handleOnChnage = (id) => {
        // {data: posts, error, isPending} = useFetch('post-1.json')
    }

    return (
        <>
            <Header categories={categories} authors={authors} handleOnChnage={handleOnChnage}/>
            <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { posts && <BlogList posts={posts}/> }
            </main>
        </>
    );
}

export default Home;