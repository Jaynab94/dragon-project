import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navber from "../Shared/Navber/Navber";
import RightSideNavbar from "../Shared/RightSideNavbar.jsx/RightSideNavbar";

const NewsDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4 gap-2">
                <div className="grid col-span-3 border">
                    <h2 className="text-2xl">News Details</h2>
                    <p>{id}</p>
                </div>

                <div className="border">
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;