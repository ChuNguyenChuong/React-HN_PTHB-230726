import { NavLink, Outlet } from "react-router-dom"

const PostsPage = () => {


  return <div>
    PostsPage Header <NavLink to={"/posts/about-posts"}>about-posts</NavLink> <NavLink to={"/posts/5"}>Dynamic page</NavLink> <br />


    <Outlet />

  </div>
}

export default PostsPage