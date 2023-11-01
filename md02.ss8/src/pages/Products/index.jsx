import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Products = () => {
  const navigate = useNavigate()

  const [state] = useState([
    {
      id: 1,
      name: "bim bim"
    },
    {
      id: 2,
      name: "my tom tre em"
    }
  ])

  const handleGoToProductDetail = (id) => {
    console.log("🚀 ~ file: index.jsx:16 ~ handleGoToProductDetail ~ id:", id)

    navigate("/products/" + id)

  }

  return <div>
    Products

    {
      state.map(item => {

        return <li
          key={item.id}
          onClick={() => handleGoToProductDetail(item.id)}>
          {item.name}
        </li>
      })
    }

  </div>
}

export default Products