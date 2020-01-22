import React, { Component } from 'react'
// import store from './store'
import {connect} from 'react-redux'
import {add, reduce, asyncAdd} from './count.redux'

// //返回数据的方法，供我们connect的使用，他会帮我们把数据转换成props
// const mapStateToProps = (state) => {
//     return {
//         count: state
//     }
// }

// //返回dispatch方法的方法，供我们connect使用，帮我们把dispatch转换成属性props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: ()=>dispatch({type: 'add'}),
//         reduce: ()=>dispatch({type: 'reduce'}),
//     }
// }

@connect(
    state => ({count: state}),
    {add, reduce, asyncAdd}
    // dispatch => ({
    //     add: () => dispatch({type:'add'}),
    //     reduce: () => dispatch({type:'reduce'})
    // })
    //因为redux默认只支持同步写法，所以上面返回dispatch的方法可以简写成下面的代码
    // {
    //     add: () => ({type:'add'}),
    //     reduce: () => ({type:'reduce'}),
    //     asyncAdd: () => dispatch => {
    //         setTimeout(() => {
    //             dispatch({type: 'add'})
    //         }, 2000);
    //     }
    // }
)

class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h1>学习redux，编写第一个Redux累加器</h1>
                {/* redux写法 */}
                {/* 通过我们的store的getState方法，可以获取到状态数据 */}
                {/* {store.getState()} */}
                {/* redux写法 */}
                {/* <div>
                    <button onClick={()=>store.dispatch({type:'add'})}>加一</button>
                    <button onClick={()=>store.dispatch({type:'reduce'})}>减一</button>
                </div> */}
                {/* react-redux获取状态的写法 */}
                {this.props.count}
                {/* react-redux获取状态的写法 */}
                <div>
                    <button onClick={()=>this.props.add()}>加一</button>
                    <button onClick={()=>this.props.reduce()}>减一</button>
                    <button onClick={()=>this.props.asyncAdd()}>延时加一</button>
                </div>
            </div>
        )
    }
}

//react-redux的写法
// export default connect(mapStateToProps, mapDispatchToProps)(FirstRedux)
//高阶组件装饰器的写法
export default FirstRedux