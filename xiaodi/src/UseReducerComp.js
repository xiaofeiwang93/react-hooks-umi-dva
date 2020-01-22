import React, {useReducer} from 'react'

const initState = {count:0}

const reducer = (state, action) => {
    //根据我们dispatch的action，去更新我们的state
    switch(action.type){
        //当传入的type是reset的时候，代表重置，就返回初始的state
        case 'reset':
            return initState;
        //当传入的type是add的时候，代表取得就得state进行加一
        case 'add':
            return {count: state.count + 1};
        //当传入的type是reduce的时候，代表取得就得state进行减一
        case 'reduce':
            return {count: state.count - 1};
        //当传入的type都不符合，就返回原来的state
        default: 
            return state;
    }
}

export default function UseReducerComp() {
    const [state,dispatch] = useReducer(reducer, initState)
    console.log(state)
    return (
        <div>
            <p>当前数量为：{state.count}</p>
            <div>
                <button onClick={()=>dispatch({type:'reset'})}>重置</button>
                <button onClick={()=>dispatch({type:'add'})}>+1</button>
                <button onClick={()=>dispatch({type:'reduce'})}>-1</button>
            </div>
        </div>
    )
}
