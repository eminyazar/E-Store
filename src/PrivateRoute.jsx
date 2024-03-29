import { Navigate } from "react-router-dom"

export default function PrivateRoute({user, children})
{
    if(!user?.id){
        return <Navigate to="/Login" replace/>
    }
    return children
}