
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateDarkMode, updateSearchValue } from "../../store/setting"
import { MdOutlineDarkMode } from "react-icons/md"
import { BsSun } from "react-icons/bs"
import { useState } from "react"
import { logout } from "../../store/auth"
import { clearCart } from "../../store/cart"

const HeaderAdmin = () => {
  const user = useSelector((state) => state.auth.user)
  const darkMode = useSelector(state => state.setting.darkMode)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showLogoutBtn, setShowLogoutBtn] = useState(false)

  const backHome = () => {
    navigate("/")
  }

  const handleChangeSearch = (e) => {
    const value = e.target.value;

    dispatch(updateSearchValue(value))
  }

  const handleChangeMode = () => {
    dispatch(updateDarkMode())
  }
  return <div className={`flex justify-between items-center px-6 border-b shadow-xl ${darkMode ? "bg-slate-500" : "bg-white"}`}>
    <div>
      <img className="h-16" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" onClick={backHome} />
    </div>

    <div>
      <input className="border outline-none  px-3 py-1" type="text" placeholder="serching" onChange={handleChangeSearch} />
    </div>

    <div className="flex items-center gap-3">
      <div>
        {
          darkMode ? <BsSun onClick={handleChangeMode} /> : <MdOutlineDarkMode onClick={handleChangeMode} />
        }

      </div>

      <div className="relative">
        <img className="h-12 w-12 object-cover rounded-full cursor-pointer" src={user?.avt} alt="" onClick={() => setShowLogoutBtn(!showLogoutBtn)} />
        <div className={`${showLogoutBtn ? "flex" : "hidden"} absolute bg-white p-3 right-0 shadow-xl`}>
          <button onClick={() => {
            localStorage.clear()
            dispatch(logout())
            dispatch(clearCart())
            // navigate("/login")
          }}>logout</button>
        </div>
      </div>
    </div>

  </div>
}

export default HeaderAdmin