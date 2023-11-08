import { useCallback, useState } from "react";
import ListProducts from "./products/ListProducts";
import CreateProducts from "./products/CreateProducts";
import { Link } from "react-router-dom";

const ProductsManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);


  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <ListProducts></ListProducts>
      case 1:
        return <CreateProducts setTabIndex={setTabIndex}></CreateProducts>
      default:
        return null
    }
  }, [tabIndex])

  return <div className="p-8">
    <Link to="/admin/dashboard" className="mb-5 flex w-max px-4 py-2 border rounded-xl h-max cursor-pointer shadow-xl">
      Dashboard
    </Link>
    <div className="flex gap-4 mb-3">
      <div className={`px-4 py-2 rounded-lg shadow-lg cursor-pointer ${tabIndex === 0 ? "bg-blue-400 text-white font-bold" : ""}`} onClick={() => setTabIndex(0)}>List Products</div>
      <div className={`px-4 py-2 rounded-lg shadow-lg cursor-pointer ${tabIndex === 1 ? "bg-blue-400 text-white font-bold" : ""}`} onClick={() => setTabIndex(1)}>Create Product</div>
    </div>
    {renderByTab()}
  </div>
}

export default ProductsManagement