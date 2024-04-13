
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftsideNavbar from '../Shared/LeftsideNavbar/LeftsideNavbar';
import Navber from '../Shared/Navber/Navber';
import NewsComming from '../Shared/RightSideNavbar.jsx/NewsComming/NewsComming';
import RightSideNavbar from '../Shared/RightSideNavbar.jsx/RightSideNavbar';
import BreakingNews from './BreakingNews/BreakingNews';


const Home = () => {

    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <div>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navber></Navber>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-6  ">

                    <div>
                        <LeftsideNavbar></LeftsideNavbar>
                    </div>

                    <div className=" md:col-span-2">
                        {
                            news.slice(0,2) .map(aNews =>
                                <NewsComming
                                    key={news.id}
                                    news={aNews}>

                                </NewsComming>)
                        }
                    </div>

                    <div >
                        <RightSideNavbar></RightSideNavbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;