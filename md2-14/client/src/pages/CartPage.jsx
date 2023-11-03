import { useSelector } from "react-redux"
import Header from "../components/Header"
import CartCard from "../components/CartCard"
import { convertNumberToMoney } from "../helper"

const CartPage = () => {
  const { darkMode } = useSelector(state => state.setting)
  const cartList = useSelector((state) => state.cart.cartList)

  const totalPrice = cartList.reduce((total, item) => {
    return total + (item.price * item.counter)
  }, 0)


  return <div className={`h-screen  ${darkMode ? "bg-slate-500" : ""}`}>
    <Header></Header>

    <div className="p-6 flex items-center flex-col">

      Tổng Thiệt Hại : {convertNumberToMoney(totalPrice)}

      {
        cartList.map(item => {
          return <CartCard key={item.id} img={item.img} name={item.name} price={convertNumberToMoney(item.price)} counter={item.counter} id={item.id}></CartCard>
        })
      }
    </div>
  </div>
}

export default CartPage