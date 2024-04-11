import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzonePic from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNavbar = () => {
    return (
        <div >
            <div className="p-4 space-y-4  ">
                <h2>Log in with</h2>

                <button className="btn w-full btn-outline">

                    <FcGoogle />
                    Login with Google
                </button>
                <button className="btn w-full btn-outline">


                    <FaGithub />
                    Login with Github
                </button>
            </div>

            <div>
                <div className="p-4  mb-6 " >
                    <h1>Find us on</h1>

                    <a className="flex p-4 gap-4 mt-6 items-center border rounded-t-lg	" href="">
                        <FaFacebook></FaFacebook>
                        <span>Facebook </span>
                    </a>
                    <a className="flex p-4 gap-4 items-center border-x 	" href="">
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className="flex p-4 gap-4 items-center border 	" href="">
                        <FaInstagram></FaInstagram>
                        <span>Instagram </span>
                    </a>
                </div>
            </div>


            <div className="space-y-4">
                <h1>Q Zone</h1>

                <img src={qzonePic} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />


            </div>



        </div>
    );
};

export default RightSideNavbar;