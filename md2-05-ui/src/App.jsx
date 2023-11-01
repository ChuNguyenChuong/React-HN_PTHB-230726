
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import ShowTime from './components/ShowTime';
import { useState } from 'react';
import InputCounter from './components/InputCounter';

function App() {
  const [isShowTime, setShowTime] = useState(false)

  const [isShowInput, setShowInput] = useState(false)

  return (
    <>
      <button onClick={() => setShowTime(!isShowTime)}>show/hidden time</button>
      {
        isShowTime && <ShowTime></ShowTime>
      }

      <button onClick={() => setShowInput(!isShowInput)}>show/hidden input</button>
      {
        isShowInput && <InputCounter></InputCounter>
      }
    </>
  )
}

export default App
