import React from 'react';
import './App.css';

function App() {
  const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594011098976&di=94da87212ab32cf92347b3a483a03a97&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg'
  const cls = 'images'

  return (
    <>
      <ul className='list'>
        <img className={cls} src={imgSrc} style={{
          marginLeft : '0',
          border:'10px solid #ccc',
          borderRadius:'10px'
        }} alt=""/>
      </ul>
    </>
  );
}

export default App;
