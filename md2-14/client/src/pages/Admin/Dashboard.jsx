import { Link } from "react-router-dom"


const Dashboard = () => {

  return <div className="p-10 flex gap-5">
    <Link to="/admin/users" className="px-10 py-8 border rounded-xl cursor-pointer shadow-xl">
      Manager Users
    </Link>
    <Link to="/admin/products" className="px-10 py-8 border rounded-xl cursor-pointer shadow-xl">
      Manager Product
    </Link>
  </div>
}

export default Dashboard