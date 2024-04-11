
const SingleNews = ({ news }) => {
    console.log(news);
    const { title, image_url,categories} = news;

    return (
        <div className="card space-y-4 ">
            <figure><img src={image_url} alt="comming" /></figure>
            <div className="">
                <h2 className=" text-[#403F3F] font-semibold">{title}</h2>


            </div>

            <div>
                
                <p>{categories}</p>
            </div>
        </div>
    );
};

export default SingleNews;