
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heart from '../default/Heart'

const CompetitionSmall = () => {
  const navigate = useNavigate();
  const [heartState, setHeartClicked] = useState(false);
  const heartClicked = () => {
    heartState === false ? setHeartClicked(true) : setHeartClicked(false);
  }
  return(
    <div className="w-[304px] h-[324px] relative mt-3 mx-[8px] bg-muteBg">
      <div className=" w-full h-full bg-gray-50 rounded-[10px] border border-solid">
        <img className="w-[304px] h-60 rounded-t-[10px]" src="https://via.placeholder.com/304x240" onClick={() => {navigate('/imageDetail')}}/>
        <div className=" flex w-full justify-between px-[26px] pt-[16px] items-start">
          <div className='flex'>
            <div className=' text-indigo-900 text-[25px] font-semibold font-[Pretendard]'>1</div>
            <div className=" pl-4">
              <div className=' text-indigo-900 text-[15px] font-semibold font-["Pretendard"] mb-2 leading-[30px]' onClick={() => {navigate('/imageDetail')}}>작가 - 작품이름</div>
              <div className=' text-neutral-700 text-xs font-medium font-["Pretendard"]'>좋아요 n개</div>
            </div>
          </div>
          <Heart/>
        </div>
      </div>
    </div>
  )
}

export default CompetitionSmall;