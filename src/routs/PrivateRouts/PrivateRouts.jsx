import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {

        return <BarLoader className="mt-40" color="#36d7b7" />
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to={'/login'}></Navigate>



};



















export default PrivateRouts;