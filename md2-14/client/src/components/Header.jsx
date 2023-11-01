import { IoMdNotificationsOutline } from "react-icons/io"
import { useSelector } from "react-redux"
const Header = () => {
  const user = useSelector((state) => state.auth.user)
  console.log("🚀 ~ file: Header.jsx:5 ~ Header ~ user:", user)


  return <div className="flex justify-between items-center px-6 border-b shadow-xl">

    <div>
      <img className="h-16" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="" />
    </div>

    <div>
      <input className="border outline-none  px-3 py-1" type="text" placeholder="serching" />
    </div>

    <div className="flex items-center gap-3">
      <div>
        <IoMdNotificationsOutline />
      </div>
      <div>
        <img className="h-12 w-12 object-cover rounded-full" src={user?.avt} alt="" />
      </div>
    </div>

  </div>
}

export default Header