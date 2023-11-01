
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "./../../components/loading"
import "./../../App.css"
import { useDispatch, useSelector } from "react-redux"
import { getStudent } from "../../store/users"

const HomePage = () => {
  // bien chua danh sach hocj sinh 
  const [student, setStudent] = useState(null)

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.users.isLoading)
  console.log("🚀 ~ file: index.jsx:12 ~ HomePage ~ isLoading:", isLoading)

  // khi vao homepage thì se dispatch action gọi api
  useEffect(() => {
    // function getListStudent() {
    //   axios.get("http://localhost:3000/users").then(res => {
    //     setStudent(res.data)
    //   });
    // }
    // getListStudent();

    // đẩy lên store action getStudent
    dispatch(getStudent());
  }, [])

  return <div style={{
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }}>
    {/* trong khi goi api lay danh sach hojc sinh thi hien thi loading ...  */}

    {
      isLoading ? <Loading /> : "cos du lieu"
    }

    {/* bien chuaw hoc co du lieu thi minh hien thi ra danh sach ul li */}

  </div>
}

export default HomePage