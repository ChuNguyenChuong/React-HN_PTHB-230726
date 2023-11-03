import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addCart } from "../store/cart"
const ProductCard = (props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addCart(props.item))
  }

  return <div className="shadow-2xl w-64 flex gap-3 p-4 rounded-xl">
    <div className="h-16 w-16 rounded-xl overflow-hidden">
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="flex-1">
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
    <div className="flex items-end">
      <AiOutlinePlusCircle className="cursor-pointer" onClick={handleAddToCart} />
    </div>
  </div>
}

export default ProductCard