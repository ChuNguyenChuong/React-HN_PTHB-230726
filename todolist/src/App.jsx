import { useEffect, useState } from 'react';
import './App.css';
import { Input, Button, Table, Select } from 'antd';

function makeid() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 10) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function App() {
  const [inputValue, setState] = useState("");
  const [filterStatus, setStateFilterStatus] = useState('all');
  const [dataSource, setDataSource] = useState([
    {
      key: makeid(),
      title: 'Mike',
      status: "done",
      createAt: new Date(),
    },
    {
      key: makeid,
      title: 'John',
      status: "not done",
      createAt: new Date(),
    },
  ]);
  const [taskByFilter, setTaskByFilter] = useState([]);

  useEffect(() => {
    console.log(filterStatus);
    if (filterStatus === "all") {
      setTaskByFilter(dataSource)
    } else if (filterStatus === "done") {
      setTaskByFilter(dataSource.filter(item => item.status === "done"))
    } else if (filterStatus === "notDone") {
      setTaskByFilter(dataSource.filter(item => item.status !== "done"))
    }
  }, [filterStatus, dataSource])



  const handleDone = (item) => {
    setDataSource((old) => {
      return old.map(itemOld => {
        if (itemOld.key === item.key) {
          itemOld.status = "done"
        }
        return itemOld
      })
    })
  }
  const handleChange = (value) => {
    setStateFilterStatus(value)
  };

  return (
    <>
      <Select
        defaultValue="all"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'all',
            label: 'All',
          },
          {
            value: 'done',
            label: 'done',
          },
          {
            value: 'notDone',
            label: 'not done',
          }
        ]}
      />
      <label htmlFor="">Enter task</label>
      <Input placeholder="Basic usage" onChange={(e) => {
        setState(e.target.value)
      }} />
      <Button onClick={() => {
        setDataSource((old) => {
          return [...old, {
            key: makeid(),
            title: inputValue,
            status: "not done",
            createAt: new Date(),
          }]
        })
      }}>Submit</Button>


      {
        taskByFilter.map((item) => {
          return <li
            className={`ádas bold ${item.status === "done" ? "classDone" : "classNotDone"}`}
          >
            {item.title}
            <button onClick={() => {
              handleDone(item)
            }}>complete</button>
          </li>
        })
      }
    </>
  )
}

export default App



// làm mini project bài session số 6
//  CRUD 
// filter theo name theo status.