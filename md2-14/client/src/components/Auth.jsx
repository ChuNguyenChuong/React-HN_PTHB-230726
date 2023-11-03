import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const Auth = () => {
  const user = useSelector((state) => state.auth.user)

  if (user === null) {
    return <Navigate to={"/login"}></Navigate>
  }
  return <div>
    <Outlet></Outlet>
  </div>
}

export default Auth