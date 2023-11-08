import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../store/auth";
import { addDefaultCart } from "../store/cart";

const LoginPage = () => {
  const [email, setEmail] = useState("user1@gmail.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate()
  const [isShowPass, setIsShowPass] = useState(false);

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "email") {
      setEmail(value)
    }
    if (name == "password") {
      setPassword(value)
    }
  }

  const hanldeChangeShowPass = (e) => {
    const checked = e.target.checked
    setIsShowPass(checked)
  }

  const handleLogin = () => {
    const getUserServer = async () => {
      const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)

      if (res.data.length === 0) {
        alert("email or password khong dung ")
      } else {
        const user = res.data[0]
        console.log("🚀 ~ file: LoginPage.jsx:40 ~ getUserServer ~ user:", user)
        const cartInDb = await axios.get(`http://localhost:3000/cart?userId=${user.id}`)
        dispatch(setUserLogin(user))
        if (cartInDb.data.length !== 0) {
          dispatch(addDefaultCart(cartInDb.data))
        }

        localStorage.setItem("user", JSON.stringify(user))
        if (user.role === "admin") {
          navigate("/admin/dashboard");
          return
        }
        navigate("/")
      }
    }

    getUserServer()
  }

  return <div className="h-screen w-screen flex justify-center items-center">

    <div className="flex flex-col items-center gap-5 border p-8 shadow-2xl rounded-xl w-96">
      <div className="text-center text-4xl">
        RA
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="font-bold" htmlFor="">Email :</label>
        <input className="border border-black px-2 py-2 outline-none" type="text" name="email" onChange={handleChange} value={email}></input>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="font-bold" htmlFor="">Password :</label>
        <input className="border border-black px-2 py-2 outline-none"
          type={isShowPass ? "text" : "password"} name="password" onChange={handleChange} value={password}></input>
      </div>

      <div className="flex gap-1 w-full">
        <input type="checkbox" id="showPass" onChange={hanldeChangeShowPass} />
        <label className="font-bold" htmlFor="showPass">show password</label>
      </div>


      <button className="bg-blue-600 w-max px-8 py-2 rounded-xl text-white font-bold" onClick={handleLogin}>Login</button>

    </div>



  </div>
}

export default LoginPage