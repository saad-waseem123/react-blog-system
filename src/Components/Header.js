
const Header = ({categories, authors, handleOnChnage}) => {
    return (
        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest <span className="text-blue-500">React js From Scratch</span> News
            </h1>
            <h2 className="inline-flex mt-2">By M.Saad <img src="/images/lary-head.svg" alt="Head of Lary the mascot" /></h2>
            <p className="text-sm mt-14">
                Another year. Another update. We're refreshing the popular Laravel series with new content.
                I'm going to keep you guys up to speed with what's going on!
            </p>
            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-8">
                {/*  Category */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold"
                     onChange={(e)=>{handleOnChnage(e.target.value)}}>
                        <option key={0}>Categories</option>
                        {console.log(categories)}
                        {categories && categories.map((category) => 
                        <option key={ category.id } value={ category.id }>{ category.name }</option>
                        )}
                    </select>
                    <svg className="transform -rotate-90 absolute pointer-events-none" style={{ right: 12 }} width={22} height={22} viewBox="0 0 22 22">
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path fill="#222" d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z" />
                        </g>
                    </svg>
                </div>
                {/* Authors */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold">
                        <option>Authors</option>
                        {authors && authors.map((author) => 
                        <option value="{ author.name }" key={author.id}>{ author.name }</option>
                        )}                
                    </select>
                    <svg className="transform -rotate-90 absolute pointer-events-none" style={{ right: 12 }} width={22} height={22} viewBox="0 0 22 22">
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path fill="#222" d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z" />
                        </g>
                    </svg>
                </div>
                {/* Search */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
                    <form method="GET" action="#">
                        <input type="text" name="search" placeholder="Find something" className="bg-transparent placeholder-black font-semibold text-sm" />
                    </form>
                </div>
            </div>
        </header>

    );
}

export default Header;