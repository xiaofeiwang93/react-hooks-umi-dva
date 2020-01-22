import React from 'react'
import PropsDemo from './PropsDemo'
import ConditionLoop from './ConditionLoop'
import logo from './logo.png'
import './App.css'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg1: '我是msg1',
            count: 0,
            inputval: '我是input的初始值' //绑定input的value的属性值 
        }
    }
    //这里跟上面constructor是一样的
    // state={
    //     msg1:'我是msg1'
    // }

    componentDidMount() {
        // this.setState({
        //     count:this.state.count + 1
        // }, ()=>(
        //     console.log(this.state.count, '这里是后输出的，因为setState是异步的')
        // ))
        // console.log(this.state.count, '这里是先输出的')
        // 如果修改的state是依赖上一次更新的states，可以这样写
        // this.setState((prevState, prevProps)=>{
        //     return {
        //         count: prevState.count + 1
        //     }
        // })
        // 上面代码简略的写法
        this.setState((prevState, prevProps)=>(
            {
                count: prevState.count + 1
            }
            ), ()=>(
                console.log(this.state.count, '这里是后输出的，因为setState是异步的')
        ))
        console.log(this.state.count, '这里是先输出的')
    }

    //绑定input的onChange的事件
    inputValChange = (e) => {
        console.log(e.target.value)
        this.setState({
            inputval: e.target.value
        })
    }

    render(){
        const msg = '大家好'
        return(
            <div>
                <p>欢迎学习React</p>
                {/* 变量渲染 */}
                {msg}
                <h1>{this.state.msg1}</h1>
                <h2>{this.state.count}</h2>
                {/* 组件属性传递 props */}
                <PropsDemo title="Tim老师教React"></PropsDemo>
                {/* 条件渲染和数据循环渲染 */}
                <ConditionLoop title="条件渲染"></ConditionLoop>
                <img src={logo} style={{width:'240px', height:'60px'}} className="xdlogo" alt=""></img>
                <h1>实现React对input的双向绑定</h1>
                <input type="text" value={this.state.inputval} onChange={e=>this.inputValChange(e)}></input>
                {this.state.inputval}
            </div>
        )
    }
} 