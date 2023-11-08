import { useNavigate } from "react-router-dom";

const MainCompetition = () => {
  const navigate = useNavigate();
  return(
    <div className="py-[60px] flex justify-center w-[1440px] bg-muteBg">
      <div className=" w-[944px] flex justify-between">
        <div className="flex flex-col justify-between ">
          <div className="">
            <div className="my-[6px] text-zinc-800 text-6xl font-extrabold font-['Pretendard']">봄 사진 <br/> 공모전</div>
            <div className=" my-[2px] text-neutral-700 text-xl font-semibold font-['Pretendard']">최고의 사진을 뽑아주세요!</div>
            <div className="my-[2px] text-neutral-700 text-xl font-semibold font-['Pretendard']">23.10.15 ~ 10.22</div>
          </div>
          <div className="flex justify-center items-center border border-black rounded-[10px] w-[180px] h-[50px]">
            <div className="text-right text-zinc-800 text-xl font-semibold font-['Pretendard']" onClick={() => {navigate('/competitionvote')}}>🗳️ 투표하러 가기</div>
          </div>
        </div>
        <div className=" w-[720px] flex flex-wrap justify-end">
          <img src="https://via.placeholder.com/320x240" alt="testImage" className="w-80 h-60 rounded-[20px] ml-[24px] my-[6px]"/>
          <img src="https://via.placeholder.com/320x240" alt="testImage" className="w-80 h-60 rounded-[20px] ml-[24px] my-[6px]"/>
          <img src="https://via.placeholder.com/320x240" alt="testImage" className="w-80 h-60 rounded-[20px] ml-[24px] my-[6px]"/>
          <img src="https://via.placeholder.com/320x240" alt="testImage" className="w-80 h-60 rounded-[20px] ml-[24px] my-[6px]"/>
        </div>
      </div>
      
    </div>
  )
}

export default MainCompetition;