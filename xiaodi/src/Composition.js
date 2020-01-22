import React from 'react'

function Dialog(props){
    return (
        <div style={{border: `5px solid ${props.color || "green"}`}}>
            {/* 相当于vue里面的匿名插槽 */}
            {props.children}
            {/* 相当于vue里面的具名插槽 */}
            {props.btn}
        </div>
    )
}

export default function Composition() {
    const confirmBtn=(
        <button onClick={()=>alert('React好不好玩？')}>确认</button>
    )
    return (
        <div>
            <h1>组件复合的写法</h1>
            <Dialog color='pink' btn={confirmBtn}>
                <h2>欢迎来到小D课堂</h2>
                <p>欢迎大家来到小D课堂学习React</p>
            </Dialog>
        </div>
    )
}
