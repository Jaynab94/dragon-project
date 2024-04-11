import { useEffect, useState } from "react";
import MiddleNews from "../../middleNews/MiddleNews";

const NewsComming = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, [])


    return (
        <div>
            <h1>Dragon News Home</h1>
            <div className="space-y-4">

                {
                    news.slice(4,6).map(news => <MiddleNews news={news} key={news.id}></MiddleNews>)
                }
            </div>
        </div>
    );
};

export default NewsComming;