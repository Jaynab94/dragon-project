import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleNews from "../../Home/news/SingleNews";

const LeftsideNavbar = () => {
    const [Categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, [])

    const [News, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, [])



    return (
        <div>
            <h1> All Category</h1>

            {
                Categories.map(category =>
                    <Link to={`/category/${category.id}`} className="block w-full p-4 mt-6 hover:bg-gray-100 hover:text-black font-medium text-[20px] text-[#9F9F9F] "
                        key={category.id}>
                        {category.name}
                    </Link>)
            }





            <div>


                <h1>All news</h1>
                <div className="space-y-6">
                    {
                        News.slice(0,3).map(news => <SingleNews key={news.id} news={news}></SingleNews>)
                    }
                </div>

            </div>

        </div>
    );
};

export default LeftsideNavbar;