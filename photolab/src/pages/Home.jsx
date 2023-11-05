import Header from "../components/Header"
import mainView from '../assets/mainView.svg'
const Home = () => {
  return(
    <>
      <Header/>

      <div className=" pt-[100px]">
        <img className="" src={mainView}/>
        <div className="w-[1440px] h-[748px] relative bg-gray-50">
          <div className="w-[206px] h-52 left-[162px] top-[80px] absolute">
            <div className="left-0 top-0 absolute text-zinc-800 text-6xl font-extrabold font-['Pretendard']">봄 사진<br/>공모전</div>
            <div className="left-0 top-[152px] absolute text-neutral-700 text-xl font-semibold font-['Pretendard']">최고의 사진을 뽑아주세요!</div>
            <div className="left-0 top-[184px] absolute text-neutral-700 text-xl font-semibold font-['Pretendard']">23.10.15 ~ 10.22</div>
          </div>
          <img className="w-96 h-[282px] left-[528px] top-[386px] absolute rounded-[20px]" src="https://via.placeholder.com/384x282" />
          <div className="w-96 h-[282px] left-[528px] top-[80px] absolute rounded-[20px]">
            <div className="w-96 h-[282px] left-0 top-0 absolute bg-black bg-opacity-70 rounded-[20px]" />
            <div className="w-[52px] h-[58px] left-[166px] top-[112px] absolute">
              <div className="left-0 top-0 absolute text-center text-white text-xl font-bold font-['Pretendard']">작품명</div>
              <div className="left-[7px] top-[40px] absolute text-center text-white text-[15px] font-bold font-['Pretendard']">홍길동</div>
            </div>
          </div>
          <img className="w-96 h-[282px] left-[936px] top-[386px] absolute rounded-[20px]" src="https://via.placeholder.com/384x282" />
          <img className="w-96 h-[282px] left-[936px] top-[80px] absolute rounded-[20px]" src="https://via.placeholder.com/384x282" />
          <div className="w-[180px] h-[50px] left-[162px] top-[618px] absolute">
            <div className="left-[23px] top-[13px] absolute text-right text-zinc-800 text-xl font-semibold font-['Pretendard']">🗳️ 투표하러 가기</div>
            <div className="w-[180px] h-[50px] left-0 top-0 absolute rounded-[10px] border border-black" />
          </div>
        </div>
      </div>
      
      <div className="w-[1440px] h-[419px] relative">
        <div className="w-[944px] h-56 left-[248px] top-[103px] absolute">
          <img className="w-56 h-56 left-0 top-0 absolute rounded-[10px]" src="https://via.placeholder.com/224x224" />
          <img className="w-56 h-56 left-[240px] top-0 absolute rounded-[10px] cursor-pointer" src="https://via.placeholder.com/224x224" />
          <img className="w-56 h-56 left-[480px] top-0 absolute rounded-[10px] cursor-pointer" src="https://via.placeholder.com/224x224" />
          <img className="w-56 h-56 left-[720px] top-0 absolute rounded-[10px] cursor-pointer" src="https://via.placeholder.com/224x224" />
        </div>
        <div className="left-[248px] top-[50px] absolute text-center text-zinc-800 text-2xl font-extrabold font-['Pretendard']">포토랩 전시회</div>
        <div className="left-[1139px] top-[351px] absolute text-center text-zinc-500 text-[15px] font-extrabold font-['Pretendard'] cursor-pointer">+ 더보기</div>
      </div>
    </>
    
  )
}

export default Home;