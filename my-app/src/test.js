import React from 'react';


// 防止注入对一些特殊的进行编码
function Test() {
  const cls = "<h5>阿沙发沙发<p>asdfasd</p></h5>"

  return (
    <>
      <ul dangerouslySetInnerHTML={{__html:cls}}>
      </ul>
    </>
  );
}

export default Test;
