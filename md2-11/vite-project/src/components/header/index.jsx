import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components"
// Module css / scope css
const Header = () => {
  const [user, setUser] = useState()
  const [input, setInput] = useState("")

  // bai 1 - form đăng ký
  //  bài 2 - tìm film
  // bài 3 - CRUD post


  useEffect(() => {
    // bất đồng bộ - promise
    // async await

    async function callUser() {
      try {
        const res = await axios.get("http://localhost:3000/users/1")
        console.log("🚀 ~ file: index.jsx:29 ~ callUser ~ res:", res);
        res.status === 200 && alert("xoa oce")
      } catch (error) {
        console.log(error);
      }

    }

    // callUser()



    // const response = fetch("http://localhost:3000/users/1")
    // spending 
    // fulfilled
    // rejecte

    // queue
    // setTimeout(() => {
    //   console.log("0");
    // }, 0)
    // stack
    // console.log("1");
    // console.log("3");


    // goi API useFetch
    // fetch("http://localhost:3000/users/1").then((response) => {
    //   // bien response thanh data json.
    //   return response.json()
    // }).then(data => {
    //   console.log(data);
    //   setUser(data)
    // })
  }, [])

  const handleDeleteUser = async () => {
    const res = await axios.delete("http://localhost:3000/users/2")
  }
  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value)
  }

  const hanldeSubmit = async () => {
    console.log(input);
    const res = await axios.post("http://localhost:3000/users", {
      "name": input,
      "age": 15,
      "image": "",
      "id": 15
    })
    console.log(res);
  }

  return <div>Header Page
    <Image src={user?.image} alt="" height={34} />
    <Name>{user?.name}</Name>
    <DivElement>div element</DivElement>
    <div onClick={handleDeleteUser}>delete user 2</div>


    <Input onChange={handleChangeInput}></Input>
    <Button onClick={(hanldeSubmit)}>submit</Button>
  </div>
}

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: gray;
  color:white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: red
  }
`

const Input = styled.input`
  outline: none;
  padding : 6px 12px
`

const Name = styled.div`
  color: green;
`

const Image = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  border-radius: 50%;
`

const DivElement = styled.div`
  color : red;
`

export default Header