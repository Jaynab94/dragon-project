import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {

    const { creatNewUser } = useContext(AuthContext);


    const handleRegisterForm = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        // creat user
        creatNewUser(email, password)
            .then(result => {
                console.log(result.user)


            })

            .catch(error => [
                console.error(error),

            ])

        form.value = ''

    }
    return (
        <div>
            <Navber></Navber>

            <h2 className="text-2xl text-center font-bold">Register</h2>
            <form onSubmit={handleRegisterForm} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                </div>
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

                </div>
                <div className="form-control mt-6">
                    <Link to={'/login'}> <button className="btn btn-primary">REGISTER</button></Link>
                </div>

                <p className="text-center font-bold mt-4">Have An Account ? <Link to={'/login'}><span className="text-red-400">Log in</span></Link></p>
            </form>
        </div>


    );





};
export default Register;