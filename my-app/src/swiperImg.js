import React from 'react';
import src1 from './assets/1.png'
import src2 from './assets/2.png'
import src3 from './assets/3.png'


const arr = [src1,src2,src3]

// 防止注入对一些特殊的进行编码
function SwiperImg() {
  let index  = 0
  setInterval(() => {
    index = (index +1) % 3
  }, 1000);
  return (
    <>
      <img src={arr[index]} style={{width:'375px'}} alt=""/>
    </>
  )

}
export default SwiperImg;
