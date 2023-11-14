const InputInfo = (props) => {
  const name = props.name;
  const content = props.content
  return(
    <div>
      <div className=" text-mainBlack text-xl font-bold font-['Pretendard'] my-2">{name}</div>
      <input placeholder={`${content}`} className=" w-[328px] h-[50px] bg-realWH rounded-[5px] border-black border mb-2 border-1 pl-[9px]"/>
    </div>
  )
}
export default InputInfo;