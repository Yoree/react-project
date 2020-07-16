import React from 'react';


// 防止注入对一些特殊的进行编码
function changeProps() {
  let num  = 1

  return (
    <>
      {num}
    </>
  );

}

export default changeProps;
