import React from 'react';
import ReactDOM from 'react-dom';
import MyFunComponent from './MyFunComponent';
import MyClassComponent from './myClassComponent';

ReactDOM.render(
    <div>
        <MyFunComponent number='22'/>
        <MyFunComponent number={1}/>
        <MyClassComponent test={15005045554 } ennable obj={{
            name:'funo',
            age: 1000
        }}/>
        <MyClassComponent ui={<h5>内容</h5>}/>
    </div>
    ,document.getElementById('root')
)
