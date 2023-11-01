import { Link, NavLink, useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate();



  const clickGoToAbout = () => {
    navigate("/about")
  }

  return <div>
    {/* dieeuf huong trang web: Link */}
    <Link to="/about">go to about page</Link>

    {/* NavLink */}
    <NavLink to="/about">go to about page</NavLink>

    <div onClick={clickGoToAbout}>
      go to about page
    </div>

  </div>
}

export default Home