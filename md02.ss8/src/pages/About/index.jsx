import { Navigate, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();


  const handleClickBack = () => {
    navigate(-1)
  }

  return <div>about page
    <div onClick={handleClickBack}>back</div>
  </div>
}

export default AboutPage