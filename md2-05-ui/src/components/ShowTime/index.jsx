import { useEffect, useState } from "react"


const ShowTime = () => {
  const [time, settime] = useState({
    hh: 12,
    pp: 0,
    ss: 0
  })


  useEffect(() => {
    const idInterval = setInterval(() => {
      const date = new Date();
      const hh = date.getHours();
      const pp = date.getMinutes();
      const ss = date.getSeconds();
      settime({
        hh: hh,
        pp: pp,
        ss: ss
      })
      console.log("running ");
    }, 1000);


    return () => {
      clearInterval(idInterval)
    }

  }, [])


  return <div>
    <div>
      {time.hh}h
    </div>
    <div>
      {time.pp}p
    </div>
    <div>
      {time.ss}s
    </div>
  </div>
}

export default ShowTime