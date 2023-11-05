const Exhibition = () => {
  return(
    <div className=" flex justify-center w-[1440px]">
      <div className=" w-[960px] my-[50px] flex flex-col">
        <div className=" mx-[8px] mb-[12px] text-mainBlack text-2xl font-extrabold font-['Pretendard']">포토랩 전시회</div>
        <div className="flex my-[12px]">
          <img src="https://via.placeholder.com/224x224" className=" w-56 h-56 mx-[8px]"/> 
          <img src="https://via.placeholder.com/224x224" className=" w-56 h-56 mx-[8px]"/> 
          <img src="https://via.placeholder.com/224x224" className=" w-56 h-56 mx-[8px]"/> 
          <img src="https://via.placeholder.com/224x224" className=" w-56 h-56 mx-[8px]"/> 
        </div>
        <div className=" mx-[8px] flex justify-end mt-[12px] text-grey text-[15px] font-extrabold font-['Pretendard']">+ 더보기</div>
      </div>
    </div>
  )
}

export default Exhibition;