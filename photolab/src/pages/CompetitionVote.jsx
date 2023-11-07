import CompetitionSmall from "../components/Competition/CompetitionSmall";
import Header from "../components/default/Header";
import CompetitionImage from "../components/Competition/CompetitionImage";

const CompetitionVote = () => {
  return(
    <div className=" w-[1440px] ">
      <Header/>
      <div className=" flex flex-col mt-[50px] items-center">
        <CompetitionImage/>
        <div className=" mx-[240px] flex flex-wrap pt-[50px]">
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
          <CompetitionSmall/>
        </div>
      </div>
    </div>

  )
}

export default CompetitionVote;