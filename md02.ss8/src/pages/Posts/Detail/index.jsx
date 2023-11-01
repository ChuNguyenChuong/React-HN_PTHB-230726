import { useParams } from "react-router-dom"

const DetailPost = () => {
  const params = useParams()

  return <div>
    detail - {params.id}
  </div>
}


export default DetailPost