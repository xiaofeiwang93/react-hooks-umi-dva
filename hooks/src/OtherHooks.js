import React, {useMemo, useCallback, useRef} from 'react'

const UseRefComp = ()=> {
    const inputref = useRef()
    const getValue = () => {
        console.log(inputref.current.value)
    }
    return (
        <div>
            <input ref={inputref} type="text"></input>
            <button onClick={getValue}>获取input的值</button>
        </div>
    )
}

export default function OtherHooks() {
    const obj1 = {height: '180', name: 'Tim', age:'15'}
    const obj2 = {height: '170', name: 'Jerry', age:'18', sex:'女'}
    //使用useMemo
    // const memoVule = useMemo(() => Object.assign(obj1, obj2), [obj1, obj2])
    //使用useCallback
    const memoCallback = useCallback(() => Object.assign(obj1, obj2), [obj1, obj2])
    //输出useMemo返回值
    // console.log(memoVule)
    //输出useCallback返回值
    console.log(memoCallback)
    return (
        <div>
            {/* 使用useMemo返回值 */}
            {/* 姓名：{memoVule.name} */}
            {/* 使用useCallback返回值 */}
            姓名：{memoCallback().name}
            <UseRefComp></UseRefComp>
        </div>
    )
}
