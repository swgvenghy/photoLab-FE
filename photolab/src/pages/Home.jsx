import Header from "../components/default/Header"
import mainView from '../assets/mainView.png'
import { useNavigate } from "react-router-dom"
import MainCompetition from "../components/Home/MainCompetition"
import Exhibition from "../components/Home/Exhibition"
const Home = () => {
  const navigate = useNavigate();

  return(
    <div>
      <Header/>
      <img src={mainView} className="w-[1440px] h-[500px] pt-[60px]"/>
      <MainCompetition/>
      <Exhibition/>
    </div>
    
  )
}

export default Home;