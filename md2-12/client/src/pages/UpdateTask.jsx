import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetailTask, updateStatusTask } from "../store/task";

const UpdateTask = () => {
  const param = useParams();
  const dispath = useDispatch();
  const task = useSelector(state => state.task.task)

  useEffect(() => {
    dispath(getDetailTask(param.id))
  }, [param.id])

  const hanldeClickCompleted = () => {
    dispath(updateStatusTask(param.id))
  }

  if (!task) {
    return <div>loading</div>
  }

  return <div>
    Update Task
    {task.id} <br />
    {task.title} <br />
    is completed : {String(task.isCompleted)}
    <button onClick={hanldeClickCompleted}>
      update status
    </button>
  </div>
}

export default UpdateTask 