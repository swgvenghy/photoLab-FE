import { useNavigate } from "react-router-dom";

const CompetitionImage = () => {

  return(
    <div className=" w-[944px] h-[150px] bg-stone rounded-[20px] mt-[50px]">
      <div className=" py-[33px] pl-[56px] flex flex-col justify-between">
        <div className=" text-3xl font-extrabold font-['Pretendard'] text-muteBg">2023 가을 사진 공모전</div>
        <div className=" text-muteBg text-xl font-extrabold font-['Pretendard'] pt-6">이번 가을 사진 공모전의 주제는 쓸쓸함입니다.</div>
      </div>
    </div>
  )
}

export default CompetitionImage;