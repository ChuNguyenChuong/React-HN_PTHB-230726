import { Outlet, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setUserLogin } from "../store/auth"

const Auth = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const userInLocal = localStorage.getItem("user")

  // if (userInLocal) {
  //   const userLogin = JSON.parse(userInLocal)
  //   dispatch(setUserLogin(userLogin))
  // }
  // else if (user === null) {
  //   return <Navigate to={"/login"}></Navigate>
  // }
  return <div>
    <Outlet></Outlet>
  </div>
}

export default Auth