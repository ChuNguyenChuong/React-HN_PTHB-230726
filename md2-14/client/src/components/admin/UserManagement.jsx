import { useCallback, useState } from "react"
import ListUser from "./users/ListUser";
import CreateUser from "./users/CreateUser";
import { Link } from "react-router-dom";

const UserManagement = () => {
  // 0 - list , 1 - create , 2 - 
  const [tabIndex, setTabIndex] = useState(0);


  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <ListUser></ListUser>
      case 1:
        return <CreateUser setTabIndex={setTabIndex}></CreateUser>

      default:
        return null
    }
  }, [tabIndex])



  return <div className="p-8">
    <Link to="/admin/dashboard" className="mb-5 flex w-max px-4 py-2 border rounded-xl h-max cursor-pointer shadow-xl">
      Dashboard
    </Link>
    <div className="flex gap-4 mb-3">
      <div className={`px-4 py-2 rounded-lg shadow-lg cursor-pointer ${tabIndex === 0 ? "bg-blue-400 text-white font-bold" : ""}`} onClick={() => setTabIndex(0)}>List Users</div>
      <div className={`px-4 py-2 rounded-lg shadow-lg cursor-pointer ${tabIndex === 1 ? "bg-blue-400 text-white font-bold" : ""}`} onClick={() => setTabIndex(1)}>Create Users</div>


    </div>
    {renderByTab()}
  </div>
}

export default UserManagement