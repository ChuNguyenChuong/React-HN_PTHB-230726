import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../store/cart"
import { updateCartApi } from "../helper/axious"
const ProductCard = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const handleAddToCart = () => {
    dispatch(addCart({ product: props.item, userId: user.id }))
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