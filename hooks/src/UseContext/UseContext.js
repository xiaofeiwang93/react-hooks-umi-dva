import React, {useContext} from 'react'
import Child from './ContextChild'
import {tim} from '../Store/index'

//创建Context对象
// export const Context = React.createContext({name:'Tim', age:'18'})

export default function UseContext() {
    const ctx = useContext(tim)
    console.log(ctx)
    return (
        <div>
            <h1>今天使用useContext</h1>
            <div>我是{ctx.name}----今年{ctx.age}岁</div>
            <p>使用子组件</p>
            <Child></Child>
        </div>
    )
}
