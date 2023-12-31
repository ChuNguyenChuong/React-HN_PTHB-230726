import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateDarkMode, updateSearchValue } from "../store/setting"
import { MdOutlineDarkMode } from "react-icons/md"
import { BsSun } from "react-icons/bs"
import { useState } from "react"
import { logout } from "../store/auth"
import { clearCart } from "../store/cart"

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  const cartList = useSelector((store) => store.cart.cartList)
  const darkMode = useSelector(state => state.setting.darkMode)
  const [showLogoutBtn, setShowLogoutBtn] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const numberCounterInCartList = cartList.reduce((total, item) => {
    return total + item.counter
  }, 0)

  const backHome = () => {
    navigate("/")
  }

  const goToCartPage = () => {
    navigate("/cart")
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
      <div>{user?.name}</div>
      <div>
        {
          darkMode ? <BsSun onClick={handleChangeMode} /> : <MdOutlineDarkMode onClick={handleChangeMode} />
        }

      </div>
      <div className="relative" onClick={goToCartPage}>
        <div className="absolute -top-2 -right-1 text-white bg-red-500 h-3 w-3 flex justify-center items-center rounded-full text-[10px] font-bold">{numberCounterInCartList}</div>
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
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

export default Header