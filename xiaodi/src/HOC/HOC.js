import React, { Component } from 'react'

//编写第一个HOC，传递一个组件进去，返回一个新的组件 （返回的是函数组件）
const withLearnReact = (Comp) => {
    const NewComponent = (props) => {
        return <Comp {...props} name="欢迎大家来到小D课堂学习React"></Comp>
    }
    return NewComponent
}

// 编写第二个高阶组件，重写生命周期，注意，重写生命周期需要用class组件 （返回的是class组件）
const withLifeCycle = (Comp) => {
    class NewComponent extends Component{
        //重写组件的生命周期
        componentDidMount(){
            console.log('重写componentDidMount生命周期')
        }
        render(){
            return <Comp {...this.props}></Comp>
        }
    }
    return NewComponent
}

//装饰器写法 
@withLearnReact
@withLifeCycle
class HOC extends Component {
    render() {
        return (
            <div>
                <h1>欢迎大家体验HOC的写法</h1>
                {this.props.title}
                <p>姓名：{this.props.name}</p>
            </div>
        )
    }
}

//链式调用
// export default withLifeCycle(withLearnReact(HOC)) 
//装饰器写法
export default HOC