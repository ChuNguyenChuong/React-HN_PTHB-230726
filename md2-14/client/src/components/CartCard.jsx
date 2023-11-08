import { AiFillDelete, AiOutlineMinus } from "react-icons/ai"
import { BsPlus } from "react-icons/bs"
import { decrementProduct, deleteProduct, incrementProduct } from "../store/cart"
import { useDispatch, useSelector } from "react-redux"

const CartCard = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)

  const handleIncrement = () => {
    dispatch(incrementProduct({ id: props.id, userId: user.id }))
  }

  const handleDecrement = () => {
    dispatch(decrementProduct({ id: props.id, userId: user.id }))
  }

  const handleDelete = () => {
    dispatch(deleteProduct(props.id))
  }

  return <div className="flex justify-between items-center w-[450px] shadow-2xl p-4 px-5 rounded-xl">
    <div className="flex gap-4 items-center ">
      <div className="h-16 w-16 rounded-xl overflow-hidden">
        <img src={props.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        {props.name}
      </div>
      <div>
        {props.price}
      </div>

    </div>

    <div className="flex items-center gap-5">
      <div className="flex justify-center items-center gap-2">
        {
          props.counter === 1 ? null : <AiOutlineMinus onClick={handleDecrement} className="cursor-pointer" />
        }

        {props.counter}
        <BsPlus className="cursor-pointer" onClick={handleIncrement} />
      </div>
      <AiFillDelete className="cursor-pointer" onClick={handleDelete} />
    </div>
  </div>
}
export default CartCard