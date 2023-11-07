import DisplayImage from "../components/Detail/DisplayImage";
import Header from "../components/default/Header";

const ImageDetail = () => {
  return(
    <div className=" w-[1440px]">
      <Header/>
      <div className=" mt-[110px] flex flex-col justify-center items-center">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">작품 이름</div>
        <hr className=" border border-['#000000] w-44 h-0 my-2"></hr>
        <div className="text-[15px] font-semibold font-['Inter']">작가명</div>
        <DisplayImage/>
      </div>
    </div>
  )
}
export default ImageDetail;