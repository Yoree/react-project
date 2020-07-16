import React from 'react';
import ReactDOM from 'react-dom';
import Student from './component/Student'
import StudentList from './component/StudentList'
ReactDOM.render(
  <div>
    正在加载中。。。
  </div>,
  document.getElementById('root')
);

const datas = [
  {
    id:1,
    login:'asdf',
    node_id:13259744479
  },
  {
    id:2,
    login:'eas',
    node_id:15005045554
  },
  {
    id:3,
    login:'nest',
    node_id:13455324234
  }
]

setInterval(() => {
  ReactDOM.render(
    <div>
      <StudentList datas={datas}></StudentList>
    </div>,
    document.getElementById('root')
  );
}, 2000);

