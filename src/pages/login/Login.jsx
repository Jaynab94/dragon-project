import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";




const Login = () => {



    const { logIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()

    console.log('location here', location)

    const handleLoginForm = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)


        //log in user
        logIn(email, password)
            .then(result => {
                console.log(result.user);

                //navigate after login
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                console.error(error)

            })



    }




    return (


        <div>
            <Navber></Navber>
            <h2 className="text-center text-2xl font-bold ">Please Log in</h2>

            <form onSubmit={handleLoginForm} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

                <p className="text-center font-bold mt-4">Dont’t Have An Account ? <Link to={'/register'}><span className="text-red-400">Register</span></Link></p>
            </form>
        </div>

    )
};

export default Login;