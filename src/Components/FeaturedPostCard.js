import { Link } from "react-router-dom";

const FeaturedPostCard = ({post}) => {
    return ( 
        <article className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                <div className="py-6 px-5 lg:flex">
                    <div className="flex-1 lg:mr-8">
                        <img src="./images/illustration-1.png" alt="Blog Post illustration" className="rounded-xl" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <header className="mt-8 lg:mt-0">
                            <div className="space-x-2">
                            {post.categories.map((category) => 
                            <a href="#" className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold" style={{ fontSize: 10 }} key={post.id}>{category.name}</a>
                            )}
                            </div>
                            <div className="mt-4">
                                <h1 className="text-3xl">
                                    This is a big title and it will look great on two or even three lines. Wooohoo!
                                </h1>
                                <span className="mt-2 block text-gray-400 text-xs">
                                    Published <time>1 day ago</time>
                                </span>
                            </div>
                        </header>
                        <div className="text-sm mt-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="mt-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <footer className="flex justify-between items-center mt-8">
                            <div className="flex items-center text-sm">
                                <img src="./images/lary-avatar.svg" alt="Lary avatar" />
                                <div className="ml-3">
                                    <h5 className="font-bold">{post.author.name}</h5>
                                    <h6>Mascot at Laracasts</h6>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <Link to={"/post/"+post.id}> 
                                    <span className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8">Read More</span>
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>
        </article>
     );
}
 
export default FeaturedPostCard;