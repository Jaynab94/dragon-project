
import Header from '../Shared/Header/Header';
import LeftsideNavbar from '../Shared/LeftsideNavbar/LeftsideNavbar';
import Navber from '../Shared/Navber/Navber';
import NewsComming from '../Shared/RightSideNavbar.jsx/NewsComming/NewsComming';
import RightSideNavbar from '../Shared/RightSideNavbar.jsx/RightSideNavbar';
import BreakingNews from './BreakingNews/BreakingNews';


const Home = () => {
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
                        <NewsComming></NewsComming>
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