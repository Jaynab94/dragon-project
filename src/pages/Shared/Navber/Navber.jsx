import { Link, NavLink } from "react-router-dom";
import user from '../../../assets/user.png'

const Navber = () => {

    const navLinks = <>

        <NavLink to={'/'}> <li><a>Home</a></li></NavLink>
        <NavLink to={'/about'}> <li><a>About</a></li></NavLink>
        <NavLink to={'/career'}> <li><a>career</a></li></NavLink>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">

                <div className="avatar h-10 w-10 mr-8">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className="" src={user} />
                    </div>
                </div>


                <Link>
                    <button>Login</button>
                </Link>


            </div>

        </div>
    );
};

export default Navber;