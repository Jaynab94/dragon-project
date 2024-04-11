import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex mt-6">
            <button className="btn btn-secondary">breaking news</button>

            <Marquee  className="bg-fuchsia-600 ml-4 ">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;