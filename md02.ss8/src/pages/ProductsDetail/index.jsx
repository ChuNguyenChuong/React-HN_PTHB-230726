import { useLocation, useParams, useSearchParams } from "react-router-dom"


const ProductsDetail = () => {

  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const location = useLocation()


  return <div>product detail san pham so - {params.id} </div>
}
export default ProductsDetail