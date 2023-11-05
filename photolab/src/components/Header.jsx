import logo from '../assets/Logo.svg'

const Header = () => {
  return(
    <div className="w-[1440px] h-[100px] fixed z-10">
      <div className="w-[1440px] h-[100px] left-0 top-0 absolute bg-white border-b border-black" />
      <div className="w-[157.42px] h-6 left-[1154.58px] top-[44px] absolute">
        <div className="left-[87.42px] top-0 absolute text-center text-zinc-800 text-xl font-bold font-['Pretendard'] cursor-pointer">회원가입</div>
        <div className="left-0 top-0 absolute text-center text-zinc-800 text-xl font-bold font-['Pretendard'] cursor-pointer">로그인</div>
      </div>
      <div className="w-[420px] h-10 left-[488px] top-[30px] absolute">
        <div className="w-[100px] h-10 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="w-[100px] h-10 px-2 py-3 justify-center items-center inline-flex">
            <div className="w-[84px] h-4 text-center text-zinc-800 text-[15px] font-bold font-['Pretendard'] cursor-pointer">포토랩 소개</div>
          </div>
        </div>
        <div className="w-[100px] h-10 left-[160px] top-0 absolute bg-white justify-center items-center inline-flex">
          <div className="w-[100px] h-10 px-2 py-3 justify-center items-center inline-flex">
            <div className="w-[84px] h-4 text-center text-zinc-800 text-[15px] font-bold font-['Pretendard'] cursor-pointer">포토랩 공모전</div>
          </div>
        </div>
        <div className="w-[100px] h-10 left-[320px] top-0 absolute bg-white justify-center items-center inline-flex">
          <div className="w-[100px] h-10 px-2 py-3 justify-center items-center inline-flex">
            <div className="w-[84px] h-4 text-center text-zinc-800 text-[15px] font-bold font-['Pretendard'] cursor-pointer">포토랩 전시</div>
          </div>
        </div>
      </div>
      <div className="w-[177px] h-[38px] left-[128px] top-[36px] absolute">
        <img src={logo}/>
      </div>
    </div>
  )
}

export default Header
