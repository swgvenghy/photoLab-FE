import DisplayImage from "../components/Detail/DisplayImage";
import Header from "../components/default/Header";
import Heart from "../components/default/Heart";

const ImageDetail = () => {
  return(
    <div className=" w-[1440px]">
      <Header/>
      <div className=" mt-[110px] flex flex-col justify-center items-center">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">작품 이름</div>
        <hr className=" border border-['#000000] w-44 h-0 my-2"></hr>
        <div className="text-[15px] font-semibold font-['Inter']">작가명</div>
        <DisplayImage/>
        <div className=" flex mt-[50px] justify-between w-[944px]">
          <div className=" font-normal font-['Inter'] leading-tight text-xs w-[624px]">로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.</div>
          <div className="flex flex-col items-center">
            <Heart/>
            <div className=" text-[10px] font-normal font-['Inter'] pt-[15px] text-grey">좋아요 N개</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageDetail;