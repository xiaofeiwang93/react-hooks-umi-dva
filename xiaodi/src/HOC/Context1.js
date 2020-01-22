import React, { Component } from 'react'
//没使用Context的写法，每一层都要把最上层传入的属性组件全量传递下去

//先创建一个数据源，供等下使用
let store={
    name: 'Time',
    from: '小D课堂'
}

//function组件
// function Info(props){
//     return (
//         <div>
//             <p>姓名：{props.name}</p>
//             <p>来自哪里：{props.from}</p>
//         </div>
//     )
// }

//class组件
class Info extends Component{
    render(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>来自哪里：{this.props.from}</p>
            </div>
        )
    }
}

function ToolBar(props){
    return(
        <Info {...props}></Info>
    )
}

export default class Context1 extends Component {
    render() {
        return (
            <div>
                <ToolBar name={store.name} from={store.from}></ToolBar>
            </div>
        )
    }
}
