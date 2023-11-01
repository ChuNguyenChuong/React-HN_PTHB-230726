import { useEffect, useState } from "react"

const InputCounter = () => {
  const [counter, setCounter] = useState(0);

  const [inputValue, setInputValue] = useState("")


  useEffect(() => {
    console.log("asdasd");
    const length = inputValue.length;

    setCounter(length)
  }, [inputValue, setCounter])


  useEffect(() => {
    console.log(counter);
  }, [counter])


  return <div>
    <input type="text" value={inputValue} onChange={(e) => {
      const valueInput = e.target.value;
      setInputValue(valueInput)
    }} />

    {counter}

    <button onClick={() => setInputValue("")}>reset</button>
  </div>
}

export default InputCounter