import heart from '../../assets/heart.svg'
import FilledHeart from '../../assets/Fillheart.svg'
import { useState } from 'react';
const Heart = () => {
  const [heartState, setHeartClicked] = useState(false);
  const heartClicked = () => {
    heartState === false ? setHeartClicked(true) : setHeartClicked(false);
  }

  return(
    <div>
      {
        heartState === false 
        ? <img src={heart} onClick={heartClicked} className=' pt-[9px] cursor-pointer'/>
        : <img src={FilledHeart} onClick={heartClicked} className=' pt-[9px] cursor-pointer'/>
      }
    </div>
  )
}
export default Heart;
