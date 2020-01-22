import React, {useState, useEffect} from 'react'

//在这组件里面使用useEffect

function Effect(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        //处理副作用逻辑
        document.title = `你点击了${count}次`
        return ()=>{
            console.log('组件卸载或更新了')
        }
    },[]) //如果要查组件卸载，这里就要传一个空的array
    return(
        <div>
            <div>你点击了{count}次</div>
            <button onClick={()=>setCount(count + 1)}>点击+1</button>
        </div>
    )
}

export default function App() {
    const [count, setCount] = useState(10)
    return (
        <div>
            我是函数式组件，今天学习React Hook
            <div>你点击了{count}次</div>
            <button onClick={()=>setCount(count + 1)}>点击+1</button>
            <button onClick={()=>setCount(count - 1)}>点击-1</button>
            <p>使用使用了useEffect的组件</p>
            {count >= 10 ? <Effect></Effect> : null}
        </div>
    )
}
