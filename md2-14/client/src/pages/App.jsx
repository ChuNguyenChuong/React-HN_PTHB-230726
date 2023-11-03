import { useEffect, useState } from "react"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import axios from "axios"
import Loading from "../components/Loading"
import { useSelector } from "react-redux"

function App() {
  const { searchValue, darkMode } = useSelector(state => state.setting)
  const [productsList, setProductList] = useState()
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:3000/products")
      setProductList(res.data)
      setLoading(false)
    }
    getProduct()
  }, [])


  return (
    <>
      <div className={`h-screen  ${darkMode ? "bg-slate-500" : ""}`}>
        <Header></Header>

        {
          isLoading ? <Loading /> : <div className={`p-4 flex flex-wrap gap-3 `}>
            {productsList && productsList.filter(item => item.name.includes(searchValue)).map(item => {
              return <ProductCard key={item.id} img={item.img} name={item.name} price={item.price} item={item}></ProductCard>
            })}
          </div>
        }
      </div>
    </>
  )
}

export default App
