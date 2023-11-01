import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByNumber, incrementCounter } from './store/counter'
import { useRef } from 'react'

function App() {
  // useSelector truy van den state cua store 
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const inputRef = useRef()

  const handleClickIncrement = () => {
    dispatch(incrementCounter())
  }

  const handleClickIncrementByNumber = () => {
    const valueInput = inputRef.current.value
    dispatch(incrementByNumber(valueInput))
  }

  // tạo ứng dụng todo list sử dụng redux và react router dome
  // path / hiển thị ra list sản task
  // path /create là page tạo task
  // path /:id la page update task có id tương ứng

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClickIncrement}>
          count is {counter}
        </button>
        <br />
        <input type="number" ref={inputRef} />
        <button onClick={handleClickIncrementByNumber}>increment</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
