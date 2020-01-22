import React, { Component } from 'react'

//演示使用Context

//先创建一个数据源，供等下使用
let store={
    name: 'Time',
    from: '小D课堂'
}

//创建上下文Context
const XdContext = React.createContext()
const {Provider, Consumer} = XdContext

class Info extends Component{
    render(){
        return (
            <Consumer>
                {
                    store => {
                        return (
                            <div>
                                <p>姓名：{store.name}</p>
                                <p>来自哪里：{store.from}</p>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

function ToolBar(){
    return(
        <Info></Info>
    )
}

export default class Context2 extends Component {
    render() {
        return (
            <div>
                <Provider value={store}>
                    <ToolBar></ToolBar>
                </Provider>
            </div>
        )
    }
}
