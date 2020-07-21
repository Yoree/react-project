import React from 'react'
import './pager.css'
/**
 *1.current :初始页码
 * 2.total :总数据
 * 3.limit: 页容量和每页的数量
 * 4。panelNumber:数字页码最多显示多少状态
 * 
 * 
 * @export
 * @class Pager
 * @extends {Component}
 */
export default function Pager(props){
    const pageNumber = gepageNumber(props);
    const min = getMinNumber(props)
    const max = getMaxNumber(min,pageNumber,props)
    let numbers = [];
    for(let i = min; i<=max;i++){
        numbers.push(<span className={props.current == i ? 'item active':'item'} onClick={()=>toPage(i,props)}>{i}</span>)
    }

    return (
        <>
            <span onClick={()=>toPage(1,props)} className={props.current == 1 ? 'item disabled':'item'}>首页</span>
            <span onClick={()=> toPage(props.current-1<1?1:props.current-1,props)} className={props.current == 1 ? 'item disabled':'item'}>上一页</span>
            {numbers}
            <span onClick={()=> toPage(props.current+1>pageNumber?pageNumber:props.current+1,props)} className={props.current == pageNumber ? 'item disabled':'item'}>下一页</span>
            <span onClick={()=> toPage(pageNumber,props)}  className={props.current == pageNumber ? 'item disabled':'item'}>末页</span>
            
            <span className="current">{props.current}</span>
            /
            <span className="current">{pageNumber}</span>
            
        </>
    )
}

function getMinNumber(props){
    let min = props.current - Math.floor(props.panelNumber / 2)
    if(min < 1){
        min = 1;
    }
    return min;
}

function getMaxNumber(min,pageNumber,props){
    let max = min + props.panelNumber - 1
    if(max > pageNumber){
        max = pageNumber
    }
    return max;

}

function toPage(target,props){
    if(props.current === target){
        return
    }
    props.onPageChange && props.onPageChange(target);
}


function gepageNumber(props){
    return Math.ceil(props.total / props.limit)
}