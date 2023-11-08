import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import HeaderAdmin from "./admin/HeaderAdmin"

const AuthAdmin = () => {
  const user = useSelector((state) => state.auth.user)

  if (user === null || user.role !== "admin") {
    return <Navigate to={"/login"}></Navigate>
  }
  return <div>
    <HeaderAdmin></HeaderAdmin>
    <Outlet></Outlet>
  </div>
}

export default AuthAdmin